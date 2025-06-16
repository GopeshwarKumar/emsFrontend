import React from 'react'
import EmployeeNavbar from '../Employee/EmployeeNavbar'
import EmployeeHeader from './EmployeeHeader'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'

function EmployeePanel() {

    // const navigate=useNavigate()

    // useEffect(()=>{
    //     const employeetoken=localStorage.getItem("employeeToken")
    // if(!employeetoken){
    //     navigate("/employeelogin")
    // }
    // },[])

    return (
      <>
      <EmployeeHeader/>
      <div className="w-screen h-screen flex ">
            <EmployeeNavbar/>
          <div className="lg:w-[88%] w-[75%] bg-slate-900 flex justify-center">
              <h2 className='text-white'>Employee DashBoard</h2>
          </div>
          </div>
  
  
      {/* dashboard */}
      {/* <div className='w-[75%]  bg-orange-200'>
      <h5>DashBoard OverView</h5>
      <div className='flex items-center justify-evenly text-black font-bold'>
          <div className='flex items-center '>
              <div className='md:w-[70px] w-8 md:h-[50px] h-[50px] bg-green-500'></div>
              <div className='bg-white w-full h-[50px]'>Welcome Back Name</div>
          </div>
          </div>
  
      <h5 className='text-center'>Leave Details</h5>
      <div className='flex flex-wrap items-center justify-evenly md:gap-0 gap-5'>
      <div className='flex items-center '>
              <div className='md:w-[70px] w-8 md:h-[50px] h-[50px] bg-green-500'></div>
              <div className='bg-white w-full h-[50px]'>Leave Applied
              </div>
              </div>
      <div className='flex items-center '>
              <div className='md:w-[70px] w-8 md:h-[50px] h-[50px] bg-green-500'></div>
              <div className='bg-white w-full h-[50px]'>Leave Approved
              </div>
              </div>
      <div className='flex items-center '>
              <div className='md:w-[70px] w-8 md:h-[50px] h-[50px] bg-green-500'></div>
              <div className='bg-white w-full h-[50px]'>Leave Pending
              </div>
              </div>
      <div className='flex items-center '>
              <div className='md:w-[70px] w-8 md:h-[50px] h-[50px] bg-green-500'></div>
              <div className='bg-white w-full h-[50px]'>Leave Rejected
              </div>
              </div>
      </div>
      </div> */}

      {/* Leave */}
      {/* <div className='w-[75%]'>
        <h3 className='text-center font-bold'>Salary History</h3>
        <div className='flex items-center justify-between px-5'>
            <form>
            <input type='text' placeholder='Search By Id'/>
            </form>
            <div>Add Leave</div>
        </div>
        <div className='bg-slate-600'>
                <div className='flex items-center justify-evenly'>
                    {["SI No.","Leave Type","From","To","Description","Applied Date","Status"].map((e,i)=>{
                        return <div>{e}</div>
                    })}
                </div>
            
        </div>
        </div> */}
  
  
          {/* salary */}
          {/* <div className='w-[75%]'>
          <h3 className='text-center font-bold'>Salary History</h3>
          <div>
              <form>
              <input type='text' placeholder='Search By Id'/>
              </form>
          </div>
          <div className='bg-slate-600'>
                  <div className='flex items-center justify-evenly'>
                      {["SI No.","Emplyee ID","Salary","Allowance","Deduction","Total","Pay Date"].map((e,i)=>{
                          return <div>{e}</div>
                      })}
                  </div>
              
          </div>
          </div> */}
  
  
  
  
      </>
    )
  }
  
  export default EmployeePanel