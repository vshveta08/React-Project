import { RxCross2 } from "react-icons/rx";

export default function StudentModal({ setIsOpen, data }) {
  return (
    <div className="min-h-screen w-full fixed bg-slate-800 bg-opacity-90 inset-0 flex items-center justify-center duration-300">
      <div className="flex justify-center">
        <div className="bg-slate-700 flex flex-col gap-4 px-[2.5em] py-[1.5em] rounded-sm shadow-sm shadow-slate-300">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-cyan-100">
              {" "}
              {data.name}
            </h1>{" "}
            <RxCross2
              onClick={() => setIsOpen(false)}
              className="bg-slate-100 rounded-sm text-cyan-800 text-3xl cursor-pointer hover:bg-slate-300  transition duration-500 ease-in-out"
            />
          </div>

          <div className=" bg-slate-200 w-full flex gap-14 justify-between border rounded-sm border-slate-300 px-[2em] py-[1em]">
            <div className="w-full font-semibold text-cyan-700">
              <p>Age: </p>
              <p>Email: </p>
              <p>Gender:</p>
              <p>GPA: </p>
              <p>Phone: </p> <br />
              <p className="">Address</p>
              <p>Street: </p>
              <p>Zip: </p>
              <p>City: </p>
              <p>Country: </p>
              <br />
              <p>Courses:</p>
            </div>
            <div className="text-gray-600">
              <p> {data.age}</p>
              <p> {data.email}</p>
              <p> {data.gender}</p>
              <p> {data.gpa}</p>
              <p> {data.phone}</p> <br /> <br />
              <p> {data.address.street}</p>
              <p> {data.address.zip}</p>
              <p> {data.address.city}</p>
              <p> {data.address.country}</p> <br />
              {data.courses.map((course, index) => (
                <p key={index}>{course}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
