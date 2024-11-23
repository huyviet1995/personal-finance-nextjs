'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import LogoutButton from './LogoutButton';

export const Sidebar = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState({ username: '', email: '' });

  // Get the user initials
  const avatarInitials = user?.username?.slice(0, 2).toUpperCase();

  // Effects
  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session?.user])

  const listClassname = 'flex gap-2 flex-row items-center my-4';
  return (
    <div className="sidebar w-[300px] h-full bg-gray-900 text-gray-300 absolute left-0 top-0 flex flex-col">
      <div className="logo py-10 px-8">
        <Image width={150} height={50} src={'/images/logo-large.svg'} alt="Logo" />
      </div>
      <ul className={'flex flex-col px-8 py-4'}>
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
      {user?.email && <div className="user-info px-8 py-4 mt-auto self-end w-full mb-6 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-[0.7rem]">
            {avatarInitials}
          </div>
          <div>
            <p className="text-sm font-medium">{user?.username}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
        <LogoutButton className={'text-sm'} />
      </div>}
    </div>
  );
};

