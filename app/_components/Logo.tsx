import Image from 'next/image';
import React from 'react';

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image src={'vercel.svg'} alt="Logo" width={100} height={10} />
      <span className="text-primary font-bold text-xl">FinBuddy</span>
    </div>
  );
}

export default Logo;
