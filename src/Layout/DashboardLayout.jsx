// import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
// import SideBar from "./SideBar";
import { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaPlus, FaRegNewspaper, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import DashboardHeader from "../dashboard/dashboardHeader/DashboardHeader";

const DashboardLayout = () => {
    const [admin] = useState(false)
     const {pathname} = useLocation()

    return (
    <div className="bg-slate-200">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-5 px-2 md:py-4 md:px-4 ">
          {/* Page content here */}
          <div className="bg-white py-2 px-3 mb-4">
            <DashboardHeader/>
          </div>
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Dashboard
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-8 w-80 border-r-2 border-b-slate-600 h-full bg-[#ffffffec]">

            {admin ? (
              <>
                {/* admin ra ja ja dekbe  */}   
                  <Link
                    to="/dashboard/dashboard"
                    className={`${pathname === '/dashboard/dashboard' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'>  
                        <BiSolidDashboard />  
                    </span>{" "}
                    Dashboard
                  </Link>              
                  <Link
                    to="/dashboard/news"
                    className={`${pathname === '/dashboard/news' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'>   
                        <FaRegNewspaper /> 
                    </span>{" "}
                    News
                  </Link>               
                  <Link
                    to="/dashboard/addwriter"
                    className={`${pathname === '/dashboard/addwriter' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'>
                        <FaPlus />    
                    </span>{" "}
                    Add Writers
                  </Link>               
                  <Link
                    to="/dashboard/writers"
                    className={`${pathname === '/dashboard/writers' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'>  
                        <FaUsers />  
                    </span>{" "}
                    Writers
                  </Link>              
                  <Link
                    to="/dashboard/admin"
                    className={`${pathname === '/dashboard/admin' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'> 
                        <CgProfile />   
                    </span>{" "}
                    profile
                  </Link>                
                  <Link
                    to="/dashboard/logout"
                    className={`${pathname === '/dashboard/logout' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'> 
                        <MdLogout />   
                    </span>{" "}
                    Logout
                  </Link>               
              </>
            ) : (
              <>
                {/* sadaron user der jonno je sob menu gulo dekabe  */}
                <Link
                    to="/dashboard/dashboard"
                    className={`${pathname === '/dashboard/dashboard' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'>  
                        <BiSolidDashboard />  
                    </span>{" "}
                    Dashboard
                  </Link>              
                  <Link
                    to="/dashboard/news"
                    className={`${pathname === '/dashboard/news' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'>   
                        <FaRegNewspaper /> 
                    </span>{" "}
                    News
                  </Link>                             
                  <Link
                    to="/dashboard/addnews"
                    className={`${pathname === '/dashboard/addnews' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'>  
                        <FaUsers />  
                    </span>{" "}
                    Add News
                  </Link>              
                  <Link
                    to="/dashboard/admin"
                    className={`${pathname === '/dashboard/admin' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'> 
                        <CgProfile />   
                    </span>{" "}
                    profile
                  </Link>                
                  <Link
                    to="/dashboard/logout"
                    className={`${pathname === '/dashboard/logout' ? 
                    'bg-indigo-500 text-white' : 'bg-white text-[#2c2c2cf7]'} 
                    text-lg font-semibold flex text-[#2c2c2cf7] hover:text-white
                     hover:bg-indigo-500 mb-2 px-3 py-2 rounded-lg duration-300 items-center`}
                  >
                    <span className='mr-2'> 
                        <MdLogout />   
                    </span>{" "}
                    Logout
                  </Link> 
              </>
            )}
          </ul>  
        </div>
      </div>
    </div>
    );
};

export default DashboardLayout;