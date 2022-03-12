import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="grid grid-cols-2 bg-black items-center justify-center h-screen pt-10">
      <div>
        <h1 className=" text-white">Collaborate joins people with common goals</h1>
      </div>
      <div className=" flex justify-center items-center">
        <form className="flex flex-col bg-white w-[350px] h-[500px] py-10 justify-center rounded-md">
          <h2 className=" font-medium text-2xl rounded-md px-10">Login</h2>
          <p className=" flex justify-center my-8">
            No account?, <Link to="#"> SignUp</Link>
          </p>
          <div className="flex flex-col px-10">
            <input type="email" name="email"  placeholder="Email" className="mb-5 py-[1px] px-2 rounded-md border-2 outline-none"/>
            <input type="password" name="pass" placeholder="Password" className=" py-[1px] px-2 rounded-md border-2 outline-none"/>
            <button className=" bg-sky-700 rounded-md py-[3px] text-white my-5">Ingresar </button>
          </div>

          <div className="h-[1px] bg-gray-400 my-6"></div>

          <div className="flex flex-col justify-center mx-10 gap-2">
            <div className="w-full border-[1px] border-gray-600 py-[2px] px-[5px] rounded-2xl hover:bg-slate-200">
              <a href="https://backendtzuzulcode.wl.r.appspot.com/auth/google" className="flex justify-center gap-8 items-center">
                <FcGoogle className=" w-5 h-5" />
                <p className=" text-xs font-medium text-gray-500"> LOGIN WITH GOOGLE </p>
                 </a>
            </div>
            <div className="w-full border-[1px] border-gray-600 py-[2px] px-[5px] rounded-2xl hover:bg-slate-200">
              <a  href="https://backendtzuzulcode.wl.r.appspot.com/auth/google" className="flex justify-center gap-8 items-center">
                <BsFacebook className=" w-5 h-5" />
                <p className=" text-xs font-medium text-gray-500"> LOGIN WITH GOOGLE </p>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
