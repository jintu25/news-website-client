import { FaTrashAlt } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="bg-white mt-2 px-4 py-6 rounded-md">
            <div className="flex justify-between">
                <h2 className="text-3xl font-semibold font-[system-ui]">News</h2>
                <Link className="btn btn-secondary text-lg" to='/news'>Create News</Link>
            </div>
            <div className="mt-4">
                <select className="mr-2 text-slate-500 border border-slate-500 px-4 py-2 rounded-md text-[16px]">
                    <option className="text-[16px] font-medium" disabled selected>...select type...</option>
                    <option className="text-[16px] font-medium">first one</option>
                    <option className="text-[16px] font-medium">second one</option>
                    <option className="text-[16px] font-medium">third one</option>
                </select>
                <input type="text" placeholder="Search News" className="border px-2 py-2 rounded-md text-slate-400" />            
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

        {/* pagination */}
            <div className="flex justify-end items-center py-5">
                <p className="text-xl font-semibold font-[system-ui]">News Per Page</p>
                <select className="border text-lg font-medium border-slate-400 mx-6 px-2 py-2 rounded-md">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <p className="text-lg">5/22 - of 5</p>
                <div className="flex px-2 mx-4 gap-x-2">
                    <span className="text-lg font-semibold cursor-pointer"><MdArrowBackIos /></span>
                    <span className="text-lg font-semibold cursor-pointer"><MdArrowForwardIos /></span>
                </div>
            </div>
        </div>
    );
};

export default News;