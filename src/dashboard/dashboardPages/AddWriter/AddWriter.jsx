import { Link } from "react-router-dom";

const AddWriter = () => {
    return (
        <div className="bg-white mt-2 px-4 py-6 rounded-md">
            <div className="flex justify-between mb-4">
                <h2 className="text-3xl font-semibold font-[system-ui]">Add Writers</h2>
                <Link className="btn btn-secondary text-lg" to='/news'>Writers</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                    <p className="label-text mb-2 text-[17px] font-medium">Name</p>
                    <input className="border w-full rounded-md border-slate-400 p-2" type="text" name="name" id="" placeholder="Name" />
                </div>
                <div className="w-full">
                    <p className="label-text mb-2 text-[17px] font-medium">Category</p>
                    <select className="mr-2 text-slate-500 border border-slate-500 px-4 py-2 rounded-md text-[16px] w-full">
                        <option className="text-[16px] font-medium" disabled selected>...select type...</option>
                        <option className="text-[16px] font-medium">first one</option>
                        <option className="text-[16px] font-medium">second one</option>
                        <option className="text-[16px] font-medium">third one</option>
                    </select>
                </div>
                <div className="w-full">
                    <p className="label-text mb-2 text-[17px] font-medium">Email</p>
                    <input className="border w-full rounded-md border-slate-400 p-2" type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="w-full">
                    <p className="label-text mb-2 text-[17px] font-medium">Password</p>
                    <input className="border w-full rounded-md border-slate-400 p-2" type="password" name="password" id="password" placeholder="Password" />
                </div>
                <div className="">
                    <button className="bg-[#ff3737] px-4 py-2 rounded-md text-white font-medium text-lg mt-3">Add Writer</button>
                </div>
            </div>
        </div>
    );
};

export default AddWriter;