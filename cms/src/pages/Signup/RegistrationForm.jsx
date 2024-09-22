import React from 'react';
import InputField from './InputField';

const RegistrationForm = () => {
  const inputFields = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fdfda17d0d31929727a492bb63ee3931dea40d2ded3ce52dbe10faa14bf4037?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", label: "Full name" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/192d33d6ac0249c0222f48e0098938e2533e9e86c1464187e6f09e4e3c1f7b1c?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", label: "Email address" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b48683dc71b200297d0d5b3c0f0dad7967c8210334edf60ad938d14ba43c0a43?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", label: "Password" }
  ];

  return (
    <form className="flex flex-col px-9 py-7 mt-12 max-w-full bg-white rounded-xl text-slate-700 w-[512px] max-md:px-5 max-md:mt-10">
      {inputFields.map((field, index) => (
        <InputField key={index} icon={field.icon} label={field.label} />
      ))}
      <button type="submit" className="self-end px-14 py-5 mt-10 max-w-full text-white whitespace-nowrap rounded-md bg-slate-700 w-[201px] max-md:px-5">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
