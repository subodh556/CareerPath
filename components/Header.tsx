'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: 'Homepage', path: '/' },
    { title: 'Explore Careers', path: '/careers' },
  ];

  const pathname = usePathname();

  useEffect(() => {
    // Add closing the navbar menu when navigating
    const handleState = () => {
      document.body.classList.remove('overflow-hidden');
      setState(false);
    };

    handleState();
  }, [pathname]);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <header className='h-0'>
      <nav
        className={`bg-white w-full md:static md:text-sm ${
          state ? 'fixed z-10 h-full' : ''
        }`}
      >
        <div className='custom-screen items-center mx-auto md:flex'>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Link href='/' className='flex  gap-1'>
              {/* <Image src='/box.svg' alt='logo' width={30} height={30} />
              <div className='font-bold text-lg'>ExploreCareers</div> */}
              <Image src='/logo1.png' alt='logo' width={200} height={5} />
            </Link>
            <div className='md:hidden'>
              <button
                role='button'
                aria-label='Open the menu'
                className='text-gray-500 hover:text-gray-800'
                onClick={handleNavMenu}
              >
                
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-2 md:pb-0 md:mt-0 md:block ${
              state ? '' : 'hidden'
            }`}
          >
            <ul className='text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium'>
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className='duration-150 hover:text-gray-900'>
                    <Link href={item.path} className='block'>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
