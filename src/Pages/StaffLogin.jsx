import axios from "axios";
import React, { useState } from "react";
import Loader from "./Loader";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
// import { useContext } from "react";
// import { auth } from "../Auth/Authprovider";

function StaffLogin() {
  const navigate=useNavigate()
  // const loginauth=useContext(auth)
  
  const [useremail, setuseremail] = useState();
  const [userpass, setuserpass] = useState();
  const [active, setactive] = useState(false)
  const [eye, seteye] = useState('password')
  const [popUpMessage, setpopUpMessage] = useState()


  const submitform = async (e) => {
    e.preventDefault()
    setactive(true)

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/employeelogin`, { useremail, userpass }).then((res) => {
        res.data.message==="Employee Found" ? toast.success(res.data.message) : toast.warn(res.data.message)

        if (res.status === 200 && res.data.message==="Employee Found") {
          setpopUpMessage(res.data.message)
          
          localStorage.setItem("employeeToken", res.data.token)
          localStorage.setItem("employeeName", res.data.employeeName)
          localStorage.setItem("employeeEmail", res.data.employeeEmail)
          navigate("/employeeDashboard")
        }
      }).catch(err => {
        alert('Error found !')
      }).finally(final=>{
        setactive(false)
      })
  }
  const rememberMeStaff=(e)=>{
      localStorage.setItem("staffEmail",useremail)
      localStorage.setItem("staffpassword",userpass)
    }
    
    useEffect(()=>{
    setuseremail(localStorage.getItem("staffEmail"))
    setuserpass(localStorage.getItem("staffpassword"))
  },[])
  return (
    <>
    <ToastContainer/>
      <div className="px-[5vw] py-[2vh] shadow-slate-950 shadow-2xl bg-gradient-to-tr from-[#0369A1] to-slate-900 rounded-md flex flex-col items-center justify-center gap-[20px]">
        <h4 className="shadow-2xl px-5 hover:shadow-slate-800 text-yellow-300 font-bold p-2 hover:skew-y-2 transition-all">
          Staff Login
        </h4>
        <form
          action="/login"
          onSubmit={submitform}
          method="post"
          className="flex flex-col items-center  justify-center gap-[10px] "
        >
          <input
            type="email"
            required
            onChange={(e) => {
              setuseremail(e.target.value);
            }}
            value={useremail}
            name="emai"
            placeholder="Enter Your E-mail"
            className="outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100"
          />
          <div className="flex items-center">
            <input
            type={eye}
            required
            onChange={(e) => {
              setuserpass(e.target.value);
            }}
            value={userpass}
            placeholder="Enter Your Pass"
            className="translate-x-3 outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100"
          />
          {eye==='password' ? <IoIosEye onClick={()=>{seteye('text')}} className="relative sm:right-4 right-2 text-black sm:text-[22px] vmd:text-[18px] cursor-pointer hover:text-yellow-400 transition-all"/> :<FaEyeSlash onClick={()=>{seteye('password')}} className="relative sm:right-4 right-2 cursor-pointer text-black sm:text-[22px] vmd:text-[18px] hover:text-red-600 transition-all"/>}
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <div className="flex items-center justify-between ">
              <Link to={"/ForgetPassword"}
                className="text-[12px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 hover:text-blue-500 text-rose-600 hover:underline underline-offset-8 transition-all "
              >
                Forgot password
              </Link>
              <div className="flex items-center gap-1">
                <p className="text-[10px] cursor-pointer">Remember Me</p>
                <input onChange={rememberMeStaff} type="checkbox" className="cursor-pointer"/>
              </div>
            </div>
            <div className="flex mt-2 items-center justify-center">
            {active===true ? (<Loader></Loader>) :(<button className='text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all '>
              Login
            </button>)}
            </div>
          </div>
          <p>{popUpMessage==="Wrong Password" ? <p className="text-red-600">{popUpMessage}</p> : <p className="text-green-500">{popUpMessage}</p>}</p>
        </form>
      </div>
    </>
  );
}

export default StaffLogin;

// "name":res.data.name,"employeeEmail":res.data.email,"employeeId":res.data.dob,"employeegender":res.data.gender,"employeeDepartment":res.data.department,"employeeMartialStatus":res.data.martialstatus
