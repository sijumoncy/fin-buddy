import { SignIn } from '@clerk/nextjs';
import React from 'react';

function Page() {
  return (
    <section className="bg-white">
      <SignIn />
    </section>
  );
}

export default Page;
