import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function AdminHeader() {
    const navigate=useNavigate()

  useEffect(() => {
    const tokenofAdmin = localStorage.getItem("Admintoken")
    if (!tokenofAdmin) {
      navigate("/");
    }
  },[]);

  const logOutAdmin=()=>{
    localStorage.removeItem('Admintoken')
    navigate("/")
  }

  // const logOutEmployee=()=>{
  //   localStorage.removeItem("employeeToken")
  //   navigate("/")
  // }
  return (
    <>
    <div className="w-screen h-[6vh] bg-green-600 flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-3">
          <div>EMS</div>
          <div>Welcome Admin</div>
        </div>
        <div className="px-5 flex items-center gap-4">
          {/* <button onClick={logOutAdmin} className="cursor-pointer bg-neutral-800 px-3 rounded-md text-center hover:opacity-70 text-red-600">
          Log Out
        </button> */}
        
                <MdDarkMode title="Dark Mode" className="text-[25px] font-extrabold text-black hover:scale-90 cursor-pointer"/>
                <MdOutlineLightMode title="Light Mode" className="text-[25px] font-extrabold text-yellow-300 hover:scale-90 cursor-pointer"/>
                
                <AiOutlineLogout title="Log out" onClick={logOutAdmin} className="text-[25px] font-extrabold text-red-600 hover:scale-90 cursor-pointer"/>

        </div>
      </div>
    </>
  )
}

export default AdminHeader