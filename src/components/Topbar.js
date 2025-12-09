'use client';

import Image from 'next/image';
import MyKisahApiModal from './modal/api-key-modal';
import { useState } from 'react';
import Link from 'next/link';

export default function Topbar({ onToggleSidebar }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className='border-b border-gray-300 px-6 py-4 flex items-center justify-between'>
      <div className='flex items-center gap-8'>
        <Link href="/cari-video" className="flex items-center gap-4 cursor-pointer">
          <Image
            src="/icon/antijudol.png"
            alt="Profile Icon"
            width={32}
            height={36}
          />
          <span className="text-xl font-bold">Anti Judol</span>
        </Link>
      </div>
      <div className='flex items-center gap-6'>
        <button className='flex items-center' onClick={() => setOpen(true)}>
          <Image
            src='/icon/profile.svg'
            alt='Profile Icon'
            width={36}
            height={36}
          />
        </button>
      </div>
      <MyKisahApiModal onClose={() => setOpen(false)} open={open} />
    </nav>
  );
}
