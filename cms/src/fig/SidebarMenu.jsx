import React from 'react';

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c5b697cff3442e0b525c0ff20165bdca0ff172b0ac2c76b77898c746df34b6e?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Dashboard", active: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8633c8475b01501df1eb6cf80989b3d30cbc6c18a5f993db781c6a3b8fdc33f?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Lab Test" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/809b1761bedebc7720f5c52949ac5b47e8d13d4104b42f1ca65976b229b2660c?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Appointment" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f3c92be5760688408aa5e28a9d6bf7804059187fa4590dbd080edf14e999b8c?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Medicine Order" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36875b3a6cdc8c6bbcfacc8999e5881007ab08a6525a4ce42a00daeed75d40ea?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Message" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b168603d8058eef5f24cce362575b8ec5a78632935800f782432f82b8f6a5d0?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Payment" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/19940b9f9a25c1b24cd4248cd2345f1f18236232be82caa394b7ba6bd04afde2?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Settings" },
];

function SidebarMenu() {
  return (
    <nav className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-5 justify-between items-start pt-14 pr-6 w-full bg-white max-md:mt-10">
        <div className="flex shrink-0 mt-24 bg-blue-600 h-[39px] w-[3px] max-md:mt-10" />
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-medium text-blue-800">Sales.</h1>
          <div className="flex flex-col pb-8 mt-16 ml-3 w-full text-base tracking-wide min-h-[993px] text-neutral-900 max-md:mt-10 max-md:ml-2.5">
            <ul className="flex flex-col items-start w-full max-w-[166px]">
              {menuItems.map((item, index) => (
                <li key={index} className={`flex gap-4 mt-10 max-w-full ${item.active ? 'text-blue-600' : 'text-black'} whitespace-nowrap`}>
                  <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 whitespace-nowrap mt-[525px] w-[77px] max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef8e7aad8c0d8605a8cc6dfa1933046444c5b5de431feb4f2421bf0693969c2?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="" className="object-contain shrink-0 w-6 aspect-square" />
              <span>Help</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SidebarMenu;