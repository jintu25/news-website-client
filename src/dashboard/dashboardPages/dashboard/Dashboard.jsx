import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className=" mt-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white text-center px-6 py-8 rounded-md">
                    <h2 className="text-3xl font-semibold text-[#111011be]">22</h2>
                    <h4 className="text-lg font-medium text-[#3b3b3b] mt-2">Total News</h4>
                </div>
                <div className="bg-white text-center px-6 py-8 rounded-md">
                    <h2 className="text-3xl font-semibold text-[#111011be]">02</h2>
                    <h4 className="text-lg font-medium text-[#3b3b3b] mt-2">Pending News</h4>
                </div>
                <div className="bg-white text-center px-6 py-8 rounded-md">
                    <h2 className="text-3xl font-semibold text-[#111011be]">22</h2>
                    <h4 className="text-lg font-medium text-[#3b3b3b] mt-2">Active News</h4>
                </div>
                <div className="bg-white text-center px-6 py-8 rounded-md">
                    <h2 className="text-3xl font-semibold text-[#111011be]">22</h2>
                    <h4 className="text-lg font-medium text-[#3b3b3b] mt-2">Deactive News</h4>
                </div>
                <div className="bg-white text-center px-6 py-8 rounded-md">
                    <h2 className="text-3xl font-semibold text-[#111011be]">08</h2>
                    <h4 className="text-lg font-medium text-[#3b3b3b] mt-2">Writers</h4>
                </div>

            </div>

            <div className="p-6 overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Title <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                </svg>
                        </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Image <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                            <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Category <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                            <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Status <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                            <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Date <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                            <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Actions</p>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">React Project</p>
                                </div>
                            </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="John Michael" className="inline-block relative object-cover object-center rounded-lg w-16 h-16"/>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex flex-col">
                            <h3>Travel</h3>
                        </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                        <div className="w-max">
                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                            <span className="">Completed</span>
                            </div>
                        </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">23/04/18</p>
                        </td>
                        <td className="flex gap-2 p-4 border-b border-blue-gray-50">
                            <button className="bg-green-500 px-2 py-2 rounded-full"><span className="text-white text-lg"><MdModeEdit /></span></button>
                            <button className="bg-red-500 px-2 py-2 rounded-full"><span className="text-white text-lg"><FaTrashAlt /></span></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">React Project</p>
                                </div>
                            </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="John Michael" className="inline-block relative object-cover object-center rounded-lg w-16 h-16"/>
                            </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex flex-col">
                            <h3>Travel</h3>
                        </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                        <div className="w-max">
                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                            <span className="">Completed</span>
                            </div>
                        </div>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">23/04/18</p>
                        </td>
                        <td className="flex gap-2 p-4 border-b border-blue-gray-50">
                            <button className="bg-green-500 px-2 py-2 rounded-full"><span className="text-white text-lg"><MdModeEdit /></span></button>
                            <button className="bg-red-500 px-2 py-2 rounded-full"><span className="text-white text-lg"><FaTrashAlt /></span></button>
                        </td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;