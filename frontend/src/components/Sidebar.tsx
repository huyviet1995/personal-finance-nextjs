'use client'
import React from 'react';
import Image from 'next/image';

export const Sidebar = () => {
  const listClassname = 'flex gap-2 flex-row items-center my-4';
  return (
    <div className="sidebar w-[300px] h-full bg-gray-900 text-gray-300 absolute left-0 top-0">
      <div className="logo py-10 px-8">
        <Image width={150} height={50} src={'/images/logo-large.svg'} alt="Logo" />
      </div>
      <ul className={'flex flex-col h-full px-8 py-4'}>
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

