"use client";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import React from "react";
import styles from "./TransactionPage.module.scss";
import clsx from "clsx";

export default function TransactionsPage() {
  const data = React.useMemo(
    () => [
      {
        recipient_sender: "Bravo Zen Spa",
        category: "Personal Care",
        transaction_date: "29 Aug 2024 21:45",
        amount: -25,
      },
      {
        recipient_sender: "Alpha Analytics",
        category: "General",
        transaction_date: "29 Aug 2024 21:45",
        amount: -25,
      },
      {
        recipient_sender: "Delta Consulting",
        category: "Business",
        transaction_date: "29 Aug 2024 21:45",
        amount: -150,
      },
      {
        recipient_sender: "Echo Enterprises",
        category: "Utilities",
        transaction_date: "29 Aug 2024 21:45",
        amount: -75,
      },
      {
        recipient_sender: "Foxtrot Financial",
        category: "Finance",
        transaction_date: "29 Aug 2024 21:45",
        amount: 200,
      },
      {
        recipient_sender: "Golf Goods",
        category: "Retail",
        transaction_date: "29 Aug 2024 21:45",
        amount: -50,
      },
      {
        recipient_sender: "Hotel Holdings",
        category: "Real Estate",
        transaction_date: "29 Aug 2024 21:45",
        amount: 300,
      },
      {
        recipient_sender: "India Investments",
        category: "Investments",
        transaction_date: "29 Aug 2024 21:45",
        amount: 500,
      },
      {
        recipient_sender: "Juliet Jewelry",
        category: "Luxury",
        transaction_date: "29 Aug 2024 21:45",
        amount: -200,
      },
      {
        recipient_sender: "Kilo Kitchens",
        category: "Home Improvement",
        transaction_date: "29 Aug 2024 21:45",
        amount: -100,
      },
      {
        recipient_sender: "Lima Logistics",
        category: "Transportation",
        transaction_date: "29 Aug 2024 21:45",
        amount: -250,
      },
      // ...more mock data...
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "recipient_sender",
        header: "Recipient/Sender",
        className: styles.recipientSender,
        cell: (info) => (
            <div className={styles.textBold}>{info.getValue()}</div>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        className: styles.category,
        cell: (info) => (
            <div className={styles.textSmall}>
              {info.getValue()}
            </div>
        ),
      },
      {
        accessorKey: "transaction_date",
        header: "Transaction Date",
        className: styles.transactionDate,
        cell: (info) => (
            <div className={styles.textSmall}>{info.getValue()}</div>
        ),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        className: styles.amount,
        cell: (info) => (
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
  });

  return (
    <div>
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
