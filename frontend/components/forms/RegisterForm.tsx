'use client';
import React from 'react';
import { useRegister } from '@/hooks';

export default function RegisterForm() {
  const {first_name,last_name,email,password,re_password,
    isLoading,onSubmit,onChange,} =useRegister();
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
          <div>
              <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-white">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="first_name"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset font-extrabold  ring-gray-300 placeholder:font-normal placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="first_name"
                  type="text"
                  required
                  placeholder='First Name'
                  value={first_name}
                  onChange={onChange}
                />
              </div>
            </div>


            
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-white">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="last_name"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset font-extrabold  ring-gray-300 placeholder:font-normal placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="last_name"
                  type="text"
                  required
                  placeholder='Last Name'
                  value={last_name}
                  onChange={onChange}
                />
              </div>
            </div>



            
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset font-extrabold  ring-gray-300 placeholder:font-normal placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Email'
                  value={email}
                  onChange={onChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset placeholder:font-normal font-extrabold  ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Password'
                  value={password}
                  onChange={onChange}
                />
              </div>
            </div>
          
            
            <div>
              <label htmlFor="re_password" className="block text-sm font-medium leading-6 text-white">
                Re-password
              </label>
              <div className="mt-2">
                <input
                  id="re_password"
                  name="re_password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset placeholder:font-normal font-extrabold ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Retype Password'
                  value={re_password}
                  onChange={onChange}
                />
              </div>
            </div>
          


            
          </form>
  )
}
