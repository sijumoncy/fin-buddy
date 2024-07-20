'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border-b shadow-sm">
      <div className="flex gap-2 items-center">
        <Image src={'vercel.svg'} alt="Logo" width={100} height={10} />
        <span className="text-primary font-bold text-xl">FinBuddy</span>
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className='flex gap-5 items-center'>
          <Link href={'/dashboard'}>
            <Button variant={"outline"} className='rounded-full'>Dashboard</Button>
          </Link>
          <Link href={'/dashboard'}>
            <Button className='rounded-full'>Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
