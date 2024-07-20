import { currentUser } from '@clerk/nextjs/server';
import React from 'react';

async function Dashboard() {
  const sessionUser = await currentUser();
  console.log({ sessionUser });

  return (
    <div className="p-8">
      <h2 className="font-bold text-4xl">
        Hi, <span className="">{sessionUser?.id}</span>
      </h2>
      <p className="text-gray-500">
        Here is your financial summary. Let&apos;s explore
      </p>
    </div>
  );
}

export default Dashboard;
