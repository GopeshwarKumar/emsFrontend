import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";

function EmployeeNavbar() {
  const location=useLocation()
  return (
    <>
    <div className="lg:w-[12%] w-[25%] bg-gradient-to-tr from-indigo-700 via-sky-700 flex flex-col justify-start items-center pt-4">
          <Link to={"/employeeDashboard"} className={`${location.pathname==='/employeeDashboard' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' :''} w-full p-2 text-white font-bold  rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all  flex items-center gap-3 justify-between px-5`}>
          <MdDashboard className={`${location.pathname==='/employeeDashboard' ? 'text-blue-600' :''} text[25px]`}/>DashBoard</Link>
          <Link to={"/employeeprofile"} className={`${location.pathname==='/employeeprofile' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' :''} w-full p-2 text-white font-bold  rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all  flex items-center gap-3 justify-between px-5`}>
          <CgProfile className={`${location.pathname==='/employeeprofile' ? 'text-blue-600' :''} text[25px]`}/>My Profile</Link>
          <Link to={"/employeeLeaves"} className={`${location.pathname==='/employeeLeaves' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' :''} w-full p-2 text-white font-bold  rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all  flex items-center gap-3 justify-between px-5`}>
          <FaHome className={`${location.pathname==='/employeeLeaves' ? 'text-blue-600' :''} text[25px]`}/>Leave</Link>
          <Link to={"/employeeSalary"} className={`${location.pathname==='/employeeSalary' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' :''} w-full p-2 text-white font-bold  rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all  flex items-center gap-3 justify-between px-5`}>
          <FaMoneyCheckAlt className={`${location.pathname==='/employeeSalary' ? 'text-blue-600' :''} text[25px]`}/>Salary</Link>
          <Link to={"/employeeSetting"} className={`${location.pathname==='/employeeSetting' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' :''} w-full p-2 text-white font-bold  rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all  flex items-center gap-3 justify-between px-5`}>
          <IoSettings className={`${location.pathname==='/employeeSetting' ? 'text-blue-600' :''} text[25px]`}/>Setting</Link>
          </div>
    </>
  )
}

export default EmployeeNavbar