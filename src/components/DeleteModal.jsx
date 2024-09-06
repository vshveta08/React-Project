import React from "react";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

export default function DeleteModal({ setIsOpenDelete, name, id }) {
  const deleteHandler = async (id) => {
    toast.success("student deleted successfully");
    setIsOpenDelete(false);
  };

  return (
    <div className="min-h-screen w-full fixed bg-slate-800 bg-opacity-90 inset-0 flex items-center justify-center duration-300">
      <div className="flex justify-center">
        <div className="bg-slate-700 flex flex-col gap-12 px-[2.5em] py-[1.5em] rounded-sm shadow-sm shadow-slate-300">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-cyan-100"> {name}</h1>{" "}
            <RxCross2
              onClick={() => setIsOpenDelete(false)}
              className="bg-slate-100 rounded-sm text-cyan-800 text-3xl cursor-pointer hover:bg-slate-300  transition duration-500 ease-in-out"
            />
          </div>

          <p className="text-white"> Are you sure want to delete this student?</p>
          <button
            onClick={() => deleteHandler(id)}
            className="bg-red-500 text-xl p-1 px-1 md:p-2 md:px-3 text-white rounded-sm hover:bg-red-600 transition duration-500 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
