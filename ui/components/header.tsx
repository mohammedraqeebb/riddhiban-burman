import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center h-10 bg-black ">
      <div className="max-w-[1300px] w-[100%] flex justify-between">
        <div className="flex gap-4">
          <Link href="/" className="font-bold text-[40px] font-4 mr-[88px]">
            RIDDHIBAN BURMAN
          </Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">WORK</Link>
        </div>
        <div>
          <p>Let&apos;s Connect</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
