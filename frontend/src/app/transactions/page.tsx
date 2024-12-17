"use client";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import React from "react";
import Image from "next/image";
import styles from "./TransactionPage.module.scss";
import { Input } from "@/components/ui";
import { Select } from "@/components/ui/select";
import clsx from "clsx";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TransactionsPage() {
  const data = React.useMemo(
    () => [
      {
        recipient_sender: "Bravo Zen Spa",
        category: "Personal Care",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/serenity-spa-and-wellness.jpg",
        amount: -25,
      },
      {
        recipient_sender: "Alpha Analytics",
        category: "General",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/elevate-education.jpg",
        amount: -25,
      },
      {
        recipient_sender: "Delta Consulting",
        category: "Business",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/pixel-playground.jpg",
        amount: -150,
      },
      {
        recipient_sender: "Echo Enterprises",
        category: "Utilities",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/emma-richardson.jpg",
        amount: -75,
      },
      {
        recipient_sender: "Foxtrot Financial",
        category: "Finance",
        imgSrc: "/images/avatars/swift-ride-share.jpg",
        transaction_date: "29 Aug 2024 21:45",
        amount: 200,
      },
      {
        recipient_sender: "Golf Goods",
        category: "Retail",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/sun-park.jpg",
        amount: -50,
      },
      {
        recipient_sender: "Hotel Holdings",
        category: "Real Estate",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/serenity-spa-and-wellness.jpg",
        amount: 300,
      },
      {
        recipient_sender: "India Investments",
        category: "Investments",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/elevate-education.jpg",
        amount: 500,
      },
      {
        recipient_sender: "Juliet Jewelry",
        category: "Luxury",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/pixel-playground.jpg",
        amount: -200,
      },
      {
        recipient_sender: "Kilo Kitchens",
        category: "Home Improvement",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/emma-richardson.jpg",
        amount: -100,
      },
      {
        recipient_sender: "Lima Logistics",
        category: "Transportation",
        transaction_date: "29 Aug 2024 21:45",
        imgSrc: "/images/avatars/swift-ride-share.jpg",
        amount: -250,
      },
      // ...more mock data...
    ],
    []
  );

  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "recipient_sender",
        header: "Recipient/Sender",
        className: styles.recipientSender,
        cell: (info: any) => (
          <div className={'flex gap-4 items-center'}>
            {info.row.original.imgSrc ? (
              <Image
                src={info.row.original.imgSrc}
                alt={`${info.getValue()} profile`}
                className={'rounded-full'}
                width={40}
                height={40}
              />
            ) : (
              <div className={'rounded-full bg-gray-300 flex items-center justify-center'} style={{ width: 40, height: 40 }}>
                <span className={styles.textBold}>
                  {info.getValue().split(' ').map(word => word[0]).join('').toUpperCase()}
                </span>
              </div>
            )}
            <div className={styles.textBold}>{info.getValue()}</div>
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        className: styles.category,
        cell: (info: any) => (
          <div className={styles.textSmall}>{info.getValue()}</div>
        ),
      },
      {
        accessorKey: "transaction_date",
        header: "Transaction Date",
        className: styles.transactionDate,
        cell: (info: any) => (
          <div className={styles.textSmall}>{info.getValue()}</div>
        ),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        className: styles.amount,
        cell: (info: any) => (
          <div className={clsx(styles.textBold, 'text-right')}>
            {info.getValue().toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
    globalFilterFn: 'includesString',
    state: {
      globalFilter,
      sorting: [{ id: sortBy, desc: false }],
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSortBy,
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="box-border flex flex-row items-center p-3 gap-4 w-80 h-11 bg-white border rounded-lg border-gray-900"
        />
        <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#696868]">Sort by</span>
          <Select>
            <SelectTrigger className="flex items-center justify-center p-0 gap-4 w-[114px] h-[45px] border-gray-900 rounded-lg">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <span>
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>{" "}
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table className={'w-full'}>
        <thead className={'mb-4'}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={clsx("w-[428px] h-[18px] font-public-sans font-normal text-[12px] leading-[150%] text-[#696868] flex-none order-0 flex-grow-1 text-start", styles.th)}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t border-b border-gray-200">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={clsx("py-6", cell.column.columnDef.className)}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>{" "}
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
