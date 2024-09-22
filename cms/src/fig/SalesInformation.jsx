import React from 'react';
import SidebarMenu from './SidebarMenu';
import Header from './Header';
import SalesForm from './SalesForm';
import InvoiceTable from './InvoiceTable';
import "./index2.css"; // Import Tailwind CSS file

function SalesInformation() {
  return (
    <div className="overflow-hidden pr-10 bg-stone-50 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <SidebarMenu />
        <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <Header />
            <h2 className="self-start mt-11 text-2xl text-black max-md:mt-10">Sales Information</h2>
            <SalesForm />
            <InvoiceTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesInformation;
