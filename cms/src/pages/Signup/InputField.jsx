import React from 'react';

const InputField = ({ icon, label }) => {
  return (
    <>
      <div className="flex gap-3 self-start">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <label>{label}</label>
      </div>
      <div className="flex shrink-0 mt-5 w-full rounded-md bg-slate-100 h-[70px]" />
    </>
  );
};

export default InputField;
