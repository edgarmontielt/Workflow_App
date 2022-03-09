import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  return (
      <div className="w-screen h-screen flex justify-end items-center">
        <form className="flex flex-col p-10  rounded-md w-1/3">
          <h2 className=" font-semibold text-2xl pb-10 rounded-md">
            Login
          </h2>
          <input type="email" name="email" placeholder="Email" className="mb-5 py-2 px-5 rounded-md border-2" />
          <input type="password" name="pass" placeholder="Password" className="mb-5 py-2 px-5 rounded-md border-2"/>
          <button className=" bg-sky-700 rounded-md py-2 text-white ">Ingresar</button>

          <div className="flex flex-row">
            <a href="https://backendtzuzulcode.wl.r.appspot.com/auth/google">
              <span>
                <FcGoogle />
              </span>
            </a>
            <ImFacebook2 />
            <FaGithub />
          </div>
        </form>
      </div>
  );
}
