import { FaArrowUp, FaFacebookF } from "react-icons/fa";
import { base_URL } from "../../config/config";


// base_URL
const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        console.log(base_URL)

        console.log('the login page email and password is: ', email, password)
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="">
                    <form onSubmit={handleLogin} className="p-5 mx-auto mt-20 shadow-xl bg-cyan-400 w-96">
                        <h3 className="p-4 text-2xl font-medium text-center text-white uppercase"> Login</h3>
                        <div className="text-center">
                            <input type="email" name="email" className="w-full p-3 placeholder:text-black outline-0" placeholder="Email Address" />
                            <input type="password" className="w-full p-3 my-3 placeholder:text-black outline-0"
                                placeholder="Password" name="Password" id="password" />
                            <div className="relative">
                                <input className="w-3/5 p-2 mb-10 text-white rounded-3xl bg-slate-800 cursor-pointer" type="submit" value="Login" />
                                <div className="absolute flex items-center  justify-center w-16 h-16 text-center border rounded-full -bottom-14 cursor-pointer left-[40%] bg-cyan-400"
                                    id="chevron">
                                    <span className="text-white text-3xl"><FaArrowUp /></span>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </form>
                    <div className="p-5 mx-auto border shadow-xl w-96" id="social-Login">
                        <div className="p-6 text-center">
                            <div className="flex items-center justify-around w-full p-2 px-3 mb-3 bg-[#002e5c] text-white text-lg font-semibold">
                                <span><FaFacebookF /></span>
                                <div>Login With Facebook</div>
                            </div>
                            <div className="flex items-center justify-around w-full p-2 mb-3 text-white bg-blue-700 text-lg font-semibold">
                                <img className="w-7 h-7" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" />
                                <div>Login With Google</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;