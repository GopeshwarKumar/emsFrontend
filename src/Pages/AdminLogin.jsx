import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash } from "react-icons/fa6";
import { IoIosEye } from "react-icons/io";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [eye, seteye] = useState('password')
  const [active, setactive] = useState(false);

  const submitform = async (e) => {
    e.preventDefault();
    setactive(true);

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/adminlogin`, { email, password }).then((res) => {
        res.data.message === "Admin Logged In" ? toast.success(res.data.message) :toast.warn(res.data.message)

        if (res.status === 200 && res.data.message === "Admin Logged In") {
          localStorage.setItem("Admintoken", res.data.token);
          navigate("/adminpanel");
        }
      }).catch((err) => {
        alert('Error found !')
      }).finally((final) => {
        setactive(false);
      });
  };

  const rememberMe = (e) => {
    if(!email && !password){
          return null
          }
          localStorage.setItem("AdminEmail",email)
          localStorage.setItem("Adminpassword",password)
        }
        
        useEffect(()=>{
        setemail(localStorage.getItem("AdminEmail"))
        setpassword(localStorage.getItem("Adminpassword"))
      },[])
  return (
    <>
    <ToastContainer/>
      <div className="px-[5vw] py-[2vh] shadow-slate-950 shadow-2xl bg-gradient-to-tr from-[#0369A1] to-slate-900 rounded-md flex flex-col items-center justify-center gap-[30px]">
        <h4 className="shadow-2xl px-5 hover:shadow-slate-800 text-yellow-300 font-bold p-2 hover:skew-y-2 transition-all">
          Admin Login
        </h4>

        <form
          onSubmit={submitform}
          method="post"
          className="flex flex-col items-center  justify-center gap-[15px] "
        >
          <input
            type="email"
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
            name="emai"
            placeholder="Enter Your Email"
            className="outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100"
          />
          <div className="flex items-center">
            <input type={eye} required onChange={(e) => {
            setpassword(e.target.value);
            }} value={password} placeholder="Enter Your Pass" className="translate-x-3 outline-none rounded 2xl:py-[7px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] sm:px-[20px] px-[10px] font-sans sm:text-[16px] text-[14px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all placeholder:duration-100"/>
            {eye==='password' ? <IoIosEye onClick={()=>{seteye('text')}} className="relative sm:right-4 right-2 text-black sm:text-[22px] vmd:text-[18px] cursor-pointer hover:text-yellow-400"/> :<FaEyeSlash onClick={()=>{seteye('password')}} className="relative sm:right-4 right-2 text-black sm:text-[22px] vmd:text-[18px] cursor-pointer hover:text-red-600"/>}
                    </div>
          <div className="w-full flex flex-col gap-[5px]">
            <div className="flex items-center justify-between ">
              <Link
                to={"/ForgetPassword"}
                className="text-[12px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 hover:text-blue-500 text-red-600 font-bold hover:underline underline-offset-8 transition-all "
              >
                Forgot password
              </Link>
              <div className="flex items-center gap-1">
                <p className="text-[10px] cursor-pointer">Remember Me</p>
                <input
                  onChange={rememberMe}
                  type="checkbox"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex mt-2 items-center justify-center">
              {active === false ? (
                <button className="text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all ">
                  Login
                </button>
              ) : (
                <Loader></Loader>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
