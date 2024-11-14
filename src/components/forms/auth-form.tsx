'use client'
import React from 'react';
import { Spacer } from '@nextui-org/react';
import { Input, Button } from '@/components/ui';

export const AuthForm = () => {
  return (
    <div className="p-8 bg-white min-w-[560px]">
      <form className="flex flex-col gap-4">
        <h1 className='font-bold text-gray-900 text-[2rem]'>Login</h1>
        <Input 
          label="Email"
          placeholder="Enter your email"
        />
        <Input 
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Spacer y={1.5} />
        <Button title="Login" className="rounded-sm bg-gray-900" />
      </form>
    </div >
  );
};
