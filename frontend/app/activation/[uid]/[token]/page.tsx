'use client';
import { useActivationMutation } from '@/redux/features/authApiSlice';
import React, { useEffect } from 'react';
import {toast} from "react-toastify";
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata ={
  title: 'Full Auth || Authentication',
  description: 'Full Auth Authentication page',
}
interface Props {
  params: {
    uid: string;
    token: string;
  }
}

export default function Page({params}: Props) {
  const [activation] = useActivationMutation();
  const router = useRouter();

  useEffect(() => {
    const {uid,token} = params;
    activation({uid,token})
    .unwrap()
    .then(() => {
      toast.success("Account Activated!!")
    }).catch(() => {
      toast.error("Failed to Activate Your Account!! ")
    }).finally(() => {
      router.push("/auth/login")
    });
  
  }, [params,activation,router]);
  
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-0'>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Actavating your account....</h1>
      </div>
    </div>
  )
}
