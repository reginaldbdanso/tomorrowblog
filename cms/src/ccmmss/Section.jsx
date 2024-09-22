import React from 'react'
import { useState } from 'react'
import ArticleList from './ArticleList'
import Modal from './Modal'
import Pagination from './Pagination'

const Section = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
        <section className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch mt-8 my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center w-full text-base font-bold text-blue-900 max-md:max-w-full">
                <div className="self-stretch my-auto">Title</div>
                <div className="self-stretch my-auto">Status</div>
                <div className="self-stretch my-auto">Stats</div>
                <button className="flex gap-3.5 self-stretch px-3.5 py-3 text-white rounded-md bg-slate-700"
                onClick={() => setIsModalOpen(true)}>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3569121c819e89ee7b6dce5de39c183a3741af2e0beb56f3996c71332309db0c?placeholderIfAbsent=true&apiKey=7d03cf7f681648139d0d3878342d489b" className="object-contain shrink-0 self-start w-5 aspect-square" alt="" />
                  <span >Add New</span>
                </button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                

              </div>
              <hr className="shrink-0 mt-4 max-w-full h-px border border-solid bg-slate-200 border-slate-200 w-[1054px]" />
              <ArticleList />
              <Pagination />
            </div>
          </section>
    </div>
  )
}

export default Section

