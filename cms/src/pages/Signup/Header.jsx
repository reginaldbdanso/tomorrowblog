import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch px-14 py-5 w-full bg-gray-700 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-1 self-start font-medium">
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdae0c988408653a743a419c3df5307141ca5caeadf59af2dfbcb420fbe7cbe3?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="" className="object-contain shrink-0 aspect-square w-[42px]" /> */}
        <div className="my-auto">
          <span className="">Tomorrow</span>
          <span className="text-blue-400 ">Blog</span>
        </div>
      </div>
      <button className="px-6 py-2.5 rounded-md border-2 border-solid border-slate-50 max-md:px-5" onClick={() => navigate('/login')}>
        Sign in
      </button>
    </header>
  );
};

export default Header;
