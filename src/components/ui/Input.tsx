import { Input as NextInput } from "@nextui-org/react";

type InputProps = {
  label: string;
  className?: string;
  placeholder?: string;
  type?: string;
};

export const Input = ({ label, className, placeholder, type, ...props }: InputProps) => {
  return (
    <NextInput
      label={label}
      className={`min-h-[45px] ${className}`}
      placeholder={placeholder}
      radius="md"
      type={type}
      required
      size='lg'
      classNames={{
        input: 'w-full min-h-[45px] bg-white border border-gray-300 rounded-md pl-2',
        label: 'font-bold text-gray-500 text-sm',
      }}
      {...props}
    />
  );
};

