"use client";
import { Form } from "@/components/forms";
import { useRegister } from "@/hooks";

export default function RegisterForm() {
  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onSubmit,
    onChange,
  } = useRegister();

  const config = [
    {
      labelText: "First Name",
      labelId: "first_name",
      type: "text",
      placeHolder: "Type Your First Name",
      value: first_name,
      required: true,
    },
    {
      labelText: "Last Name",
      labelId: "last_name",
      type: "text",
      placeHolder: "Type Your Last Name",
      value: last_name,
      required: true,
    },
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
    },
    {
      labelText: "Confirm Password",
      labelId: "re_password",
      type: "password",
      placeHolder: "Type Your Confirm Password",
      value: re_password,
      required: true,
    },
  ];
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Sign Up"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
