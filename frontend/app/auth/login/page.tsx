import React from 'react'
import logo from '@/app/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from '@/components/forms';
import { Metadata } from 'next';

export const metadata: Metadata ={
  title: 'Full Auth || Log In',
  description: 'Full Auth Log In page',
}


export default function Page() {

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-5 bg-black">
        <div className="sm:mx-auto sm:w-full text-center sm:max-w-sm">
        <Image height={100} width={150} src={logo} className='sm:mx-auto text-center sm:max-w-sm' alt='logo'/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Log In on Full Auth
          </h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm/>

          <p className="mt-10 text-center text-sm text-white">
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
