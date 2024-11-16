import { Input as NextInput } from "@nextui-org/react";
import clsx from "clsx";

type InputProps = {
  label: string;
  className?: string;
  placeholder?: string;
  type?: string;
};

export const Input = ({ label, className, placeholder, type, ...props }: InputProps) => {
  const labelClassname = clsx('font-bold text-gray-500 text-sm', className);
  return (
    <div>
      <label className={labelClassname}>{label}</label>
      <NextInput
        className={`min-h-[45px] ${className}`}
        labelPlacement="outside"
        placeholder={placeholder}
        radius="md"
        type={type}
        required
        size='lg'
        classNames={{
          input: 'w-full min-h-[45px] bg-white border border-gray-300 rounded-md pl-2',
        }}
        {...props}
      />
    </div>
  );
};

