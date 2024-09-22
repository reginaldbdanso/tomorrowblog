import React from 'react';
import Header from './Header';
import RegistrationForm from './RegistrationForm';

const Signup = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center pb-28 text-xl text-white bg-slate-50 max-md:pb-24">
      <Header />
      <h1 className="mt-24 text-3xl font-medium max-md:mt-10">
        <span className="text-slate-700">Tomorrow</span>
        <span className="text-blue-400">Blog</span>
      </h1>
      <RegistrationForm />
    </main>
  );
};

export default Signup;
