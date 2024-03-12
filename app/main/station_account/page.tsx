"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";
import { deleteStation, createStation, getStation } from "@/services/station";
import { deleteStation as deleteStationAction } from "@/store/actions/stationAction";
import { deleteAccount as deleteAccountAction } from "@/store/actions/accountAction";
import { deleteAccount, createAccount, getAccount } from "@/services/account";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { toast } from "react-toastify";

const Station_Account = () => {
  

  const [stationPopupOpen, setStationPopupOpen] = useState(false)
  const [accountPopupOpen, setAccountPopupOpen] = useState(false)

  const { stations } = useSelector((state: any) => state.station)
  const { accounts } = useSelector((state: any) => state.account)

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    stationName: '',
    accountName: '',
    brokerage: 0,
    station: stations[0]?._id
  })

  console.log(stations, accounts)
  const handleStationDelete = async (_id) => {
    const data = await deleteStation(_id)
    if (data.success) {
      dispatch(deleteStationAction(_id))
      toast.success(data.message)
      return
    }
    toast.error(data.message)
  }

  const handleAccountDelete = async (_id) => {
    const data = await deleteAccount(_id)
    if (data.success) {
      dispatch(deleteAccountAction(_id))
      toast.success(data.message)
      return
    }
    toast.error(data.message)
  }

  const handleStationCreate = async (e) => {
    e.preventDefault()
    if (formData.stationName === '') {
      toast.warning('Input the station name')
      return
    }

    const data = await createStation({ name: formData.stationName })
    console.log(data)
    if (data.success) {
      await getStation(dispatch)
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
    setStationPopupOpen(false)
  }

  const handleAccountCreate = async (e) => {
    console.log(formData)
    e.preventDefault()
    if (!formData.station) {
      toast.warning('Select the station')
      return
    }
    if (!formData.accountName) {
      toast.warning('Input the account name')
      return
    }

    const data = await createAccount({
      name: formData.accountName,
      station: formData.station,
      brokerage: formData.brokerage
    })

    console.log(data)
    if (data.success) {
      await getAccount(dispatch)
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
    setAccountPopupOpen(false)
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="mx-auto">
      <Breadcrumb pageName="Station and Account" />
      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-4">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-4 md:p-6 xl:p-7.5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                    Station
                  </h2>
                </div>
                <button
                  onClick={() => setStationPopupOpen(true)}
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

            <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
              <div className="flex items-center justify-around">
                <div className="w-2/12 xl:w-3/12">
                  <span className="font-medium">Name</span>
                </div>
                <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                  <span className="font-medium">Actions</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 xl:p-7.5">
              <div className="flex flex-col gap-7">
                {stations.length > 0 ? stations.map(({ name, _id }) => (
                  <div className="flex items-center justify-around gap-3" key={_id}>
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <span className="font-medium xl:block">
                          {name}
                        </span>
                      </div>
                    </div>
                    <div className="hidden w-2/12 2xsm:block md:w-1/12">
                      <button onClick={() => handleStationDelete(_id)} className="mx-auto block hover:text-meta-1">
                        <svg
                          className="mx-auto fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z"
                            fill=""
                          />
                          <path
                            d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z"
                            fill=""
                          />
                          <path
                            d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z"
                            fill=""
                          />
                          <path
                            d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )) : <div className="mx-auto"> No data</div>}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-4 md:p-6 xl:p-7.5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                    Account
                  </h2>
                </div>
                <button
                  onClick={() => setAccountPopupOpen(true)}
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

            <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
              <div className="flex items-center justify-around">
                <div className="w-2/12 xl:w-3/12">
                  <span className="font-medium">Station</span>
                </div>
                <div className="w-2/12 xl:w-3/12">
                  <span className="font-medium">Name</span>
                </div>
                <div className="w-2/12 xl:w-3/12">
                  <span className="font-medium">Brokerage</span>
                </div>
                <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                  <span className="font-medium">Actions</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 xl:p-7.5">
              <div className="flex flex-col gap-7">
                {accounts.length > 0 ? accounts.map(({ name, _id, station, brokerage }) => (
                  <div className="flex items-center justify-around gap-3" key={_id}>
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <span className="font-medium xl:block">
                          {station?.name}
                        </span>
                      </div>
                    </div>
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <span className="font-medium xl:block">
                          {name}
                        </span>
                      </div>
                    </div>
                    <div className="w-2/12 xl:w-3/12">
                      <div className="flex items-center gap-4">
                        <span className="font-medium xl:block">
                          {brokerage}
                        </span>
                      </div>
                    </div>
                    <div className="hidden w-2/12 2xsm:block md:w-1/12">
                      <button onClick={() => handleAccountDelete(_id)} className="mx-auto block hover:text-meta-1">
                        <svg
                          className="mx-auto fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z"
                            fill=""
                          />
                          <path
                            d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z"
                            fill=""
                          />
                          <path
                            d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z"
                            fill=""
                          />
                          <path
                            d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )) : <div className="mx-auto"> No data</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 py-5 px-4 ${stationPopupOpen === true ? 'block' : 'hidden'
          }`}
      >
        <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
          <button
            onClick={() => setStationPopupOpen(false)}
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

          <form onSubmit={handleStationCreate}>
            <div className="mb-5">
              <label
                htmlFor="taskTitle"
                className="mb-2.5 block font-medium text-black dark:text-white"
              >
                Station name
              </label>
              <input
                type="text"
                name="stationName"
                id="stationName"
                onChange={handleChange}
                value={formData.stationName}
                placeholder="Enter station name"
                className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              />
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
              Add Station
            </button>
          </form>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 py-5 px-4 ${accountPopupOpen === true ? 'block' : 'hidden'
          }`}
      >
        <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
          <button
            onClick={() => setAccountPopupOpen(false)}
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

          <form onSubmit={handleAccountCreate}>
            <div className="mb-5">
              <label
                htmlFor="taskTitle"
                className="mb-2.5 block font-medium text-black dark:text-white"
              >
                Station
              </label>
              <select value={formData.station} onChange={handleChange} name="station" className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary">
                {stations.map(station => <option key={station?._id} value={station?._id}>{station?.name}</option>)}
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="taskTitle"
                className="mb-2.5 block font-medium text-black dark:text-white"
              >
                Account name
              </label>
              <input
                type="text"
                name="accountName"
                id="accountName"
                onChange={handleChange}
                value={formData.accountName}
                placeholder="Enter station name"
                className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="taskTitle"
                className="mb-2.5 block font-medium text-black dark:text-white"
              >
                Brokerage
              </label>
              <input
                type="number"
                name="brokerage"
                id="brokerage"
                onChange={handleChange}
                value={formData.brokerage}
                placeholder="Enter station name"
                className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              />
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
              Add task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Station_Account;
