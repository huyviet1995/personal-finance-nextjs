"use client";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./TransactionPage.module.scss";
import { Button, Input } from "@/components/ui";
import { Select } from "@/components/ui/select";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import clsx from "clsx";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const getRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const data = [
  {
    recipient_sender: "Bravo Zen Spa",
    category: "Personal Care",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/serenity-spa-and-wellness.jpg",
    amount: -25,
  },
  {
    recipient_sender: "Alpha Analytics",
    category: "General",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/elevate-education.jpg",
    amount: -25,
  },
  {
    recipient_sender: "Delta Consulting",
    category: "Business",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/pixel-playground.jpg",
    amount: -150,
  },
  {
    recipient_sender: "Echo Enterprises",
    category: "Utilities",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/emma-richardson.jpg",
    amount: -75,
  },
  {
    recipient_sender: "Foxtrot Financial",
    category: "Finance",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/swift-ride-share.jpg",
    amount: 200,
  },
  {
    recipient_sender: "Golf Goods",
    category: "Retail",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/sun-park.jpg",
    amount: -50,
  },
  {
    recipient_sender: "Hotel Holdings",
    category: "Real Estate",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/serenity-spa-and-wellness.jpg",
    amount: 300,
  },
  {
    recipient_sender: "India Investments",
    category: "Investments",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/elevate-education.jpg",
    amount: 500,
  },
  {
    recipient_sender: "Juliet Jewelry",
    category: "Luxury",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/pixel-playground.jpg",
    amount: -200,
  },
  {
    recipient_sender: "Kilo Kitchens",
    category: "Home Improvement",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/emma-richardson.jpg",
    amount: -100,
  },
  {
    recipient_sender: "Lima Logistics",
    category: "Transportation",
    transaction_date: getRandomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
    imgSrc: "/images/avatars/swift-ride-share.jpg",
    amount: -250,
  },
];

export default function TransactionsPage() {

  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const [sorting, setSorting] = useState([{ id: 'transaction_date', desc: false }])

  const handleSortBy = (value: string) => {
    setSortBy(value);
    if (value === 'oldest') {
      setSorting([{ id: 'transaction_date', desc: true }])
    } else if (value === 'latest') {
      setSorting([{ id: 'transaction_date', desc: false }])
    }
  }

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "recipient_sender",
        header: "Recipient/Sender",
        className: styles.recipientSender,
        cell: (info: any) => (
          <div className={"flex gap-4 items-center"}>
            {info.row.original.imgSrc ? (
              <Image
                src={info.row.original.imgSrc}
                alt={`${info.getValue()} profile`}
                className={"rounded-full"}
                width={40}
                height={40}
              />
            ) : (
              <div
                className={
                  "rounded-full bg-gray-300 flex items-center justify-center"
                }
                style={{ width: 40, height: 40 }}
              >
                <span className={styles.textBold}>
                  {info
                    .getValue()
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
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
          <div className={styles.textSmall}>{info.getValue().toLocaleString()}</div>
        ),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        className: styles.amount,
        cell: (info: any) => (
          <div className={clsx(styles.textBold, "text-right")}>
            {info.getValue().toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
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
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: "includesString",
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
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
        <div className="flex gap-4 justify-center">
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#696868]">Sort by</span>
            <Select onValueChange={handleSortBy} value={sortBy}>
              <SelectTrigger className="flex items-center justify-center p-0 gap-4 w-[114px] h-[45px] border-gray-900 rounded-lg">
                <SelectValue placeholder="latest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#696868]">Category</span>
            <Select>
              <SelectTrigger className="flex items-center justify-center p-0 gap-4 w-[10rem] h-[45px] border-gray-900 rounded-lg">
                <SelectValue placeholder="All Transactions" />
              </SelectTrigger>
                <SelectContent>
                  {data.map((item) => (
                    <SelectItem key={item.category} value={item.category}>
                      {item.category}
                    </SelectItem>
                  ))}
                </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <table className={"w-full"}>
        <thead className={"mb-4"}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={clsx(
                    "w-[428px] h-[18px] font-public-sans font-normal text-[12px] leading-[150%] text-[#696868] flex-none order-0 flex-grow-1 text-start",
                    styles.th
                  )}
                >
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
            <tr
              key={row.id}
              className="border-t border-b border-gray-200"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={clsx(
                    "py-6",
                    cell.column.columnDef.className
                  )}
                >
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
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          className="hover:bg-gray-500 hover:text-white rounded-lg flex justify-center"
          onClick={() => {
            const currentPageIndex = table.getState().pagination.pageIndex;
            if (currentPageIndex > 0) {
              table.setPageIndex(currentPageIndex - 1);
            }
          }}
        >
          <FaCaretLeft className="h-5 w-5 mr-2" />
          Previous
        </Button>
        <div className="flex flex-row gap-2">
          {Array.from(
            { length: table.getPageCount() },
            (_, index) => (
              <Button
                key={index}
                onClick={() => table.setPageIndex(index)}
                variant="default"
                disabled={
                  table.getState().pagination.pageIndex ===
                  index
                }
                className={clsx(
                  "px-2 py-1 mx-1 border text-color-gray-900 box-border flex flex-row justify-center items-center p-4 gap-4 w-10 h-10 border-gray-900 rounded-lg hover:text-white hover:bg-gray-500",
                  table.getState().pagination.pageIndex ===
                    index
                    ? "bg-gray-900 text-white"
                    : "bg-white text-color-gray-900"
                )}
              >
                {index + 1}
              </Button>
            )
          )}
        </div>
        <Button
          variant="outline"
          className="hover:bg-gray-500 hover:text-white rounded-lg flex justify-center"
          onClick={() => {
            const currentPageIndex = table.getState().pagination.pageIndex;
            if (currentPageIndex < table.getPageCount() - 1) {
              table.setPageIndex(currentPageIndex + 1);
            }
          }}
        >
          Next
          <FaCaretRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
