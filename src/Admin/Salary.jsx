import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Pages/Loader'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import {toast,ToastContainer} from 'react-toastify'
// import { auth } from '../Auth/Authprovider'
// import { useContext } from 'react'
// import { FaPeopleGroup } from 'react-icons/fa6'

function Salary() {

  // const salaryAuth=useContext(auth)
  
        const [employee, setemployee] = useState()
        const [basicsalary, setbasicsalary] = useState()
        const [allowance, setallowance] = useState()
        const [deduction, setdeduction] = useState()
        const [paydate, setpaydate] = useState()
        const [department, setdepartment] = useState()
        const [getdepartment, setgetdepartment] = useState([])
        const [getdepartmentemployee,setgetdepartmentemployee] = useState([])
        const [loader, setloader] = useState(false)

        // const employeemail=salaryAuth.fetchSalaryUsingEmail

        const employeemail=localStorage.getItem('employeeEmail')
        const SaveEmployeeSalary=async (e)=>{
          e.preventDefault();
          setloader(true)

          axios.post(`${process.env.REACT_APP_SECRET_KEY}/saveEmployeeSalary`,{employeemail,employee,basicsalary,allowance,deduction,paydate}).then(res=>{
            res.data.message==='Salary saved successfully' ? toast.success(res.data.message) : toast.success(res.data.message)
          }).catch(err=>{
            alert('Error caught in saving salary')
          }).finally(final=>{
            setloader(false)
            setbasicsalary('')
            setallowance('')
            setdeduction('')
            setpaydate('')
            setdepartment('')
            setemployee('')
          })
        }

        useEffect(()=>{
          axios.get(`${process.env.REACT_APP_SECRET_KEY}/getAlldepartments`).then(res =>{
            setgetdepartment(res.data)
          }).catch( err=>{
            alert('Error found in fetching Departments !')
          }).finally(final =>{
            setloader(false)
          })
        },[])
        
        useEffect(()=>{
          axios.post(`${process.env.REACT_APP_SECRET_KEY}/getdepartmentemployee`,{department}).then(res =>{
            setgetdepartmentemployee(res.data)
          }).catch(errr=>{
            alert('Error found in fetching Employee !')
          })
        },[department])

  return (
    <>
    <ToastContainer className={`text-[14px]`}/>
    <AdminHeader/>
    <div className='w-screen h-[94vh] flex'>
      <AdminNavbar/>
    <div className='w-full bg-slate-900 flex  flex-col items-center justify-center'>
      <h2 className="flex items-center gap-1  rounded-lg p-5 shadow-xl hover:shadow-slate-800 transition-all">Add New Salary</h2>
      <form onSubmit={SaveEmployeeSalary} className='w-[70vw] sm:h-[50vh] h-[80vh] grid xl:grid-cols-3 sm:grid-cols-2 mb:grid-cols-1 vmd:grid-cols-1 gap-x-2 gap-y-2 place-content-center place-items-center p-5 shadow-black shadow-xl'>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Department</lavel>
          <select onChange={(e)=>{setdepartment(e.target.value.toLowerCase())
          }} className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option>select</option>
          {getdepartment.map((e,x)=>{
            return <option key={x}>{e.departmentName}</option>
              
            })}
            </select>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Employee</lavel>
          <select onChange={(e)=>{setemployee(e.target.value)
          }} className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option>select</option>
          {getdepartmentemployee.map((e,x)=>{
            return <option key={x}>{e.name}</option>
            })}
            </select>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Basic salary</lavel>
          <input required type='number' onChange={(e)=>{setbasicsalary(e.target.value)}} placeholder='Enter salary' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/> 
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Allowance</lavel>
          <input required type='number'onChange={(e)=>{setallowance(e.target.value)}} placeholder='Enter Allowance' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Deduction</lavel>
          <input required onChange={(e)=>{setdeduction(e.target.value)}} type='number' placeholder='Enter Deduction' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Pay Date</lavel>
          <input required onChange={(e)=>{setpaydate(e.target.value)}} type='date' placeholder='Enter Pay Date' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col items-center gap-2'>
        {loader ===true ?  (<Loader></Loader>) : (<button type='submit' className="sm:text-[15px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all ">
              Add Salary
            </button>)}
        </div>
      </form>
    </div>
    </div>

    {/* {getdepartment.map((e,x)=>{
            return <div key={x}><option >{e.departmentName}</option></div>
          })} */}
    </>
  )
}

export default Salary