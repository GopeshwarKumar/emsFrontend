import React from "react";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
// import { auth } from "../Auth/Authprovider";

function EmployeeHeader() {

  const navigate=useNavigate()
  // const headerAuth=useContext(auth)

  const logOutEmployee=()=>{
    localStorage.removeItem("employeeToken")
    localStorage.removeItem("employeeEmail")
    localStorage.removeItem("employeeName")
    
    navigate("/")
  }
  return (
    <>
    <div className="w-screen h-[6vh] bg-green-600 flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-3">
          <div>EMS</div>
          <p className="text-nowrap ">Welcome <mark className="px-3 py-1 rounded-md">{localStorage.getItem("employeeName")}</mark></p>
        </div>
        <div className="flex items-center gap-3 px-3">
          <MdDarkMode title="Dark Mode" className="text-[25px] font-extrabold text-black hover:scale-90 cursor-pointer"/>
          <MdOutlineLightMode title="Light Mode" className="text-[25px] font-extrabold text-yellow-300 hover:scale-90 cursor-pointer"/>
        <LuLogOut title="Log out" onClick={logOutEmployee} className="text-[25px] font-extrabold text-red-600 hover:scale-90 cursor-pointer"/>
        </div>
      </div>
    </>
  )
}
export default EmployeeHeader