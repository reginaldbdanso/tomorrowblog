import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    // { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a37f45641bf353acef438e8bbe81225009313a725b028ad6f46bdeb261d69e5b?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "View site" },
    // { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7d9c65217fbe35495c52f2c2acca7824d60c5f46a88cb490c835912e17f3d72?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Create page" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae5a51e5335f2b5ac8f15535f496f688d17b6dab6fceae33d0b1f9772bd0c183?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Blog articles", path: "/" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e324461fe468936c30c3908b691531ff436ca25c632276f799074e2c40a1a10?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Files", path: "/files" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c66e9c6f0630334d295c8b548506f25c1e113ba0327edcac0dd9f423c6b75229?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Users", path: "/users" },
    // { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2685fdbc1977577b526e1cb0f03f40f0f6bd432d92190d9e7dffa8c365e84bdd?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Subscriptions" },
    // { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea3c8464381728608665bf7774760d9bca195e057646704a66fe4ef58a017cea?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Archived pages" },
  ];

  // const proFeatures = [
  //   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed102bfc5b4cc33d09fee4ac56ca3011136c18cc32a75a21cf10d49088f47ca6?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Themes" },
  //   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a0a909c4ee831317aa9c6071e9dfe16e4d010926ec53f0ebd0224b2c7246208?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Plugins" },
  //   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ca543d0ab8ed267f9c8097bc42ec1d40742abcba1dbb89144f76937e599ec74?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b", text: "Upgrade plans" },
  // ];
  const navigate = useNavigate()

    // const redir = () => {
    //     logout();
    //     navigate('/login');
    // }

  return (
    <nav className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
      <div className="flex grow items-start px-14 pt-20 pb-40 w-full text-lg text-blue-900 bg-slate-100 max-md:px-5 max-md:pb-24 max-md:mt-10">
        <div className="flex flex-col items-start">
          <h2 className="text-blue-500">Manage</h2>
          <ul className="mt-8">
            {menuItems.map((item, index) => (
              <button key={index} className={`flex gap-3.5 mt-${index === 0 ? '0' : '6'}`} onClick={() => navigate(item.path)}>
                <img loading="lazy" src={item.icon} className="object-contain shrink-0 self-start w-6 aspect-square" alt="" />
                <span>{item.text}</span>
              </button>
            ))}
          </ul>
          {/* <h2 className="text-blue-500 mt-8">Pro features</h2> */}
          <ul className="mt-8">
            {/* {proFeatures.map((item, index) => (
              <li key={index} className={`flex gap-3.5 mt-${index === 0 ? '0' : '6'}`}>
                <img loading="lazy" src={item.icon} className="object-contain shrink-0 self-start w-6 aspect-square" alt="" />
                <span>{item.text}</span>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
      <div className="flex shrink-0 mt-40 bg-pink-500 rounded-full fill-pink-500 h-[15px] w-[15px] max-md:mt-10" aria-hidden="true" />
    </nav>
  );
}

export default Sidebar;
