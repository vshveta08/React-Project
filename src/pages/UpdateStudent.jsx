import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function UpdateStudent() {
  const navigate = useNavigate();

  const location = useLocation();
  const { student } = location.state;

  const [studentData, setStudentData] = useState({
    studentAge: student.age,
    studentEmail: student.email,
    studentGender: student.gender,
    studentGpa: student.gpa,
    studentPhone: student.phone,
    studentStreet: student.address.street,
    studentZip: student.address.zip,
    studentCity: student.address.city,
    studentCountry: student.address.country,
    studentCourses: student.courses,
  });
  console.log(studentData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e.target.name);

    setStudentData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("student updated successfully");
    navigate("/students");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 px-[7em] py-[2em]">
      <p className="text-2xl md:text-3xl font-semibold text-cyan-700">
        {student.name}
      </p>
      <form
        onSubmit={submitHandler}
        className="sm:w-full w-[18em] flex flex-col gap-6 mt-3 bg-slate-300 rounded-sm px-6"
      >
        <div className="flex flex-wrap gap-4 pt-6 border-b border-slate-100 pb-10">
          <h3 className="uppercase">Details</h3>
          <div className="flex flex-wrap items-center gap-6">
            <input
              type="text"
              placeholder="age"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentAge"
              value={studentData.studentAge}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="email"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentEmail"
              value={studentData.studentEmail}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="gender"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentGender"
              value={studentData.studentGender}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="GPA"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentGpa"
              value={studentData.studentGpa}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentPhone"
              value={studentData.studentPhone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-0 border-b border-slate-100 pb-10">
          <h3 className="uppercase">Address</h3>
          <div className="flex flex-wrap items-center gap-6">
            <input
              type="text"
              placeholder="street"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentStreet"
              value={studentData.studentStreet}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="zip"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentZip"
              value={studentData.studentZip}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="city"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentCity"
              value={studentData.studentCity}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="country"
              className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
              name="studentCountry"
              value={studentData.studentCountry}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col flex-wrap gap-4 pt-0 border-b border-slate-100 pb-10">
          <h3 className="uppercase">Courses</h3>
          <div className="flex flex-wrap gap-6">
            {studentData.studentCourses.map((course, index) => (
              <input
                key={index}
                type="text"
                name={`course${index}`}
                placeholder="course"
                className="border border-cyan-500 text-slate-600 p-2 md:w-[18rem] w-[15em] rounded-sm outline-cyan-600"
                value={course}
                onChange={(e) => {
                  const updatedCourses = [...studentData.studentCourses];
                  updatedCourses[index] = e.target.value;
                  setStudentData((prev) => ({
                    ...prev,
                    studentCourses: updatedCourses,
                  }));
                }}
              />
            ))}
          </div>
        </div>

        <button className="bg-cyan-600 text-white px-6 py-2 rounded-sm w-[10em] mt-2 mb-8 float-right">
          Update
        </button>
      </form>
    </div>
  );
}
