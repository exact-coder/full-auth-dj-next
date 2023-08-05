import logo from '@/app/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { RegisterForm } from '@/components/forms';
import { Metadata } from 'next';

export const metadata: Metadata ={
  title: 'Full Auth || Register',
  description: 'Full Auth register page',
}


export default function Page() {

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black">
        <div className="sm:mx-auto sm:w-full text-center sm:max-w-sm">
        <Image height={100} width={150} src={logo} className='sm:mx-auto text-center sm:max-w-sm' alt='logo'/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign Up in Full Auth
          </h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterForm/>

          <p className="mt-10 text-center text-sm text-white">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
