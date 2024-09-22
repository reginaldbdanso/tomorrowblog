import React from 'react';

function ArticleItem({ title, status, views }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Published':
        return 'text-green-300 border-green-300';
      case 'Draft':
        return 'text-rose-400 border-rose-400';
      case 'Scheduled':
        return 'text-amber-200 border-orange-300';
      default:
        return '';
    }
  };

  return (
    <article className="flex flex-wrap gap-5 justify-between items-center px-10 py-8 mt-5 max-w-full bg-slate-50 w-[1055px] max-md:px-5">
      <div className="flex flex-wrap gap-10 self-stretch max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <h3 className="text-lg font-bold text-slate-700">{title}</h3>
          <p className="self-start mt-1 text-sm text-slate-400">Posted 3 days ago</p>
        </div>
        <div className={`px-6 py-2 my-auto text-base whitespace-nowrap border-2 border-solid rounded-[50px] max-md:px-5 ${getStatusStyle(status)}`}>
          {status}
        </div>
      </div>
      <div className="flex gap-2 self-stretch my-auto whitespace-nowrap">
        <div className="grow text-xl font-bold text-slate-700">{views}</div>
        <div className="my-auto text-sm text-slate-400">views</div>
        {views > 0 && <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/813d3d57e4bf559e7de94dbb83ab9dfb38c99c7fe9edd4fd9615509613271691?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" className="object-contain shrink-0 w-6 aspect-square" alt="" />}
      </div>
      <button aria-label="More options">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f922d845775e1b2ac7d6e1ac546a6307ca3c798fddf65873a872fef78628aadb?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
      </button>
    </article>
  );
}

export default ArticleItem;