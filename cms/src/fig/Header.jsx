import React from 'react';

function Header() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
      <form className="flex flex-col self-stretch my-auto text-base whitespace-nowrap rounded-none min-w-[240px] text-stone-400 w-[655px] max-md:max-w-full">
        <div className="flex flex-wrap gap-4 px-5 py-3.5 bg-white rounded border border-solid border-black border-opacity-20">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/11409849ac006ed6f9e5b1c2f8f7e4774aac40768f61b429a0785a7d42b8aa70?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="" className="object-contain shrink-0 w-6 aspect-square" />
          <input type="search" placeholder="Search" className="flex-auto self-start w-[570px] max-md:max-w-full bg-transparent border-none focus:outline-none" />
        </div>
      </form>
      <div className="flex gap-5 items-start self-stretch my-auto">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/955bc1a5ac8b5b34e62e55e5393830480944b9dad7edae89cc7378c578382ede?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="Notification icon" className="object-contain shrink-0 aspect-square w-[52px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e791f890caa300a0bc0331eda0c87a9b0bce76c10c285b97d94bfeca3ccbe780?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="User profile" className="object-contain shrink-0 rounded-xl aspect-square w-[52px]" />
      </div>
    </header>
  );
}

export default Header;
