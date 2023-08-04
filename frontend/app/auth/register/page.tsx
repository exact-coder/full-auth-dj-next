'use client';
import React,{useState,ChangeEvent,FormEvent} from 'react';
import logo from '@/app/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import {toast} from 'react-toastify';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/common/Spinner';



export default function Page() {
  const router = useRouter()
  const [register,{isLoading}] = useRegisterMutation();
  

  const [formData, setFormData] = useState({first_name:"",last_name:'',email:"",password:'',re_password:""})

  const {first_name,last_name,email,password,re_password} = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = event.target
    setFormData({...formData,[name]: value})
    
  }

  const onSubmit = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    register({first_name,last_name,email,password,re_password})
    .unwrap()
    .then(() => {
      toast.success("Please check your email to Verify Account");
      router.push("/auth/login")
    }).catch(()=> {
      toast.error("Failed to Register your account")
    })
  }

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
          


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? <Spinner sm/>:"Sign Up" }
              </button>
            </div>
          </form>

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
