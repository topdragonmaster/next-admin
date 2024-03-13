"use client";
import React, { useEffect, useMemo, useState } from "react";
import { getStation } from "@/services/station";
import { getAccount } from "@/services/account";
import { getTrade } from "@/services/trade";
import { getTransaction } from "@/services/transaction";
import { getStockCode } from "@/services/stockCode";

import { ApexOptions } from 'apexcharts';
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useDispatch, useSelector } from 'react-redux';

const CRM: React.FC = () => {
  const dispatch = useDispatch()
  const lineSeries = [
    {
      name: 'Buy Amount',
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: 'Sell Amount',
      data: [0, 0, 0, 0, 0, 0, 0],
    }
  ]

  useEffect(() => {
    getStation(dispatch);
    getAccount(dispatch);
    getTrade(dispatch);
    getTransaction(dispatch);
    getStockCode(dispatch)
  }, [])

  const { stations } = useSelector((state: any) => state.station)
  const { accounts } = useSelector((state: any) => state.account)
  const { transactions } = useSelector((state: any) => state.transaction)
  const { trades } = useSelector((state: any) => state.trade)

  function isInCurrentWeek(date) {
    const currentDate = new Date();

    const startOfWeek = new Date(currentDate);
    startOfWeek.setHours(0, 0, 0, 0 - (currentDate.getDay() * 24 * 60 * 60 * 1000));
    const endOfWeek = new Date(currentDate);
    endOfWeek.setHours(23, 59, 59, 999 + ((6 - currentDate.getDay()) * 24 * 60 * 60 * 1000));

    return date >= startOfWeek && date <= endOfWeek;
  }

  const filteredTrades = useMemo(() => {
    const filteredData = trades.filter(trade => {
      return isInCurrentWeek(new Date(trade.date));
    });
    return filteredData
  }, [])

  const filteredTransactions = useMemo(() => {
    const filteredData = transactions.filter(transaction => {
      return isInCurrentWeek(new Date(transaction.date));
    });
    return filteredData
  }, [])

  filteredTrades.forEach(trade => {
    switch (trade.type) {
      case 'buy':
        lineSeries[0].data[new Date(trade.date).getDay()] += (trade.price * trade.amount)
        return
      case 'sell':
        lineSeries[1].data[new Date(trade.date).getDay()] += (trade.price * trade.amount)
        return
    }
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

  const lineoptions: ApexOptions = {
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#3C50E0', '#C7D2E2', '#D7D2E2', '#C742E2', '#C7D222'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 310,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        // enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: 'smooth',
      // width: ['3.5', '3.5'],
    },

    markers: {
      size: 0,
    },
    // labels: {
    //   show: false,
    //   position: 'top',
    // },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function (e) {
            return '';
            e
          },
        },
      },
      marker: {
        show: !1,
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'SUN',
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: '0px',
        },
      },
    },
  };


  const donutSeries = [buyAmount, sellAmount, depositAmount, withdrawAmount]
  const donutOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#0FADCF", "#80CAEE", "#3C50E0", "#8050CF"],
    labels: ["Buy", "Sell", "Deposit", "WithDraw"],
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          background: "transparent",
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 250,
          },
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-title-sm2 font-bold text-black dark:text-white">
              This Week Overview
            </h2>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
          <div className="flex items-end justify-between">
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
                  Total
                </h4>
                <p>
                  {`$${buyAmount - sellAmount + depositAmount - withdrawAmount}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-7">
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                  Trade Overview
                </h4>
              </div>
            </div>
            <div>
              <div id="chartSeven" className="-ml-5">
                <ApexCharts
                  options={lineoptions}
                  series={lineSeries}
                  type="area"
                  height={310}
                />
              </div>
            </div>

            <div className="flex flex-col text-center xsm:flex-row">
              <div className="border-stroke py-2 dark:border-strokedark xsm:w-1/2 xsm:border-r">
                <p className="font-medium">Buy Amount</p>
                <h4 className="mt-1 text-title-sm font-bold text-black dark:text-white">
                  {`$${buyAmount}`}
                </h4>
              </div>
              <div className="py-2 xsm:w-1/2">
                <p className="font-medium">Sell Amount</p>
                <h4 className="mt-1 text-title-sm font-bold text-black dark:text-white">
                {`$${sellAmount}`}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-5">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            
          </h4>
        </div>
      </div>
      <div className="mb-2">
        <div id="chartEight" className="mx-auto flex justify-center">
          <ApexCharts options={donutOptions} series={donutSeries} type="donut" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-primary"></span>
            <span className="font-medium text-black-2 dark:text-white">
              Buy
            </span>
          </div>

          <span className="inline-block rounded-md bg-primary py-0.5 px-1.5 text-xs font-medium text-white">
            {`$${buyAmount}`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-primary"></span>
            <span className="font-medium text-black-2 dark:text-white">
              Sell
            </span>
          </div>

          <span className="inline-block rounded-md bg-primary py-0.5 px-1.5 text-xs font-medium text-white">
            {`$${sellAmount}`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-primary"></span>
            <span className="font-medium text-black-2 dark:text-white">
              Deposit
            </span>
          </div>

          <span className="inline-block rounded-md bg-primary py-0.5 px-1.5 text-xs font-medium text-white">
            {`$${depositAmount}`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-primary"></span>
            <span className="font-medium text-black-2 dark:text-white">
              WithDraw
            </span>
          </div>

          <span className="inline-block rounded-md bg-primary py-0.5 px-1.5 text-xs font-medium text-white">
            {`$${withdrawAmount}`}
          </span>
        </div>

      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default CRM;
