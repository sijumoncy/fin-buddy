'use client';
import Logo from '@/app/_components/Logo';
import {
  CircleDollarSign,
  LayoutGrid,
  PiggyBank,
  ReceiptText,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const sideBarMenus = [
  {
    id: 1,
    name: 'Dashboard',
    icon: LayoutGrid,
    path: '/dashboard',
  },
  {
    id: 2,
    name: 'Income',
    icon: CircleDollarSign,
    path: '/dashboard/income',
  },
  {
    id: 3,
    name: 'Budget',
    icon: PiggyBank,
    path: '/dashboard/budget',
  },
  {
    id: 4,
    name: 'Expense',
    icon: ReceiptText,
    path: '/dashboard/expense',
  },
];

function SideBar() {
  const pathName = usePathname();

  return (
    <div className="h-screen p-5 border-r shadow-sm">
      <div>
        <Logo />
      </div>
      <div className="mt-10 mb-5">
        {sideBarMenus.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <div
              className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full
               hover:bg-blue-100 hover:text-primary ${pathName === menu.path && 'bg-blue-100 text-primary'}`}
            >
              <menu.icon
                className={` hover:text-primary ${pathName === menu.path && 'text-primary'}`}
              />
              <h2
                className={` hover:text-primary ${pathName === menu.path && 'text-primary'}`}
              >
                {menu.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
