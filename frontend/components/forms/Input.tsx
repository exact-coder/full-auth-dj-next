import Link from "next/link";
import React, { ChangeEvent } from "react";

interface Props {
  labelId: string;
  type: string;
  placeHolder: string;
  children: React.ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
  link?: {
    linkText: string;
    linkUrl: string;
  }
}

export default function Input({
  children,
  labelId,
  type,
  onChange,
  value,
  required = false,
  placeHolder,
  link,
}: Props) {
  return (
    <div>
      <div className="flex justify-between align-center">
        <label
          htmlFor={labelId}
          className="block text-sm font-medium leading-6 text-white"
        >
          {children}
        </label>
        {link && (
          <div className="text-sm">
            <Link className="font-semibold text-indigo-600 hover:text-indigo-500" href={link.linkUrl} >{link.linkText}</Link>
          </div>
        )}
      </div>
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
