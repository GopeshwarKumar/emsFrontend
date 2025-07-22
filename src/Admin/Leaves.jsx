import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify'

function Leaves() {

  const [SearchId, setSearchId] = useState();
  const [leavedata, setleavedata] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SECRET_KEY}/showleaves`).then((res) => {
        setleavedata(res.data.alleaves)
      }).catch((err) => {
        alert("Error found");
      });
  }, []);

  const ApproveLeave=async(r)=>{
    try {
    const id=r._id
    axios.post(`${process.env.REACT_APP_SECRET_KEY}/approvedleave`, {id }).then(res=>{
      res.data.message=== "Leave approved" ? toast.success(res.data.message) : toast.warn(res.data.message)
    }).catch(err=>{
      alert('Error !')
    })
    } catch (error) {
      console.log(error)
    }
  }

  const RejectLeave=async(r)=>{
    const id=r._id
    axios.post(`${process.env.REACT_APP_SECRET_KEY}/rejectedleave`, {id }).then(res=>{
      res.data.message=== "Leave rejected" ? toast.success(res.data.message) : toast.warn(res.data.message)
    }).catch(err=>{
      alert('Error !')
    })
  }

    const [itemPerPage, setitemPerPage] = useState(7)
    const [currentIndex, setcurrentIndex] = useState(0)
    const [lastIndex, setlastIndex] = useState(6)
    const pages = [];
  
    for(let i=0; i<Math.ceil(leavedata.length/itemPerPage); i++){
    pages.push(i);
    }
  
    const currentItems = leavedata.slice(currentIndex, lastIndex);
  
    const NextPage=()=>{
    if(lastIndex < leavedata.length){
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
  return (
    <>
    <ToastContainer className='text-[14px]'/>
      {/* dashboard */}
      <AdminHeader />
      <div className="w-screen h-[94vh] flex">
        <AdminNavbar />
        <div className="lg:w-[88%] w-[75%] bg-slate-900">
          <div className="mt-[3%]">
            <h2 className="text-center p-4 font-bold rounded-lg shadow-xl hover:shadow-slate-800 transition-all">Manage Leaves</h2>
            <div className="w-full flex items-center justify-between px-1 py-3">

              <div>
                <input value={SearchId} onChange={(e) => setSearchId(e.target.value)}
                  placeholder="Search By Id"
                  className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 text-[15px] vmd:py-[5px] py-[10px] px-[10px] text-white hover:opacity-75 transition-all focus:bg-slate-600  "
                />
              </div>

              <div className="flex items-center justify-center gap-1 flex-wrap cursor-pointer rounded-md text-center text-[15px]">
                <button onClick={()=>{setSearchId('Pending')}} className="bg-yellow-500 px-3 py-1 text-[15px] rounded-md  hover:opacity-70">
                  Pending
                </button>
                <button onClick={()=>{setSearchId('Approved')}} className="bg-green-500 px-3 py-1 text-[15px] rounded-md  hover:opacity-70">
                  Approved
                </button>
                <button onClick={()=>{setSearchId('Rejected')}} className="bg-red-600 px-3 py-1 text-[15px] rounded-md  hover:opacity-70">
                  Rejected
                </button>
              </div>
            </div>

            <div className="hidescroller w-full h-[60vh] text-nowrap bg-slate-900 overflow-x-scroll p-5">
              <table className="w-full">
                <tr className={`overflow-x-scroll text-[15px]`}>
                  <th className="bg-blue-500 rounded-md  hover:opacity-70 px-3">SI No.</th>
                  <th className="bg-yellow-300 rounded-md  hover:opacity-70 ">Id</th>
                  <th className="bg-red-500 rounded-md  hover:opacity-70">Name</th>
                  <th className="bg-emerald-500 rounded-md  hover:opacity-70">Leave Type</th>
                  <th className="bg-rose-600 rounded-md  hover:opacity-70">Department</th>
                  <th className="bg-purple-600 rounded-md  hover:opacity-70">Days</th>
                  <th className="bg-green-600 rounded-md  hover:opacity-70">status</th>
                  <th className="bg-red-600 rounded-md  hover:opacity-70">Action</th>
                </tr><br/>
                {/* {leavedata.filter((e) =>e.name.toLowerCase.includes(SearchId.toLowerCase)) */}
                
                {currentItems.map((r, t) => {
                  return (
                    <tr key={t} className={`hover:bg-slate-950 rounded-md`}>
                      <th className="p-2">{t + 1}</th>
                      <th className="px-4">{"Id"}</th>
                      <th className="px-4">{r.name}</th>
                      <th className="px-4">{r.leaveType}</th>
                      <th className="px-4">{r.leaveType}</th>
                      <th className="px-4">{r.days}</th>
                      <th className={`${r.status === 'Rejected' ? 'text-red-500' : r.status === 'Pending' ?'text-yellow-500' :'text-green-500'} rounded-md over:opacity-70 px-3 `}>{r.status}</th>
                      <th className="px-3 ">
                        <button onClick={()=>ApproveLeave(r)} className="bg-green-500 px-2 py-1 rounded-md  hover:opacity-70 text-[14px]">
                          Approved
                        </button>{" "}
                        <button onClick={()=>RejectLeave(r)} className="bg-red-500 px-2 py-1 rounded-md  hover:opacity-70 text-[14px]">
                          Rejected
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className='flex items-center justify-center'>
          <button onClick={PrevPage} title="prev" className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>Prev</button>
        {pages.map((e,x)=>{
          return <button title={x} key={x} onClick={(r)=>{
            setcurrentIndex(itemPerPage*e)
            setlastIndex(itemPerPage*(e+1))
            // console.log(currentIndex,lastIndex)
          }} className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>{e}</button>
        })}
        <button onClick={NextPage} title="next" className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>Next</button>
        </div>
                {/* <p className="lg:hidden rounded-lg flex float-end items-center gap-2 shadow-xl px-3 mx-5 cursor-pointer">Slide Right <BiRightArrowAlt className="text-[25px] animate-pulse hover:translate-x-3 hover:text-[20px] transition-all duration-700"/></p> */}
            {/* {EmployeePopoUp && (
              <div className={`absolute left-1/4 top-[15%] bg-gradient-to-br from-slate-900 to-cyan-900 shadow-inner shadow-emerald-500 rounded-md p-5`}>
                <button onClick={() => {
                  setEmployeePopoUp(false);
                }} className="float-right bg-red-600 rounded-md px-2 hover:bg-blue-600 transition-all duration-1000"
                >Hide</button>
                <br />
                <h1 className="text-center font-bold ">Leave Details </h1>
                <div className="w-[95%] h-[80%] flex items-center justify-center">
                  <div className="md:w-[80%] w-full h-[80%] flex sm:flex-row flex-col items-center justify-center lg:sm:gap-[50px] sm:gap-[30px] p-10">
                    <div>
                      <img src="/logo192.png" alt="fff" />
                    </div>
                    <div>
                      <p>Name :- {employeeleavedata.name}</p>
                      <p>Employee ID :- 765765</p>
                      <p>Email :- abcd@gmail.com</p>
                      <p>Leave Type :- {employeeleavedata.leaveType}</p>
                      <p>Days :- {employeeleavedata.days}</p>
                      <p>
                        Description :- {employeeleavedata.descriptionOfLeavve}
                      </p>
                      <p>Apply Date :- {employeeleavedata.createdAt.split("T")[0]}</p>
                      <div className="flex items-center justify-center gap-2 flex-wrap">
                        <button onClick={async (r) => {
                          axios.post("/approvedleave", {  }).then(res => {
                          }).catch(er => {
                            alert('error leave')
                          })
                        }} className="bg-green-500 px-2 py-1 rounded-md  hover:opacity-70 text-[14px]">
                          Approved
                        </button>
                        <button onClick={async (r) => {
                          axios.post("/rejectedleave", { }).then(res => {
                            console.log(res)
                          }).catch(er => {
                            alert('error leave')
                          })
                        }} className="bg-red-500 px-2 py-1 rounded-md  hover:opacity-70 text-[14px]">
                          Rejected
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaves;
