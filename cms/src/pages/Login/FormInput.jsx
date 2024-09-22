import React from 'react';

function FormInput({ icon, label, type, id }) {
  return (
    <>
      <div className="flex gap-2.5 self-start text-slate-700">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <label htmlFor={id}>{label}</label>
      </div>
      <input 
        type={type} 
        id={id} 
        className="flex shrink-0 mt-5 rounded-md bg-slate-100 h-[70px] max-md:max-w-full" 
        aria-label={label}
      />
    </>
  );
}

export default FormInput;