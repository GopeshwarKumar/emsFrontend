import React from "react";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";
import Loader from "../Pages/Loader";
import axios from "axios";
import { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { toast, ToastContainer } from "react-toastify";

function Departments() {
  
  const [active, setactive] = useState(false);
  const [editFormactive, seteditFormactive] = useState(false);
  const [loader, setloader] = useState(false);

  const [departmentName, setdepartmentName] = useState();
  const [departmentDescription, setdepartmentDescription] = useState();
  const [editdepartmentName, seteditdepartmentName] = useState();
  const [editdepartmentDescription, seteditdepartmentDescription] = useState();
  const [editdepartmentId, seteditdepartmentId] = useState();
  const [popUpMessage, setpopUpMessage] = useState();

const [department, setdepartment] = useState([]);

// pagination
  // const [itemPerPage, setitemPerPage] = useState(7)
  // const [currentIndex, setcurrentIndex] = useState(0)
  // const [lastIndex, setlastIndex] = useState(6)
  // const pages = [];

  // for(let i=0; i<Math.ceil(department.length/itemPerPage); i++){
  // pages.push(i);
  // }

  // const currentItems = department.slice(currentIndex, lastIndex);

  //   const NextPage=()=>{
  //   if(lastIndex < department.length){
  //   setcurrentIndex(lastIndex)
  //   setlastIndex(lastIndex+itemPerPage)
  //   }
  // }
  // const PrevPage=()=>{
  //   if(currentIndex < 0){
  //     setcurrentIndex(0)
  //     setlastIndex(itemPerPage)
  //   }
  //   setcurrentIndex(currentIndex-itemPerPage)
  //   setlastIndex(currentIndex)
  // }


  const addNewEmployee = () => {
    setactive(!active);
  }

  const addNewDepartment = async (e) => {
    e.preventDefault();
    setloader(true);

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/addnewdepartment`, {
        departmentName,
        departmentDescription,
      }).then((ress) => {
        ress.data.message === "Department Added"
          ? toast.success(ress.data.message)
          : toast.warn(ress.data.message);

        if (ress.status === 200 && ress.data.message === "Department Added") {
          setpopUpMessage(ress.data.message);
        }
      }).catch((err) => {
        alert("Error found !");
      }).finally((final) => {
        setloader(false);
        setactive(false);
        setdepartmentName("");
        setdepartmentDescription("");
      });
  };

  const EditDepartment = async (e) => {
    e.preventDefault();
    setloader(true);

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/editdepartment`, {
        editdepartmentName,editdepartmentId,editdepartmentDescription,
      }).then((res) => {
        if (res.status === 200 && res.data.message === "Updated"){
          res.data.message === "Updated"
            ? toast.success(res.data.message)
            : toast.warn(res.data.message);
        }
      }).catch((err) => {
        alert("error");
      }).finally((final) => {
        setloader(false)
        seteditFormactive(false)
        // setdepartmentName('')
        // setdepartmentDescription('')
      });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SECRET_KEY}/getAlldepartments`).then((res) => {
        setdepartment(res.data);
        // console.log(res)
      }).catch((er) => {
        alert("Error found in fetching Department !");
      });
  }, [loader]);

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
      <ToastContainer className={`text-[15px]`} />
      {/* dashboard */}
      <AdminHeader />
      <div className="w-screen h-[94vh] flex">
        <AdminNavbar />
        <div className="lg:w-[88%] w-[75%] bg-slate-900">
          <div className="">
            <h2 className="text-center font-bold rounded-lg p-5 shadow-xl hover:shadow-slate-800 transition-all">Departments</h2>

            <div className="w-full flex items-center justify-between px-5 py-3 mt-[3%]">
              <div>
                <input value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)} required
                  placeholder="Search by name"
                  className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 text-[15px] vmd:py-[5px] py-[10px] px-[10px] text-white placeholder:text-white hover:placeholder:tracking-wide placeholder:transition-all placeholder:duration-200 hover:opacity-75 transition-all duration-200 focus:bg-slate-600  "
                />
              </div>
              <div onClick={addNewEmployee}
                className={`${active === false ? "bg-green-600": "bg-red-600"} cursor-pointer shadow-md hover:shadow-blue-600 px-3 py-1 rounded-md text-center text-[15px] hover:opacity-70 text-white`}
              >
                {active === true ? "Hide" : "Add Department"}
                
              </div>
            </div>

            {active ===true ? <form onSubmit={addNewDepartment}
              className={`flex flex-col items-center justify-center gap-x-2 gap-y-2 absolute left-1/2 top-1/3 bg-gradient-to-br from-slate-900 to-cyan-900 shadow-inner shadow-emerald-500 rounded-md p-5`}>
              <div className="flex flex-col gap-2">
                <lavel className="text-[14px]">Department Name</lavel>
                <input
                  required
                  value={departmentName}
                  onChange={(e) => {
                    setdepartmentName(e.target.value.toLowerCase());
                  }}
                  placeholder="Enter Name"
                  className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  "
                />
              </div>
              <div className="flex flex-col gap-2">
                <lavel className="text-[14px]">Description</lavel>
                <input
                  required
                  value={departmentDescription}
                  onChange={(e) => {
                    setdepartmentDescription(e.target.value);
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
                  <button
                    type="submit"
                    className="sm:text-[15px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all "
                  >
                    Add
                  </button>
                )}
              </div>
              <p className="text-green-400 text-[14px] font-bold">
                {popUpMessage}
              </p>
            </form> :
            <div className="hidescroller h-[70vh] overflow-x-scroll px-5">
              <table className="w-full overflow-x-scroll">
                <tr className="sticky top-0 bg-slate-800 shadow-2xl h-[40px]">
                  <th className="hover:tracking-wide transition-all">SI No.</th>
                  <th className="hover:tracking-wide transition-all">Department</th>
                  <th className="hover:tracking-wide transition-all">Action</th>
                </tr>
                {department.filter((dep) =>dep.departmentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                dep.status.toLowerCase().includes(searchTerm.toLowerCase())
                
              ).map((x, y) => {
      return (
      <tr key={y} className={`hover:bg-slate-700 rounded-md h-[50px]`}>
        <th className="px-4">{y + 1}</th>
        <th title={x.departmentName} className="px-4 hover:tracking-wide transition-all first-letter:uppercase">
          {x.departmentName}
        </th>
        <th className="px-4">
          <button title="Edit" onClick={() => {
              seteditFormactive(true);
              seteditdepartmentId(x._id)
              seteditdepartmentName(x.departmentName);
              seteditdepartmentDescription(x.departmentDescription);
            }} className="bg-green-500 px-4 py-1 text-[14px] rounded-sm -translate-x-1">Edit</button>
          <button title="Delete" onClick={() => {
              axios.post(`${process.env.REACT_APP_SECRET_KEY}/deletedepartment`,
                  { x }).then((res) => {
                  res.data.message === "Department Deleted"
                    ? toast.success(res.data.message)
                    : toast.warn(res.data.message);
                }).catch((err) => {
                  alert("Error found!");
                });
            }}
            className="bg-red-500 px-4 text-[14px] py-1 rounded-sm"
          >
            Delete
          </button>
        </th>
      </tr>
    );
  })}
  </table>
            {/* <div className='flex items-center justify-center'>
          <button onClick={PrevPage} title="prev" className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>Prev</button>
        {pages.map((e,x)=>{
          return <button title={x} k
          ey={x} onClick={(r)=>{
            setcurrentIndex(itemPerPage*e)
            setlastIndex(itemPerPage*(e+1))
            // console.log(currentIndex,lastIndex)
          }} className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>{e+1}</button>
        })}
        <button onClick={NextPage} title="next" className='px-4 bg-yellow-300 py-1 m-1 rounded-md'>Next</button>
        </div> */}
            </div>}
          </div>
        </div>
      </div>

      {editFormactive && (
        <div className={`absolute left-1/4 top-[15%] bg-gradient-to-br from-slate-900 to-cyan-900 shadow-inner shadow-emerald-500 rounded-md p-5`}>
          <button onClick={() => {
              seteditFormactive(false);
            }}
            className="float-right bg-red-600 rounded-md px-2 hover:bg-blue-600 transition-all duration-1000">
            Hide
          </button>
          <br />
          <div className="w-full bg-gradient-to-tr from-indigo-700 via-sky-700 flex flex-col items-center justify-center border-2 border-double border-teal-400 rounded-md my-2">
            <h3>Edit Employee</h3>
            <form
              onSubmit={EditDepartment}
              className="grid sm:grid-cols-2 mb:grid-cols-1 vmd:grid-cols-1 gap-x-2 gap-y-2 place-content-center content-center p-5"
            >
              <div className="flex flex-col gap-2">
                <lavel className="text-[14px]">Department Name</lavel>
                <input
                  value={editdepartmentName}
                  onChange={(e) => {
                    seteditdepartmentName(e.target.value);
                  }}
                  placeholder="Enter your Name"
                  className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  "
                />
              </div>
              <div className="flex flex-col gap-2">
                <lavel className="text-[14px]">Department Description</lavel>
                <input
                  value={editdepartmentDescription}
                  onChange={(e) => {
                    seteditdepartmentDescription(e.target.value);
                  }}
                  placeholder="Enter your Email"
                  className="lg:w-[15vw] md:w-[25vw] sm:w-[30vw] mb:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-blue-800 bg-sky-700 vmd:text-[12px] vmd:py-[5px] py-[10px] px-[10px] text-white text-xl hover:opacity-75 transition-all focus:bg-slate-600  "
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                {loader === true ? (
                  <Loader></Loader>
                ) : (
                  <button
                    type="submit"
                    className="sm:text-[15px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-white hover:text-white hover:bg-green-500 text-green-500 duration-200 transition-all "
                  >
                    Edit Depart
                  </button>
                )}
                <p className={`text-green-400 font-bold`}>
                  {popUpMessage}
                  <p>
                    {popUpMessage === "Wrong Password" ? (
                      <p className="text-red-600">{popUpMessage}</p>
                    ) : (
                      <p className="text-green-500">{popUpMessage}</p>
                    )}
                  </p>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Departments;
