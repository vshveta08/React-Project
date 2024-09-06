import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import StudentModal from "./StudentModal";
import DeleteModal from "./DeleteModal";

export default function Records({ data }) {
  const [studentData, setStudentData] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  return (
    <>
      {data.length === 0 ? (
        <div>no data</div>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-300 rounded-sm">
          <thead className="text-xs text-white uppercase bg-cyan-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr. No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr
                key={index}
                className="odd:bg-slate-700 text-slate-200 even:bg-cyan-800 border-b border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-3 font-medium whitespace-nowrap text-white"
                >
                  {student.id}
                </th>
                <td className="px-6 py-3">
                  <button
                    onClick={() => (setIsOpen(true), setStudentData(student))}
                    className="font-semibold text-sky-300 hover:text-sky-500"
                  >
                    {student.name}
                  </button>
                </td>
                <td className="px-6 py-3 ">{student.email}</td>
                <td className="px-6 py-3 flex gap-1">
                  <NavLink
                    to={`/updateStudent/${student.id}`}
                    state={{
                      student: student,
                    }}
                    className="font-medium text-blue-700 bg-slate-50 p-1 px-3 hover:bg-slate-300 rounded-l-sm"
                  >
                    Update
                  </NavLink>
                  <button
                    onClick={() => (
                      setIsOpenDelete(true),
                      setStudentId(student.id),
                      setStudentName(student.name)
                    )}
                    className="flex items-center text-red-500 font-medium bg-slate-50 p-1 hover:bg-slate-300 rounded-r-sm"
                  >
                    Delete <MdDelete className="text-xl inline " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isOpen && <StudentModal setIsOpen={setIsOpen} data={studentData} />}
      {isOpenDelete && (
        <DeleteModal
          setIsOpenDelete={setIsOpenDelete}
          name={studentName}
          id={studentId}
        />
      )}
    </>
  );
}
