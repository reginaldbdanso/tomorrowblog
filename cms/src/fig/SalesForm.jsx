import React from 'react';

function SalesForm() {
  return (
    <form className="flex flex-wrap gap-6 justify-between items-center mt-6 text-base max-md:max-w-full">
      <div className="flex flex-col self-stretch my-auto rounded min-w-[240px] w-[266px]">
        <label htmlFor="customer" className="self-start text-black">Customer</label>
        <input
          id="customer"
          type="text"
          placeholder="Enter Customer Name"
          className="px-6 py-3.5 mt-4 font-light bg-white rounded border border-solid border-neutral-900 border-opacity-30 text-neutral-900 text-opacity-60 max-md:px-5"
        />
      </div>
      <div className="flex flex-col self-stretch my-auto rounded min-w-[240px] w-[266px]">
        <label htmlFor="invoiceId" className="self-start text-black">Invoice ID</label>
        <input
          id="invoiceId"
          type="text"
          placeholder="Enter Invoice ID"
          className="px-6 py-3.5 mt-4 font-light bg-white rounded border border-solid border-neutral-900 border-opacity-30 text-neutral-900 text-opacity-60 max-md:px-5"
        />
      </div>
      <div className="flex flex-col self-stretch my-auto rounded min-w-[240px] w-[266px]">
        <label htmlFor="startDate" className="self-start text-black">Start Date</label>
        <input
          id="startDate"
          type="date"
          placeholder="Start Date"
          className="px-6 py-3.5 mt-4 font-light bg-white rounded border border-solid border-neutral-900 border-opacity-30 text-neutral-900 text-opacity-60 max-md:px-5"
        />
      </div>
      <div className="flex flex-col self-stretch my-auto rounded min-w-[240px] w-[266px]">
        <label htmlFor="endDate" className="self-start text-black">End Date</label>
        <input
          id="endDate"
          type="date"
          placeholder="End Date"
          className="px-6 py-3.5 mt-4 font-light bg-white rounded border border-solid border-neutral-900 border-opacity-30 text-neutral-900 text-opacity-60 max-md:px-5"
        />
      </div>
    </form>
  );
}

export default SalesForm;
