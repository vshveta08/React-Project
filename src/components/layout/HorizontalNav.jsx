import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

export default function HorizontalNav() {
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div className="flex items-center justify-between py-3 px-[4em] h-16 w-full bg-cyan-600 shadow-md shadow-slate-200 text-white md:px-[3em]">
      <NavLink
        to="/"
        className="text-2xl text- font-semibold drop-shadow-lg cursor-pointer tracking-wider group"
      >
        <span className="px-2 rounded-br-md rounded-tl-md mr-[3px] shadow-sm shadow-white transition duration-700 ease-in-out group-hover:text-cyan-200">
          S
        </span>
        tudent{" "}
        <span className="shadow-sm shadow-white px-1 rounded-br-md rounded-tl-md mr-[3px] transition duration-700 ease-in-out  group-hover:text-cyan-200">
          H
        </span>
        ub
      </NavLink>

      <div className="hidden md:block">
        <div className="flex items-center gap-8 text-xl">
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 p-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                : "text-white p-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
            }
          >
            Students
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 p-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                : "text-white p-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 p-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                : "text-white p-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
            }
          >
            Attendance
          </NavLink>
        </div>
      </div>

      <div className="block md:hidden">
        <div>
          <div className="mr-[2em]">
            <button
              onClick={() => setOpenHamburger((prev) => !prev)}
              className=""
            >
              <Hamburger />
            </button>
          </div>
          {openHamburger && (
            <div className="flex flex-col absolute items-start gap-3 text-xl text-white bg-cyan-600 -mt-[0.3em] -ml-[1em] w-[7em] p-[1em] rounded-sm">
              <NavLink
                to="/students"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-8 p-1 py-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                    : "text-white p-1 py-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                }
              >
                Students
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-8 p-1 py-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                    : "text-white p-1 py-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                }
              >
                Courses
              </NavLink>
              <NavLink
                to="/attendance"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-8 p-1 py-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                    : "text-white p-1 py-2 rounded-sm flex items-center gap-1 transition duration-500 ease-in-out hover:bg-slate-100 hover:text-cyan-600"
                }
              >
                Attendance
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
