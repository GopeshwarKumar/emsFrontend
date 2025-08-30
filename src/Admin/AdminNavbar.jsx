import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";



function AdminNavbar() {

  const location=useLocation()
  return (
    <>
    <div className="xl:w-[15%] md:w-[20%] w-[25%] bg-gradient-to-tr from-indigo-700 via-sky-700 flex flex-col justify-start items-center pt-4">
          <Link to={"/adminDashboard"} className={`w-full p-2 text-white font-bold ${location.pathname==='/adminDashboard' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' : ''} rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all flex items-center justify-between px-3 gap-3`}>
          <MdDashboard className={`${location.pathname==='/adminDashboard' ? 'text-blue-600' :''} text[25px]`}/>DashBoard</Link>
          <Link to={"/adminEmployees"} className={`w-full p-2 text-white font-bold ${location.pathname==='/adminEmployees' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' : ''}  rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all flex items-center justify-between px-3 gap-3 `}>
          <IoIosPeople className={`${location.pathname==='/adminEmployees' ? 'text-blue-600' :''} text[25px]`}/>Employees</Link>
          <Link to={"/adminDepartments"} className={`w-full p-2 text-white font-bold ${location.pathname==='/adminDepartments' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' : ''} rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all flex items-center justify-between px-3 gap-3 `}>
          <FaBuildingColumns className={`${location.pathname==='/adminDepartments' ? 'text-blue-600' :''} text[25px]`}/>Departments</Link>
          <Link to={"/adminLeaves"} className={`w-full p-2 text-white font-bold ${location.pathname==='/adminLeaves' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' : ''}  rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all flex items-center justify-between px-3 gap-3 `}>
          <FaHome className={`${location.pathname==='/adminLeaves' ? 'text-blue-600' :''} text[25px]`}/>Leaves</Link>
          <Link to={"/adminSalary"} className={`w-full p-2 text-white font-bold ${location.pathname==='/adminSalary' ? 'bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' : ''} rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all flex items-center justify-between px-3 gap-3 `}>
          <FaMoneyCheckAlt className={`${location.pathname==='/adminSalary' ? 'text-blue-600' :''} text[25px]`}/>Salary</Link>
          <Link to={"/adminSetting"} className={`w-full p-2 text-white font-bold ${location.pathname==='/adminSetting' ? 'focus:bg-gradient-to-bl from-gray-800 via-zinc-900 to-slate-900' : ''} rounded-xl cursor-pointer sm:text-center hover:tracking-wider transition-all flex items-center justify-between  px-3 gap-3 `}><IoSettings className={`${location.pathname==='/adminSetting' ? 'text-blue-600' :''} text[25px]`}/>Setting</Link>
          </div>
    </>
  )
}

export default AdminNavbar
