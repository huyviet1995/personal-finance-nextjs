'use client'
import React from 'react';
import Image from 'next/image';

export const Sidebar = () => {
  const listClassname = 'flex gap-2 flex-row items-center p-4 pl-6';
  return (
    <div className="sidebar w-[300px] h-full bg-gray-900 text-gray-300 absolute left-0 top-0">
      <ul className={'flex flex-col h-full'}>
        <li className={listClassname}>
          <Image width={20} height={20} src={'images/icon-nav-overview.svg'} alt="Overview" />
          <span>Overview</span>
        </li>
        <li className={listClassname}>
          <Image width={20} height={20} src={'images/icon-nav-transactions.svg'} alt="Transactions" />
          <span>Transactions</span>
        </li>
        <li className={listClassname}>
          <Image width={20} height={20} src={'images/icon-nav-budgets.svg'} alt="Budgets" />
          <span>Budgets</span>
        </li>
        <li className={listClassname}>
          <Image width={20} height={20} src={'images/icon-nav-pots.svg'} alt="Pots" />
          <span>Pots</span>
        </li>
        <li className={listClassname}>
          <Image width={20} height={20} src={'images/icon-nav-recurring-bills.svg'} alt="Recurring bills" />
          <span>Recurring bills</span>
        </li>
      </ul>
    </div>
  );
};

