import React from 'react';

const invoices = [
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
  { id: '#AHGA68', date: '23/09/2022', customer: 'Jacob Marcus', payableAmount: '$100', paidAmount: '$000', due: '$000' },
];

function InvoiceTable() {
  return (
    <section className="flex flex-col pt-6 mt-10 text-base text-black bg-white rounded max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-col w-full font-semibold max-w-[1130px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between ml-6 w-full max-w-[1021px] max-md:max-w-full">
            <div className="flex gap-6">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c7a45db1f7fd5cd04aa41c67dd6f02028c4026d3c78b25d99be62c9544e8c5d?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="" className="object-contain shrink-0 w-6 aspect-square" />
              <span>Invoice ID</span>
            </div>
            <div className="flex gap-10 self-start max-md:max-w-full">
              <span>Date</span>
              <span>Customer</span>
              <span className="basis-auto">Payable Amount</span>
              <span>Paid Amount</span>
              <span>Due</span>
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f019ab58157366eba0006e8d835f5691997e773ec1e92b37285f2b21b299f35d?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="" className="object-contain mt-6 w-full max-md:max-w-full" />
        </div>
        {invoices.map((invoice, index) => (
          <div key={index} className="flex flex-col mt-8 w-full max-w-[1130px] max-md:max-w-full">
            <div className="flex gap-5 justify-between ml-6 w-full max-w-[1032px] max-md:max-w-full">
              <div className="flex gap-6 text-blue-600 whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c7a45db1f7fd5cd04aa41c67dd6f02028c4026d3c78b25d99be62c9544e8c5d?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="" className="object-contain shrink-0 w-6 aspect-square" />
                <span>{invoice.id}</span>
              </div>
              <div className="flex gap-10">
                <span>{invoice.date}</span>
                <span className="basis-auto">{invoice.customer}</span>
                <span>{invoice.payableAmount}</span>
              </div>
              <div className="flex gap-10 whitespace-nowrap">
                <span>{invoice.paidAmount}</span>
                <span>{invoice.due}</span>
              </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f019ab58157366eba0006e8d835f5691997e773ec1e92b37285f2b21b299f35d?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" alt="" className="object-contain mt-6 w-full max-md:max-w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InvoiceTable;
