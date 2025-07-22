import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Loader from '../Pages/Loader'
import {motion} from 'framer-motion'
import { auth } from '../Auth/Authprovider'
import { useNavigate } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
import { GiSplitCross } from "react-icons/gi";
import { lazy } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'


const NewEmployeeForm=lazy(()=>import('./NewEmployeeForm'))
const AdminHeader=lazy(()=>import('./AdminHeader'))
const AdminNavbar=lazy(()=>import('./AdminNavbar'))

function Employees() {

  const employeeeAuth=useContext(auth)
  const navigate=useNavigate()

  const [active, setactive] = useState(false)
  const [loader, setloader] = useState(false)
  const [showEditForm, setshowEditForm] = useState(false)
  const [employeeArray, setemployeeArray] = useState([])
  const [showEmployeePopUp, setshowEmployeePopUp] = useState({})

const [editName,seteditName]=useState()
const [editEmail,seteditEmail]=useState()
const [editEmployeeId,seteditEmployeeId]=useState()
const [editGender,seteditGender]=useState()
const [editDob,seteditDob]=useState()
const [editMartialStatus,seteditMartialStatus]=useState()
const [editDesignation,seteditDesignation]=useState()
const [editDepartment,seteditDepartment]=useState()
const [editSalary,seteditSalary]=useState()
const [editRole,seteditRole]=useState()
// const [editPassword,seteditPassword]=useState()
const [slideEmployeePopoUp, setslideEmployeePopoUp] = useState(false)
// console.log(showEmployeePopUp)
// console.log(showEmployeePopUp.name)
// console.log(showEmployeePopUp.email)
  const addNewEmployee=()=>{
    setactive(!active)
  }

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_SECRET_KEY}/showEmployee`).then(result=>{
      setemployeeArray(result.data)
    }).catch(err =>{

    }).finally(final =>{

    })
  },[])

  // pagination
  const [itemPerPage, setitemPerPage] = useState(7)
  const [currentIndex, setcurrentIndex] = useState(0)
  const [lastIndex, setlastIndex] = useState(6)
  const pages = [];

  for(let i=0; i<Math.ceil(employeeArray.length/itemPerPage); i++){
  pages.push(i);
  }

  const currentItems = employeeArray.slice(currentIndex, lastIndex);

    const NextPage=()=>{
    if(lastIndex < employeeArray.length){
    setcurrentIndex(lastIndex)
    setlastIndex(lastIndex+itemPerPage)
    }
  }
  const PrevPage=()=>{
    if(currentIndex < 0){
      setcurrentIndex(0)
      setlastIndex(itemPerPage)
    }
    setcurrentIndex(currentIndex-itemPerPage)
    setlastIndex(currentIndex)
  }

  const EditemployeeDetails=(e)=>{
    e.preventDefault()
    setloader(true)
    
    axios.post(`${process.env.REACT_APP_SECRET_KEY}/editemployeedetails`,{editName,editEmail,editEmployeeId,editGender,editDob,editMartialStatus,editDesignation,editDepartment,editSalary,editRole}).then(res=>{
      toast.success(res.data.message)
    }).catch(err=>{
      alert('Error found !')
    }).finally(finale=>{
      setloader(false)
    })
  }

  const DeleteEmployee=async(r)=>{
    const id=r._id
    axios.post(`${process.env.REACT_APP_SECRET_KEY}/deleteEmployee`,{id}).then(res=>{
      toast.success(res.data.message)
    }).catch(err=>{
      alert('Error found !')
    }).finally(finale=>{
      
    })
  }

  const [allLeaves, setallLeaves] = useState([])
  const [EmployeeLeavePopoUp, setEmployeeLeavePopoUp] = useState(false)

  const CheckLeave=async(r)=>{
    let email=r.email
    setEmployeeLeavePopoUp(true)
    axios.post(`${process.env.REACT_APP_SECRET_KEY}/checkEmployeeLeave`,{email}).then(res=>{
      setallLeaves(res.data)
    }).catch(err=>{

    }).finally(final=>{
    })
  }

  const [searchTerm, setSearchTerm] = useState("");

  
  return (
    <>
    <ToastContainer className={`text-[14px]`}/>
    {/* employee */}
    <AdminHeader/>
    <div className="w-screen h-[94vh] flex">
        <AdminNavbar/>
        <div className='lg:w-[88%] w-[75%] bg-slate-900'>
        <h3 className='text-center font-bold rounded-lg p-5 shadow-xl hover:shadow-slate-800 transition-all'>Manage Employees</h3>
        <div className='w-full flex items-center justify-between px-5 py-3 mt-[3%]'>
        <div>
        <input value={searchTerm} onChange={(e)=>{
          setSearchTerm(e.target.value)
        }} placeholder='Search By name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 text-[15px] vmd:py-[5px] py-[10px] px-[10px] text-white hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div onClick={addNewEmployee} className="cursor-pointer bg-green-500 font-bold px-3 py-1 rounded-md text-center text-[15px] hover:opacity-70 ">{active ===true ? "Hide" :"Add Employee"}</div>
        </div>

        <div className='hidescroller w-full h-[66vh] overflow-x-scroll p-5'>
                    {active === true ? <NewEmployeeForm/> : (<table className='w-full'>
                    <thead className='border-b-2 border-b-emerald-500 py-2'>
                      <tr className='text-nowrap w-full'>
                        <th className='px-4'>SI No.</th>
                        <th className='px-4'>Image</th>
                        <th className='px-4'>Id</th>
                        <th className='px-4'>Name</th>
                        <th className='px-4'>DOB</th>
                        <th className='px-4'>Department</th>
                        <th className='px-4'>Action</th>
                      </tr>
                    </thead>
                    {currentItems.filter((employee)=>
                        employee.name.toLowerCase().includes(searchTerm) ||
                        employee.department.toLowerCase().includes(searchTerm) ||
                        employee.id.toLowerCase().includes(searchTerm)
                      ).map((r,t)=>{
                      return <tr key={t}>
                        <th className='px-4 py-2 rounded-md'>{t+1}</th>
                        <th className='px-4 py-2 rounded-md'>
                          <img className='w-[40px] h-[40px]' src='/logo192.png' alt='ff'/></th>
                        <th className='px-4 py-2 rounded-md'>{r.id}</th>
                        <th className='px-4 py-2 rounded-md'>{r.name}</th>
                        <th className='text-nowrap'>{r.dob}</th>
                        <th className='px-4 py-2 rounded-md'>{r.department}</th>
                        <th className='flex items-center justify-center gap-2 text-[15px] '>
                          <button onClick={(t)=>{
                            setshowEmployeePopUp(r)
                            setslideEmployeePopoUp(true)
                          }} className='bg-blue-500 px-4 py-1 rounded-md'>View</button>
                          <button onClick={(t)=>{
                          seteditName(r.name)
                          seteditEmail(r.email)
                          seteditEmployeeId(r.id)
                          seteditGender(r.gender)
                          seteditDob(r.dob)
                          seteditMartialStatus(r.martialstatus)
                          seteditDesignation(r.designation)
                          seteditDepartment(r.department)
                          seteditSalary(r.salary)
                          seteditRole(r.role)
                            setshowEditForm(true)
                          }} className='bg-green-500 px-4 py-1 rounded-md'>Edit</button>
                          <button onClick={(t)=>{
                            employeeeAuth.setfetchSalaryUsingEmail(r.email)
                            navigate('/adminSalary')
                          }} className='bg-yellow-500 px-4 py-1 rounded-md'>Salary</button>
                          <button onClick={()=>CheckLeave(r)} className='bg-red-500 px-4 py-1 rounded-md'>Leave</button>
                          <button onClick={()=>DeleteEmployee(r)} className='bg-red-500 px-4 py-1 rounded-md'>Delete</button>
                        </th>
                      </tr>
                    })}
                    </table>)}
        </div>
        <p className="sm:hidden flex float-end items-center gap-2 shadow-sm shadow-gray-200 px-3 mx-5 cursor-pointer">Slide Right <BiRightArrowAlt className="text-[25px] animate-pulse hover:translate-x-3 hover:text-[20px] transition-all duration-700"/></p>
        <div className='flex items-center justify-center'>
          <button onClick={PrevPage} title='Prev' className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>Prev</button>
        {pages.map((e,x)=>{
          return <button onClick={(r)=>{
            setcurrentIndex(itemPerPage*e)
            setlastIndex(itemPerPage*(e+1))
            // console.log(currentIndex,lastIndex)
          }} className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>{e}</button>
        })}
        <button onClick={NextPage} title='Next' className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>Next</button>
        </div>
        </div>
        </div>




      {EmployeeLeavePopoUp &&<motion.div className={`absolute md:left-1/3 mb:left-1/4 top-[15%] bg-gradient-to-br from-indigo-700 via-sky-700 border-2 border-emerald-500 shadow-emerald-500 rounded-tl-[20%] rounded-md p-5`}>
      <button onClick={()=>{setEmployeeLeavePopoUp(false)}} className='float-right bg-red-600 rounded-md px-2 hover:bg-blue-600 transition-all duration-1000'><GiSplitCross title='Hide' className='text-[25px]'/></button><br/>
        <h1 className='text-center font-bold shadow-md'>Leave Details </h1>
      <div className='w-[90%] h-[80%] flex items-center justify-center'>
        <div className='hidescroller overflow-y-scroll p-10'>
          <table className="w-full">
                <tr className={`text-[15px]`}>
                  <th className="bg-blue-500 rounded-md text-nowrap hover:opacity-70 px-3">SI No.</th>
                  <th className="bg-red-500 rounded-md  hover:opacity-70">Name</th>
                  <th className="bg-emerald-500 rounded-md  hover:opacity-70 text-nowrap px-3">Leave Type</th>
                  <th className="bg-purple-600 rounded-md  hover:opacity-70 px-3">Days</th>
                  <th className="bg-green-600 rounded-md  hover:opacity-70">status</th>
                </tr><br/>
                {allLeaves.filter((leave) =>leave.name.toLowerCase().includes(searchTerm
              )).map((r, t) => (
                  <tr key={t} className="hover:bg-slate-950 rounded-md">
                  <th className="p-2">{t + 1}</th>
                  <th className="px-4">{r.name}</th>
                  <th className="px-4">{r.leaveType}</th>
                  <th className="px-4">{r.days}</th>
                  <th className={`px-4 ${r.status === "approved" ? "text-green-500" : "text-red-500"}`}>{r.status}</th>
                  </tr>))}
              </table>
        </div>
      </div>
      </motion.div>}

      {slideEmployeePopoUp &&<motion.div className={`absolute left-1/4 top-[15%] bg-gradient-to-tr from-indigo-700 via-sky-700 border-2 border-emerald-500 shadow-emerald-500 rounded-tl-[20%] rounded-md p-5`}>
      <button onClick={()=>{setslideEmployeePopoUp(false)}} className='float-right bg-red-600 rounded-md px-2 hover:bg-blue-600 transition-all duration-1000'><GiSplitCross title='Hide' className='text-[25px]'/></button><br/>
        <h1 className='text-center font-bold '>Employee Details </h1>
      <div className='w-[95%] h-[80%] flex items-center justify-center'>
        <div className='md:w-[80%] w-full h-[80%] flex sm:flex-row flex-col items-center justify-center lg:sm:gap-[50px] sm:gap-[30px] p-10'>
          <div>
            <img src='/logo192.png' alt='fff'/>
          </div>
          <div>
          <p>Name :- {showEmployeePopUp.name}</p>
          <p>Employee ID :- {showEmployeePopUp.id}</p>
          <p>Email :- {showEmployeePopUp.email}</p>
          <p>DOB :- {showEmployeePopUp.dob}</p>
          <p>Gender :- {showEmployeePopUp.gender}</p>
          <p>Department :- {showEmployeePopUp.department}</p>
          <p>Martial Status :- {showEmployeePopUp.martialstatus}</p>
          </div>
        </div>
      </div>
      </motion.div>}



      {showEditForm && <motion.div className={`absolute left-1/4 top-[15%] bg-gradient-to-br from-slate-900 to-cyan-900 shadow-inner shadow-emerald-500 rounded-md p-5`}>
<button onClick={()=>{setshowEditForm(false)}} className='float-right bg-red-600 rounded-md px-2 hover:bg-blue-600 transition-all duration-1000'>Hide</button><br/>
<div className='w-full bg-gradient-to-tr from-indigo-700 via-sky-700 flex flex-col items-center justify-center border-2 border-double border-teal-400 rounded-md my-2'>
  <h3>Edit Employee</h3>
      <form onSubmit={EditemployeeDetails} className='grid xl:grid-cols-3 sm:grid-cols-2 mb:grid-cols-1 vmd:grid-cols-1 gap-x-2 gap-y-2 place-content-center content-center p-5'>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Name</lavel>
          <input value={editName} onChange={(e)=>{seteditName(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Email</lavel>
          <input value={editEmail} onChange={(e)=>{}} placeholder='Enter your Email' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Employee Id</lavel>
          <input value={editEmployeeId} onChange={(e)=>{seteditEmployeeId(e.target.value)}} placeholder='Enter your Id' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Gender</lavel>
          <input value={editGender} onChange={(e)=>{seteditGender(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>DOB</lavel>
          <input value={editDob} onChange={(e)=>{seteditDob(e.target.value)}} type='date' placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Martial Status</lavel>
          <input value={editMartialStatus} onChange={(e)=>{seteditMartialStatus(e.target.value)}} placeholder='Maarried or Unmarried' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Designation</lavel>
          <input value={editDesignation} onChange={(e)=>{seteditDesignation(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col'>
          <lavel className='text-[14px]'>Department</lavel>
          <input value={editDepartment} onChange={(e)=>{seteditDepartment(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col gap-2'>
          <lavel className='text-[14px]'>Salary</lavel>
          <input value={editSalary} onChange={(e)=>{seteditSalary(e.target.value)}} placeholder='Rs XYZ' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col'>
          <lavel className='text-[14px]'>Role</lavel>
          <input value={editRole} onChange={(e)=>{seteditRole(e.target.value)}} placeholder='Enter your Name' className='lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
        </div>
        <div className='flex flex-col items-center gap-2'>
        {loader ===true ?  (<Loader></Loader>) : (<button type='submit' className="sm:text-[15px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all ">
              Edit Employee
            </button>)}
        </div>
      </form>
    </div>
      </motion.div>}
    </>
  )
}

export default Employees