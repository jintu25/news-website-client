import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Signup = () => {
    return (
        <div className="container flex h-screen mx-auto">
            <form action="" className="max-w-sm m-auto shadow-md ">
                <h3 className="bg-[#6293CB] text-white font-semibold text-2xl p-2 text-center">Sign Up</h3>
                <div className="bg-[#D8EAFD] flex items-start justify-center p-4 gap-3">
                    <div className="w-8 h-8 bg-[#6293CB] flex rounded-full justify-center items-center">
                        <span className="text-white"><FaGoogle /></span>
                    </div>
                    <div className="w-8 h-8 bg-[#6293CB] flex rounded-full justify-center items-center">
                        <span className="text-white"><FaFacebookF /></span>
                    </div>
                    <div className="w-8 h-8 bg-[#6293CB] flex rounded-full justify-center items-center">
                        <span className="text-white"><FaLinkedinIn/></span>
                    </div>
                </div>

                <div className="p-8">
                    <label htmlFor="firstName" className="">First Name</label>
                    <input
                        className="w-full px-3 py-2 mt-2 mb-3 leading-tight text-gray-700 border rounded focus:border-sky-500 focus:outline-none "
                        id="firstName" type="text" placeholder="First Name" />

                        <label htmlFor="lastName" className="">Last Name</label>
                    <input
                        className="w-full px-3 py-2 mt-2 mb-3 leading-tight text-gray-700 border rounded focus:border-sky-500 focus:outline-none "
                        id="lastName" type="text" placeholder="Last Name" />

                        <label htmlFor="email" className="">Email</label>
                    <input
                        className="w-full px-3 py-2 mt-2 mb-3 leading-tight text-gray-700 border rounded focus:border-sky-500 focus:outline-none "
                        id="email" type="text" placeholder="Email" />

                    <label htmlFor="password"></label>
                    <label className="block mb-2 text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded focus:border-sky-500 focus:outline-none "
                        id="password" type="password" placeholder="******" />
                    <div>
                        <button
                            className="hover:bg-[#6391cd] text-blue-500 border border-blue-500 text-xl hover:text-white p-2 w-full rounded-lg">Sign Up</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Signup;