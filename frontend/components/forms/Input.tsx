import React, { ChangeEvent } from "react";

interface Props {
  labelId: string;
  type: string;
  placeHolder: string;
  children: React.ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
}

export default function Input({
  children,
  labelId,
  type,
  onChange,
  value,
  required = false,
  placeHolder,
}: Props) {
  return (
    <div>
      <label
        htmlFor={labelId}
        className="block text-sm font-medium leading-6 text-white"
      >
        {children}
      </label>
      <div className="mt-2">
        <input
          id={labelId}
          className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset font-extrabold  ring-gray-300 placeholder:font-normal placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name={labelId}
          type={type}
          required={required}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
