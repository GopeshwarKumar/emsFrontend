// import React, { useContext } from "react";
import EmployeeNavbar from "../Employee/EmployeeNavbar";
import EmployeeHeader from "./EmployeeHeader";
import Loader from "../Pages/Loader";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
// import { auth } from "../Auth/Authprovider";

function EmployeeLeave() {
  // const leaveAuth = useContext(auth)
  const email=localStorage.getItem("employeeEmail")
  const name=localStorage.getItem("employeeName")

  const [loader, setloader] = useState(false);
  const [active, setactive] = useState(false);
  const [searchId, setSearchId] = useState("");

  const [leaveType, setleaveType] = useState();
  const [fromDate, setfromDate] = useState();
  const [ToDate, setToDate] = useState();
  const [days, setdays] = useState();
  const [descriptionOfLeavve, setdescriptionOfLeavve] = useState();

  const [allLeaves, setallLeaves] = useState([])


  const addleavefill = (e) => {
    e.preventDefault();
    setloader(true);

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/addleave`, {email,name,leaveType,fromDate,ToDate,descriptionOfLeavve,days
      }).then(res => {
        
        res.data.message=== 'Leave Added' ? toast.success(res.data.message) : toast.warn(res.data.message)
        if (res.status === 200 && res.data.message=== 'Leave Added') {
          setactive(false)
        }
      }).catch(err => {
        alert('Error found !')
        setloader(false)
      }).finally(final => {
        setloader(false)
        setdays('')
        setToDate('')
        setfromDate('')
        setleaveType('')
        setdescriptionOfLeavve('')
      });
  }

  const addLeave = () => {
    setactive(!active);
  }

  useEffect(()=>{
    axios.post(`${process.env.REACT_APP_SECRET_KEY}/allemployeeleaves`,{email,name}).then(res=>{
      console.log(res)
      setallLeaves(res.data)
      toast.success(res.data.message);
    }).catch(err=>{
      alert('Error found in fetching leave !')
    }).finally(final=>{

    })
  },[])
  const a = "2025-12-20T00:00:00.000Z";
const dateOnly = a.split("T")[0]
console.log(dateOnly); // Output: "2025-12-20"

  return (
    <>
    <ToastContainer/>
      {/* dashboard */}
      <EmployeeHeader/>
      <div className="w-screen h-[94vh] flex">
        <EmployeeNavbar />
        <div className="lg:w-[88%] w-[75%] bg-slate-900">

            <h2 className="text-center p-4 rounded-lg shadow-xl hover:shadow-slate-800 transition-all">Manage Leaves</h2>
            <div className="w-full flex items-center justify-between px-5 py-3">
              <div>
                <input type="number" placeholder="Search By Id"  className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 text-[15px] vmd:py-[5px] py-[10px] px-[10px] text-white hover:opacity-75 transition-all focus:bg-slate-600" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
              </div>
              <div className="flex flex-wrap items-center justify-center cursor-pointer px-3 py-1 rounded-md text-center text-[15px]">
                <button
                  onClick={addLeave}
                  className="bg-green-500 py-1 px-2 rounded-md  hover:opacity-70"
                >
                  {active === true ? "Hide" : "Add Leave"}
                </button>
              </div>
            </div>
          <div className="hidescroller w-full min-h-[50vh] overflow-x-scroll p-5">
            {active === true ? (
              <form
                onSubmit={addleavefill}
                className="lg:w-1/4 mb:w-[70%] vmd:w-[90%] mx-auto flex flex-col items-center justify-center gap-x-2 gap-y-2 px-[5vw] py-[2vh] shadow-slate-950 shadow-2xl bg-slate-900 rounded-md"
              >
                <h4 className="text-green-500 font-bold">Take Leave <mark>!</mark></h4>
                <div className="flex flex-col gap-2">
                  <lavel className="text-[14px]">Leave Type</lavel>
                  <input
                    value={leaveType}
                    onChange={(e) => {
                      setleaveType(e.target.value);
                    }}
                    placeholder="LeaveType"
                    className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <lavel className="text-[14px]">From Date</lavel>
                  <input type="date"
                    value={fromDate}
                    onChange={(e) => {
                      setfromDate(e.target.value);
                    }}
                    placeholder="From Date"
                    className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <lavel className="text-[14px]">To Date</lavel>
                  <input type="date"
                    value={ToDate}
                    onChange={(e) => {
                      setToDate(e.target.value);
                    }}
                    placeholder="To Date"
                    className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <lavel className="text-[14px]">No. Of Days</lavel>
                  <input type="number"
                    value={days}
                    onChange={(e) => {
                      setdays(e.target.value);
                    }}
                    placeholder="Leave Days"
                    className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <lavel className="text-[14px]">Description</lavel>
                  <input
                    value={descriptionOfLeavve}
                    onChange={(e) => {
                      setdescriptionOfLeavve(e.target.value);
                    }}
                    type="textarea"
                    placeholder="Description"
                    className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  "
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  {loader === true ? (
                    <Loader></Loader>
                  ) : (
                    <button type="submit" className="sm:text-[15px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all "
                    > Add Leave</button>
                  )}
                </div>
              </form>
            ) : (
              <table className="w-full">
                <tr className={`overflow-x-scroll text-[15px] text-nowrap`}>
                  <th className="bg-blue-500 rounded-md  hover:opacity-70 px-3">SI No.</th>
                  <th className="bg-yellow-300 rounded-md  hover:opacity-70 px-2">	Leave Type	</th>
                  <th className="bg-red-500 rounded-md  hover:opacity-70">From</th>
                  <th className="bg-emerald-500 rounded-md  hover:opacity-70">To</th>
                  <th className="bg-rose-600 rounded-md  hover:opacity-70 px-2">Description</th>
                  <th className="bg-purple-600 rounded-md  hover:opacity-70">Applied </th>
                  <th className="bg-red-600 rounded-md  hover:opacity-70 px-2">Day</th>
                  <th className="bg-green-500 rounded-md  hover:opacity-70 px-2">Status</th>
                </tr>
                {allLeaves.filter((e) => {
    // If searchId is empty, show all
    if (!searchId) return true;

    // Parse and compare
    return e.id === parseInt(searchId);
  }).map((e,x)=>{
                  return <tr key={x} className={`hover:bg-slate-950 h-[50px]`}>
                  <th className="text-nowrap px-4">{x+1}</th>
                  <th className="text-nowrap px-4">{e.leaveType}</th>
                  <th className="text-nowrap px-4">{e.fromDate.split("T")[0]}</th>
                  <th className="text-nowrap px-4">{e.ToDate.split("T")[0]}</th>
                  <th className="text-nowrap px-4">{e.descriptionOfLeavve}</th>
                  <th className="text-nowrap">{e.createdAt.split("T")[0]}</th>
                  <th className="text-nowrap px-4">{e.days}</th>
                  <th className={`${e.status === 'approved' ? 'text-green-600' :'text-red-600'} text-nowrap px-4`}>{e.status}</th>
                </tr>
                })}
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeLeave;
