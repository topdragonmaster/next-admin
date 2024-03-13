"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useDispatch, useSelector } from 'react-redux';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { stockCodes } from "@/const";
export const dynamic = 'force-dynamic';


const Report: React.FC = () => {

  const [stationFilter, setStationFilter] = useState('all')
  const [codeFilter, setCodeFilter] = useState('all')
  const [fromDateFilter, setFromDateFilter] = useState('')
  const [toDateFilter, setToDateFilter] = useState('')

  const { stations } = useSelector((state: any) => state.station)
  const { accounts } = useSelector((state: any) => state.account)
  const { transactions } = useSelector((state: any) => state.transaction)
  const { trades } = useSelector((state: any) => state.trade)

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'station':
        setStationFilter(value)
        return
      case 'code':
        setCodeFilter(value)
        return
      case 'fromDate':
        setFromDateFilter(value)
        return
      case 'toDate':
        setToDateFilter(value)
        return
      default:
        return
    }
  }

  const clearFilter = () => {
    setStationFilter('all')
    setCodeFilter('all')
    setFromDateFilter('')
    setToDateFilter('')
  }

  const filteredTrades = useMemo(() => {
    const filteredData = trades.filter(trade => {
      return (
        (stationFilter === 'all' || trade?.account?.station?._id === stationFilter) &&
        (codeFilter === 'all' || trade?.stockCode === codeFilter) &&
        (fromDateFilter === '' || new Date(trade?.date).getTime() > new Date(fromDateFilter).getTime()) &&
        (toDateFilter === '' || new Date(trade?.date).getTime() < new Date(toDateFilter).getTime())
      );
    });
    return filteredData.map(trade => ({ ...trade, station: trade.account.station }))
  }, [stationFilter, codeFilter, fromDateFilter, toDateFilter])

  const filteredTransactions = useMemo(() => {
    const filteredData = transactions.filter(transaction => {
      return (
        (stationFilter === 'all' || transaction?.station?._id === stationFilter) &&
        (codeFilter === 'all' || transaction?.stockCode === codeFilter) &&
        (fromDateFilter === '' || new Date(transaction?.date).getTime() >= new Date(fromDateFilter).getTime()) &&
        (toDateFilter === '' || new Date(transaction?.date).getTime() <= new Date(toDateFilter).getTime())
      );
    });
    return filteredData
  }, [stationFilter, codeFilter, fromDateFilter, toDateFilter])

  console.log(filteredTrades, transactions)

  const groupBy = (array, keyGetters) => {
    return array.reduce((map, item) => {
      const keys = keyGetters.map(keyGetter => keyGetter(item));
      let currentMap = map;
      keys.forEach((key, index) => {
        if (!currentMap.has(key)) {
          currentMap.set(key, index === keyGetters.length - 1 ? [] : new Map());
        }
        currentMap = currentMap.get(key);
      });
      currentMap.push(item);
      return map;
    }, new Map());
  }

  function getKeyGetters(station, stockCode) {
    return [item => item.station.name, item => item.stockCode];
  }

  const grouped = groupBy([...filteredTransactions, ...filteredTrades], getKeyGetters(stationFilter, codeFilter))

  const groupedArr = []

  Array.from(grouped.values()).forEach((map: Map<string, Array<any>>) => {
    Array.from(map.values()).forEach(items => {
      const result = {
        _id: items[0]._id,
        stockCode: items[0].stockCode,
        station: items[0]?.station?.name,
        sell: 0,
        buy: 0,
        withdraw: 0,
        deposit: 0,
        total: 0,
      }

      items.forEach(item => {
        switch (item.type) {
          case 'buy':
            result.buy += item.price * item.amount
            result.total += item.price * item.amount
            return
          case 'sell':
            result.sell += item.price * item.amount
            result.total -= item.price * item.amount
            return
          case 'deposit':
            result.deposit += item.amount
            result.total += item.amount
            return
          case 'withdraw':
            result.withdraw += item.amount
            result.total -= item.amount
            return
        }
      })
      groupedArr.push(result)
    })
  })

  const buyAmount = filteredTrades.reduce((prev, cur) => {
    prev += cur.type === "buy" ? cur.amount * cur.price : 0
    return prev
  }, 0)

  const sellAmount = filteredTrades.reduce((prev, cur) => {
    prev += cur.type === "sell" ? cur.amount * cur.price : 0
    return prev
  }, 0)

  const depositAmount = filteredTransactions.reduce((prev, cur) => {
    prev += cur.type === "deposit" ? cur.amount : 0
    return prev
  }, 0)

  const withdrawAmount = filteredTransactions.reduce((prev, cur) => {
    prev += cur.type === "withdraw" ? cur.amount : 0
    return prev
  }, 0)

  return (
    <>
      <Breadcrumb pageName="Report" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col-reverse gap-5 xl:flex-row xl:justify-between">
          <div className="w-full mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Station <span className="text-meta-1">*</span>
            </label>
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select value={stationFilter} onChange={handleChange} name="station" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option key={"all"} value={'all'}>All</option>
                {stations.map(station =>
                  <option key={station._id} value={station._id}>
                    {station.name}
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

          <div className="w-full mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Stock <span className="text-meta-1">*</span>
            </label>
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select value={codeFilter} onChange={handleChange} name="code" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option key={"all"} value={'all'}>All</option>
                {stockCodes.map(stockCode =>
                  <option key={stockCode} value={stockCode}>
                    {stockCode}
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

          <div className="w-full">
            <label className="mb-3 block text-black dark:text-white">
              From
            </label>
            <div className="relative">
              <input
                type="date"
                name="fromDate"
                value={fromDateFilter}
                onChange={handleChange}
                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="mb-3 block text-black dark:text-white">
              To
            </label>
            <div className="relative">
              <input
                type="date"
                name="toDate"
                value={toDateFilter}
                onChange={handleChange}
                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="flex items-center justify-center rounded py-2.5 text-center font-medium text-primary hover:bg-opacity-90"
              onClick={clearFilter}
            >
              Clear Filter
            </button>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4 md:p-6 xl:p-7.5">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                  Reports
                </h2>
              </div>
            </div>
          </div>

          <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
            <div className="flex items-center justify-around">
              <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                <span className="font-medium">Stock</span>
              </div>
              <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                <span className="font-medium">Station</span>
              </div>
              <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                <span className="font-medium">Buy</span>
              </div>
              <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                <span className="font-medium">Sell</span>
              </div>
              <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                <span className="font-medium">Deposit</span>
              </div>
              <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                <span className="font-medium">Withdraw</span>
              </div>
              <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                <span className="font-medium">Profit/Loss</span>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 xl:p-7.5">
            <div className="flex flex-col gap-7">
              {groupedArr.length > 0 ? groupedArr.map(({ stockCode, station, buy, sell, withdraw, deposit, total, _id }) => (
                <div className="flex items-center justify-around gap-3" key={_id}>
                  <div className="w-2/12 xl:w-3/12">
                    <div className="flex items-center justify-center">
                      <span className="font-medium xl:block">
                        {stockCode}
                      </span>
                    </div>
                  </div>
                  <div className="w-2/12 xl:w-3/12">
                    <div className="flex items-center justify-center">
                      <span className="font-medium xl:block">
                        {station}
                      </span>
                    </div>
                  </div>
                  <div className="w-2/12 xl:w-3/12">
                    <div className="flex items-center justify-center">
                      <span className="font-medium xl:block">
                        {buy}
                      </span>
                    </div>
                  </div>
                  <div className="w-2/12 xl:w-3/12">
                    <div className="flex items-center justify-center">
                      <span className="font-medium xl:block">
                        {sell}
                      </span>
                    </div>
                  </div>
                  <div className="w-2/12 xl:w-3/12">
                    <div className="flex items-center justify-center">
                      <span className="font-medium xl:block">
                        {deposit}
                      </span>
                    </div>
                  </div>
                  <div className="w-2/12 xl:w-3/12">
                    <div className="flex items-center justify-center">
                      <span className="font-medium xl:block">
                        {withdraw}
                      </span>
                    </div>
                  </div>
                  <div className="w-2/12 xl:w-3/12">
                    <div className="flex items-center justify-center">
                      <span className="font-medium xl:block">
                        {total}
                      </span>
                    </div>
                  </div>

                </div>
              )) : <div className="mx-auto"> No data</div>}
            </div>
          </div>
        </div>

        <div className="rounded-sm my-4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4 md:p-6 xl:p-7.5">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                  Total
                </h2>
              </div>
            </div>
          </div>

          <div className="flex border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
            <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
              <div className="mb-10">
                <h4 className="mb-4 text-xl font-semibold text-black dark:text-white md:text-2xl">
                  Buy
                </h4>
                <p>
                  {`$${buyAmount}`}
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
              <div className="mb-10">
                <h4 className="mb-4 text-xl font-semibold text-black dark:text-white md:text-2xl">
                  Sell
                </h4>
                <p>
                  {`$${sellAmount}`}
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
              <div className="mb-10">
                <h4 className="mb-4 text-xl font-semibold text-black dark:text-white md:text-2xl">
                  Deposit
                </h4>
                <p>
                  {`$${depositAmount}`}
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
              <div className="mb-10">
                <h4 className="mb-4 text-xl font-semibold text-black dark:text-white md:text-2xl">
                  Withdraw
                </h4>
                <p>
                  {`$${withdrawAmount}`}
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
              <div className="mb-10">
                <h4 className="mb-4 text-xl font-semibold text-black dark:text-white md:text-2xl">
                  Profit/Loss
                </h4>
                <p>
                  {`$${buyAmount - sellAmount + depositAmount - withdrawAmount}`}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-full px-4 xl:w-6/12">
            <div className="mr-10 text-right md:ml-auto">
              <div className="ml-auto sm:w-1/2">
                <p className="mb-4 flex justify-between font-medium text-black dark:text-white">
                  <span> Subtotal </span>
                  <span> $120.00 </span>
                </p>
                <p className="mb-4 flex justify-between font-medium text-black dark:text-white">
                  <span> Shipping Cost (+) </span>
                  <span> $10.00 </span>
                </p>
                <p className="mb-4 mt-2 flex justify-between border-t border-stroke pt-6 font-medium text-black dark:border-strokedark dark:text-white">
                  <span> Total Payable </span>
                  <span> $130.00 </span>
                </p>
              </div>

              <div className="mt-10 flex flex-col justify-end gap-4 sm:flex-row">
                <button className="flex items-center justify-center rounded border border-primary py-2.5 px-8 text-center font-medium text-primary hover:bg-opacity-90">
                  Download Report
                </button>
                <button className="flex items-center justify-center rounded bg-primary py-2.5 px-8 text-center font-medium text-gray hover:bg-opacity-90">
                  Send Report
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Report;
