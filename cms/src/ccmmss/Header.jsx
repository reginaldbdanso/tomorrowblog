import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()

  return (
    <header className="flex flex-wrap gap-5 justify-between px-14 py-4 w-full bg-gray-700 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-1 my-auto text-xl font-medium text-white">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4572786f3485c89ae94c718f57242f4bc6ff654539d38e162f4ba8b828231b3d?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" className="object-contain shrink-0 aspect-square w-[42px]" alt="Rival CMS Logo" />
        <button className="my-auto hover:text-blue-400" onClick={() => navigate('/')}>
          <span>Tomorrow</span>
          <span className="text-blue-400">Blog</span>
          <span> CMS</span>
        </button>
      </div>
      <div className="flex gap-8 text-base font-bold text-white">
        <button className="px-3.5 py-2 my-auto bg-pink-500 rounded-md hover:bg-pink-600">
          Logout
        </button>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f73d2762c4e39b32a9c07491b7f2d52e4b1fdabfc2e3a0b2ea7d538ede9a17a5?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" className="object-contain shrink-0 aspect-square w-[50px]" alt="User profile" />
      </div>
    </header>
  );
}

export default Header;
