"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { deleteTransaction, createTransaction, getTransaction, updateTransaction } from "@/services/transaction";
import { deleteTransaction as deleteTransactionAction } from "@/store/actions/transactionAction";
import { toast } from "react-toastify";
// import { stockCodes } from "@/const";
import { columns } from "./const";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";

export const dynamic = 'force-dynamic';

const Transaction = () => {

  const [transactionPopupOpen, setTransactionPopupOpen] = useState(false)
  const [isCreate, setIsCreate] = useState(true);

  const { stations } = useSelector((state: any) => state.station)
  const { accounts } = useSelector((state: any) => state.account)
  const { transactions } = useSelector((state: any) => state.transaction)
  const { stockCodes } = useSelector((state: any) => state.stockCode)


  const tableData = useMemo(() => transactions?.map(transaction => ({
    _id: transaction._id,
    stationId: transaction?.station?._id,
    stockCode: transaction.stockCode,
    stationName: transaction?.station?.name,
    amount: transaction.amount,
    type: transaction.type,
    date: transaction.date.slice(0, 10),
  })), [transactions])

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    _id: null,
    stockCode: stockCodes[0]?.name,
    station: stations[0]?._id,
    amount: 0,
    type: 'withdraw',
    date: null,
  })

  const handleTransactionDelete = async (_id) => {
    console.log(_id)
    const data = await deleteTransaction(_id)
    if (data.success) {
      dispatch(deleteTransactionAction(_id))
      toast.success(data.message)
      return
    }
    toast.error(data.message)
  }

  const handleTransactionEditOpen = async (row) => {
    setIsCreate(false);
    setFormData({
      _id: row._id,
      stockCode: row.stockCode,
      station: row.stationId,
      amount: row.amount,
      type: row.type,
      date: row.date,
    })
    setTransactionPopupOpen(true);
  }

  const handleTransactionEdit = async (e) => {
    e.preventDefault()

    if (formData.amount === 0) {
      toast.warning('Input the Amount ')
      return
    }

    if (!formData.date) {
      toast.warning('Select the date')
      return
    }
    const data = await updateTransaction({ ...formData })
    if (data.success) {
      await getTransaction(dispatch)
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }

    setTransactionPopupOpen(false)
  }


  const handleTransactionCreate = async (e) => {
    e.preventDefault()

    console.log(formData)

    if (formData.amount === 0) {
      toast.warning('Input the Amount ')
      return
    }

    if (!formData.date) {
      toast.warning('Select the date')
      return
    }

    const data = await createTransaction({ ...formData })
    if (data.success) {
      await getTransaction(dispatch)
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
    setTransactionPopupOpen(false)
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const tableInstance = useTable(
    {
      columns,
      data: tableData,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Transaction" />
      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-4 md:p-6 xl:p-7.5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                    Transaction
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setIsCreate(true)
                    setTransactionPopupOpen(true)
                  }}
                  className="flex items-center gap-2 rounded-full bg-primary py-3 px-3 font-medium text-white hover:bg-opacity-80"
                >
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section className="data-table-common data-table-two rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark  py-4">
              <div className="flex justify-between border-b border-stroke px-8 pb-4">
                <div className="w-100">
                  <input
                    type="text"
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="border border-stroke focus:border-primary outline-none rounded-md w-full px-5 py-2.5"
                    placeholder="Search..."
                  />
                </div>

                <div className="flex items-center font-medium">
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="pl-2"
                  >
                    {[5, 10, 20, 50].map((page) => (
                      <option key={page} value={page}>
                        {page}
                      </option>
                    ))}
                  </select>
                  <p className="text-boxdark pl-2">Entries Per Page</p>
                </div>
              </div>

              <table
                {...getTableProps()}
                className="datatable-table w-full border-collapse break-words table-auto overflow-hidden px-2 md:overflow-auto md:table-fixed md:px-8"
              >
                <thead>
                  {headerGroups.map((headerGroup, key) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={key}>
                      {headerGroup.headers.map((column, key) => (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          key={key}
                        >
                          <div className="flex items-center">
                            <span> {column.render("Header")}</span>

                            <div className="inline-flex flex-col space-y-[2px] ml-2">
                              <span className="inline-block">
                                <svg
                                  className="fill-current"
                                  width="10"
                                  height="5"
                                  viewBox="0 0 10 5"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5 0L0 5H10L5 0Z" fill="" />
                                </svg>
                              </span>
                              <span className="inline-block">
                                <svg
                                  className="fill-current"
                                  width="10"
                                  height="5"
                                  viewBox="0 0 10 5"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                    fill=""
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </th>
                      ))}
                      <th key='action'>
                        Action
                      </th>
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, key) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={key}>
                        {row.cells.map((cell, key) => {
                          return (
                            <td {...cell.getCellProps()} key={key}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                        <td className="item-center" key="action">
                          <DropdownDefault
                            onEdit={() => handleTransactionEditOpen(row.original)}
                            onDelete={() => handleTransactionDelete(row.original._id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="flex justify-between px-8 pt-5 border-t border-stroke">
                <p className="font-medium">
                  Showing {pageIndex + 1} 0f {pageOptions.length} pages
                </p>
                <div className="flex">
                  <button
                    className="p-1 px-2 rounded-md cursor-pointer hover:text-white hover:bg-primary flex items-center justify-center"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    {"<"}
                  </button>

                  {pageOptions.map((_page, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        gotoPage(index);
                      }}
                      className={`${pageIndex === index && "text-white bg-primary"
                        } p-1 px-3 rounded-md cursor-pointer hover:text-white hover:bg-primary flex items-center justify-center mx-1`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    className="p-1 px-2 rounded-md cursor-pointer hover:text-white hover:bg-primary flex items-center justify-center"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 py-5 px-4 ${transactionPopupOpen === true ? 'block' : 'hidden'
          }`}
      >
        <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
          <button
            onClick={() => setTransactionPopupOpen(false)}
            className="absolute right-1 top-1 sm:right-5 sm:top-5"
          >
            <svg
              className="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z"
                fill=""
              />
            </svg>
          </button>

          <form onSubmit={isCreate ? handleTransactionCreate : handleTransactionEdit}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Code <span className="text-meta-1">*</span>
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select value={formData.stockCode} onChange={handleChange} name="stockCode" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      {stockCodes.map(code => <option key={code._id} value={code.name}>{code.name}</option>)}
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Type <span className="text-meta-1">*</span>
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select value={formData.type} onChange={handleChange} name="type" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="withdraw">Withdraw</option>
                      <option value="deposit">Deposit</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Station <span className="text-meta-1">*</span>
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select value={formData.station} onChange={handleChange} name="station" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                    {stations.map(station =>
                      <option key={station?._id} value={station?._id}>
                        {station?.name}
                      </option>)}
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Amount<span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.amount}
                    name="amount"
                    onChange={handleChange}
                    placeholder="Enter the amount"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black dark:text-white">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded bg-primary py-2.5 px-4.5 font-medium text-white">
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_60_9740)">
                    <path
                      d="M18.75 9.3125H10.7187V1.25C10.7187 0.875 10.4062 0.53125 10 0.53125C9.625 0.53125 9.28125 0.84375 9.28125 1.25V9.3125H1.25C0.875 9.3125 0.53125 9.625 0.53125 10.0312C0.53125 10.4062 0.84375 10.75 1.25 10.75H9.3125V18.75C9.3125 19.125 9.625 19.4687 10.0312 19.4687C10.4062 19.4687 10.75 19.1562 10.75 18.75V10.7187H18.75C19.125 10.7187 19.4687 10.4062 19.4687 10C19.4687 9.625 19.125 9.3125 18.75 9.3125Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_60_9740">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {isCreate ? "Add Transaction" : "Edit Transaction"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
