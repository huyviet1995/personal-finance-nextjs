import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import LogoutButton from './LogoutButton';
import { sitePaths } from '@/utils/path';
import Link from 'next/link';

export const Sidebar = () => {
  // hooks
  const { data: session, status } = useSession();
  const [user, setUser] = useState({ username: '', email: '' });
  const router = useRouter();
  const pathName: sitePaths = usePathname() as sitePaths;

  // Variables
  const avatarInitials = user?.username?.slice(0, 2).toUpperCase();

  // Effects
  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setUser(session.user);
    } else if (status === 'unauthenticated' && pathName && ![sitePaths.SIGN_UP, sitePaths.SIGN_IN].includes(pathName)) {
      router.push(sitePaths.SIGN_IN);
    }
  }, [session?.user, status, router, pathName])

  if (pathName && [sitePaths.SIGN_UP, sitePaths.SIGN_IN].includes(pathName)) {
    return null;
  }

  const listClassname = 'flex gap-2 flex-row items-center my-4 cursor-pointer';
  return (
    <div className="sidebar w-[300px] h-full bg-gray-900 text-gray-300 left-0 top-0 flex flex-col">
      <div className="logo py-10 px-8">
        <Image width={150} height={50} src={'/images/logo-large.svg'} alt="Logo" />
      </div>
      <ul className={'flex flex-col px-8 py-4'}>
        <Link href={sitePaths.OVERVIEW} className={listClassname}>
          <Image width={20} height={20} src={'images/icon-nav-overview.svg'} alt="Overview" />
          <span>Overview</span>
        </Link>
        <Link href={sitePaths.TRANSACTIONS} className={listClassname}>
          <Image width={20} height={20} src={'images/icon-nav-transactions.svg'} alt="Transactions" />
          <span>Transactions</span>
        </Link>
        <Link href={sitePaths.BUDGET} className={listClassname}>
          <Image width={20} height={20} src={'images/icon-nav-budgets.svg'} alt="Budgets" />
          <span>Budgets</span>
        </Link>
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

