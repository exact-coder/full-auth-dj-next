'use client';
import React from 'react'
import { Form } from '@/components/forms';
import { useLogin } from '@/hooks';

export default function LoginForm() {
    const {
        email,
        password,
        isLoading,
        onSubmit,
        onChange,
      } = useLogin();
    
      const config = [
        {
          labelText: "Email",
          labelId: "email",
          type: "email",
          placeHolder: "Type Your Email",
          value: email,
          required: true,
        },
        {
          labelText: "Password",
          labelId: "password",
          type: "password",
          placeHolder: "Type Your Password",
          value: password,
          required: true,
          link: {
            linkText: 'Forget Password?',
            linkUrl: '/password-reset',
          }
        },
      ];
      return (
        <Form
          config={config}
          isLoading={isLoading}
          btnText="Log In"
          onChange={onChange}
          onSubmit={onSubmit}
        />
      )
}
