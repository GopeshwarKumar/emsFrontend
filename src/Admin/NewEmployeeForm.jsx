import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../Pages/Loader'
import { BiHide } from "react-icons/bi";
import { IoIosEye } from "react-icons/io";


function NewEmployeeForm() {
        const [name, setname] = useState()
        const [email, setemail] = useState()
        const [id, setid] = useState()
        const [gender, setgender] = useState()
        const [dob, setdob] = useState()
        const [martialstatus, setmartialstatus] = useState()
        const [department, setdepartment] = useState()
        const [role, setrole] = useState()
        const [designation, setdesignation] = useState()
        const [salary, setsalary] = useState()
        const [password, setpassword] = useState()
        const [loader, setloader] = useState(false)
        const [togglePassword, settogglePassword] = useState("password")
        const [popUpMessage, setpopUpMessage] = useState()

        const registerNewEmployee=async (e)=>{
          e.preventDefault();
          setloader(true)

          axios.post(`${process.env.REACT_APP_SECRET_KEY}/addnewemployee`,{name,email,id,gender,martialstatus,department,dob,role,designation,salary,password}).then(ress =>{
            if(ress.status===200){
              setpopUpMessage(ress.data.message)
            }
          }).catch( err=>{
            alert('Error found !')
          }).finally(final =>{
            setloader(false)
          })
        }

  return (
    <>
    <div className='w-full bg-gradient-to-tr from-indigo-700 via-sky-700 flex items-center justify-center border-2 border-double border-teal-400 rounded-md my-2'>
      <form onSubmit={registerNewEmployee} className='grid xl:grid-cols-3 sm:grid-cols-2 mb:grid-cols-1 vmd:grid-cols-1 gap-x-2 gap-y-2 place-content-center content-center p-5'>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Name</lavel>
          <input onChange={(e)=>{setname(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Email</lavel>
          <input onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter your Email' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Employee Id</lavel>
          <input onChange={(e)=>{setid(e.target.value)}} placeholder='Enter your Id' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Gender</lavel>
          <input onChange={(e)=>{setgender(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>DOB</lavel>
          <input onChange={(e)=>{setdob(e.target.value)}} type='date' placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Martial Status</lavel>
          <input onChange={(e)=>{setmartialstatus(e.target.value)}} placeholder='Maarried or Unmarried' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Designation</lavel>
          <input onChange={(e)=>{setdesignation(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col'>
          <lavel className='text-[14px]'>Department</lavel>
          <input onChange={(e)=>{setdepartment(e.target.value.toLowerCase())}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Salary</lavel>
          <input onChange={(e)=>{setsalary(e.target.value)}} placeholder='Rs XYZ' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col'>
          <lavel className='text-[14px]'>Role</lavel>
          <input onChange={(e)=>{setrole(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Password</lavel>
          <div className='flex items-center'>
            <input onChange={(e)=>{setpassword(e.target.value)}} type={togglePassword} placeholder='********' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
            {togglePassword=== 'text' ? <BiHide className='sm:-translate-x-7 -translate-x-5 text-[25px] text-red-600' onClick={()=>{
              settogglePassword("password")}}/> :<IoIosEye className='sm:-translate-x-7 -translate-x-5 text-[25px] text-yellow-400' onClick={()=>{
              settogglePassword("text")}}/>}
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
        {loader ===true ?  (<Loader></Loader>) : (<button type='submit' className="sm:text-[15px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all ">
              Add Employee
            </button>)}
            <p className={`text-green-400 font-bold`}>{popUpMessage}
              {/* <p>{popUpMessage==="Wrong Password" ? <p className="text-red-600">{popUpMessage}</p> : <p className="text-green-500">{popUpMessage}</p>}</p> */}
            </p>
        </div>
      </form>
    </div>
    </>
  )
}

export default NewEmployeeForm