import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import {toast} from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function useLogin() {
    const router = useRouter()
  const [login,{isLoading}] = useLoginMutation();
  

  const [formData, setFormData] = useState({email:"",password:''})

  const {email,password} = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = event.target
    setFormData({...formData,[name]: value})
    
  }

  const onSubmit = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    login({email,password})
    .unwrap()
    .then(() => {
      toast.success("Login Successfully!!");
      router.push("/dashboard")
    }).catch(()=> {
      toast.error("Somthing wrong to Login!!")
    })
  }
  return{
        email,
        password,
        isLoading,
        onSubmit,
        onChange,
    }
}
