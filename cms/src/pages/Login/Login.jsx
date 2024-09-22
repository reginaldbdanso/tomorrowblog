import React from 'react';
import Logo from './Logo';
import SignInForm from './SignInForm';

function Login() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-5 pb-52 bg-slate-50 max-md:px-5 max-md:pb-24">
      <Logo />
      <h1 className="mt-12 text-3xl font-medium max-md:mt-10">
        <span className="text-slate-700">Tomorrow</span>
        <span className="text-blue-400">Blog</span>
        <span className="text-slate-700"> CMS</span>
      </h1>
      <SignInForm />
    </main>
  );
}

export default Login;
