import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import ColumnFilter from "./ColumnFilter";

interface Employee {
  id: string;
  name: string;
  position: string;
  duration: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}

// tables data
const dataOne: Employee[] = [
  {
    id: "155",
    name: "Brielle Kuphal",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1977",
    email: "Brielle45@gmail.com",
    phone: "+323(29)-232-44-74",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "156",
    name: "Barney Murray",
    position: "Developer",
    duration: "3 years",
    birthDate: "25 Nov, 1966",
    email: "Barney@gmail.com",
    phone: "+323(29)-232-75-44",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "157",
    name: "Ressie Ruecker",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1955",
    email: "Ressie@gmail.com",
    phone: "+323(29)-785-44-44",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "158",
    name: "Teresa Mertz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Teresa@gmail.com",
    phone: "+323(29)-232-15-44",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "159",
    name: "Chelsey Hackett",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1969",
    email: "Chelsey@gmail.com",
    phone: "+323(29)-232-56-89",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "160",
    name: "Tatyana Metz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Tatyana@gmail.com",
    phone: "+323(29)-789-42-23",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "161",
    name: "Oleta Harvey",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Oleta@gmail.com",
    phone: "+323(29)-852-63-95",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "162",
    name: "Bette Haag",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Bette@gmail.com",
    phone: "+323(29)-852-23-01",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "163",
    name: "Meda Ebert",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Meda@gmail.com",
    phone: "+323(29)-232-15-23",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "164",
    name: "Elissa Stroman",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 2000",
    email: "Elissa@gmail.com",
    phone: "+323(29)-756-25-63",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "165",
    name: "Sid Swaniawski",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1999",
    email: "Sid@gmail.com",
    phone: "+323(29)-859-52-12",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "166",
    name: "Madonna Hahn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1965",
    email: "Madonna@gmail.com",
    phone: "+323(29)-896-52-13",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "167",
    name: "Waylon Kihn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1975",
    email: "Waylon@gmail.com",
    phone: "+323(29)-420-45-65",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "168",
    name: "Jaunita Lindgren",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Jaunita@gmail.com",
    phone: "+323(29)-789-45-89",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "169",
    name: "Lenora MacGyver",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1998",
    email: "Lenora@gmail.com",
    phone: "+323(29)-789-12-75",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "159",
    name: "Chelsey Hackett",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1968",
    email: "Chelsey@gmail.com",
    phone: "+323(29)-963-14-52",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "160",
    name: "Tatyana Metz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1984",
    email: "Tatyana@gmail.com",
    phone: "+323(29)-856-75-12",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "161",
    name: "Oleta Harvey",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Oleta@gmail.com",
    phone: "+323(29)-963-15-95",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "163",
    name: "Meda Ebert",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1988",
    email: "Meda@gmail.com",
    phone: "+323(29)-258-62-32",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "164",
    name: "Elissa Stroman",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1998",
    email: "Elissa@gmail.com",
    phone: "+323(29)-856-41-44",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "165",
    name: "Sid Swaniawski",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1997",
    email: "Sid@gmail.com",
    phone: "+323(29)-147-75-56",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "166",
    name: "Madonna Hahn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1964",
    email: "Madonna@gmail.com",
    phone: "+323(29)-863-25-13",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "167",
    name: "Waylon Kihn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Waylon@gmail.com",
    phone: "+323(29)-896-75-25",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "168",
    name: "Jaunita Lindgren",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Jaunita@gmail.com",
    phone: "+323(29)-789-12-45",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "169",
    name: "Lenora MacGyver",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1985",
    email: "Lenora@gmail.com",
    phone: "+323(29)-856-75-12",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
];

// table header
const column = [
  {
    Header: "Name/Id",
    accessor: "name",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "BDay",
    accessor: "birthDate",
  },
  {
    Header: "Email/Phone",
    accessor: "email",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DataTableOne = () => {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => dataOne, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
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
    <section className="data-table-common rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark py-4">
      <div className="flex justify-between  px-8 pb-4">
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
        className="datatable-table datatable-one border-collapse w-full break-words table-auto overflow-hidden px-4 md:overflow-auto md:table-fixed md:px-8"
      >
        <thead className="px-4 border-separate">
          {headerGroups.map((headerGroup, key) => (
            <tr
              className="border-t border-stroke"
              {...headerGroup.getHeaderGroupProps()}
              key={key}
            >
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

                  {column.canFilter ? column.render("Filter") : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <tr
                className="border-t border-stroke"
                {...row.getRowProps()}
                key={key}
              >
                {row.cells.map((cell, key) => {
                  return (
                    <td {...cell.getCellProps()} key={key}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between px-6 pt-5 border-t border-stroke">
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
              className={`${
                pageIndex === index && "text-white bg-primary"
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
        <p className="font-medium">
          Showing {pageIndex + 1} 0f {pageOptions.length} pages
        </p>
      </div>
    </section>
  );
};

export default DataTableOne;
