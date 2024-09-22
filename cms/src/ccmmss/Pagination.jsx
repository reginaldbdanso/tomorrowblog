import React from 'react';

function Pagination() {
  return (
    <nav className="flex gap-2.5 self-center mt-12 max-w-full text-base font-bold text-blue-900 whitespace-nowrap w-[108px] max-md:mt-10" aria-label="Pagination">
      <button className="px-2.5 rounded-full bg-slate-700 fill-slate-700 h-[30px] text-slate-50 w-[30px]" aria-current="page">
        1
      </button>
      <button className="px-2.5 rounded-full bg-slate-200 fill-slate-200 h-[30px] w-[30px]">
        2
      </button>
      <button className="px-2.5 rounded-full bg-slate-200 fill-slate-200 h-[30px] w-[30px]">
        3
      </button>
    </nav>
  );
}

export default Pagination;
