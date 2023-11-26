'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';

function SignInButton() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user === undefined) {
    return (
      <Link href='/api/auth/login' className='btn btn-primary'>
        サインイン
      </Link>
    );
  } else {
    return (
      <Link href='/id-sample' className='btn btn-primary'>
        アプリへ
      </Link>
    );
  }
}

export function PortalNavbar() {
  return (
    <nav className='navbar bg-slate-50 dark:bg-slate-900'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow dark:bg-slate-900'
          >
            <li>
              <Link href='#'>Item 1</Link>
            </li>
            <li>
              <Link href='#'>Parent</Link>
              <ul className='p-2'>
                <li>
                  <Link href='#'>Submenu 1</Link>
                </li>
                <li>
                  <Link href='#'>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='#'>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link href='/' className='btn btn-ghost text-xl'>
          <Image
            src='https://imagedelivery.net/_ZgxhjwzRQrsPvI8IazDLA/e6b20493-4f2c-44ed-1bcc-0a5774ac4300/public'
            alt='wikimap-logo'
            className='h-8'
            width={115}
            height={40}
          />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='#'>Item 1</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className='p-2 dark:bg-slate-900'>
                <li>
                  <Link href='#'>Submenu 1</Link>
                </li>
                <li>
                  <Link href='#'>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href='#'>Item 3</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <SignInButton />
      </div>
    </nav>
  );
}
