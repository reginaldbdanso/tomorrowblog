import React from 'react';
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom'


function SignInForm() {
  const navigate = useNavigate()

  return (
    <form className="flex flex-col px-10 py-7 mt-10 max-w-full text-xl bg-white rounded-xl w-[512px] max-md:px-5">
      <FormInput 
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b48683dc71b200297d0d5b3c0f0dad7967c8210334edf60ad938d14ba43c0a43?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" 
        label="Email address" 
        type="email" 
        id="email" 
      />
      <FormInput 
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/192d33d6ac0249c0222f48e0098938e2533e9e86c1464187e6f09e4e3c1f7b1c?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" 
        label="Password" 
        type="password" 
        id="password" 
      />
      <div className="flex gap-10 mt-11 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
        <button type="button" className="grow shrink my-auto w-32 text-white bg-slate-700">
          Forgot password?
        </button>
        <button type="submit" className="px-16 py-5 text-white rounded-md bg-slate-700 max-md:px-5">
          Sign in
        </button>
      </div>
      <button type="button" className="px-16 py-5 mt-11 rounded-md border-2 border-solid border-slate-700 text-white bg-slate-700 max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full" onClick={() => navigate('/signup')}>
        Don't have an account?
      </button>
    </form>
  );
}

export default SignInForm;