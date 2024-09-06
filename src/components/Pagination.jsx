import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  if(nPages === 0) {
    return <div></div>;
  }
  
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  console.log("pageNumbers: ", pageNumbers);

  const gotoNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const gotoPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <ul className="flex items-center gap-2">
        <li>
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={gotoPrevPage}
            className="bg-cyan-600 text-3xl border border-cyan-600 p-1 px-1 md:p-2 md:px-3 text-white rounded-sm hover:bg-cyan-700 transition duration-500 ease-in-out disabled:bg-slate-400"
          >
            <GrFormPrevious />
          </button>
        </li>
        <li className="flex w-full md:py-1 md:px-1 rounded-sm border border-cyan-600 overflow-x-auto pageScroll">
          {pageNumbers.map((pgNum) => (
            <div key={pgNum} className="w-full">
              <button
                onClick={(e) => setCurrentPage(pgNum)}
                className="hover:bg-cyan-500 hover:text-white px-2 py-1 md:px-3 md:py-1 rounded-full transition duration-500 ease-in-out focus:bg-cyan-600 focus:text-white"
              >
                {pgNum}
              </button>
            </div>
          ))}
        </li>
        <li>
          <button
            disabled={currentPage === pageNumbers.length ? true : false}
            onClick={gotoNextPage}
            className="bg-cyan-600 text-3xl border border-cyan-600 p-1 px-1 md:p-2 md:px-3 text-white rounded-sm hover:bg-cyan-700 transition duration-500 ease-in-out disabled:bg-slate-400"
          >
            <MdNavigateNext />
          </button>
        </li>
      </ul>
    </>
  );
}
