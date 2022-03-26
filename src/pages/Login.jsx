import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../features/user/userSlice";

export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.logged) {
      navigate("/dashboard");
    }
  }, [user]);

  console.log(user.logged);

  const signIn = (event) => {
    event.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = event.target;
    dispatch(login({email, password}));
  };

  return (
    <div className="grid grid-cols-2 items-center justify-center h-screen pt-1 bg-image">
      <div className="ml-20 mb-64 flex justify-center">
        <h1 className=" text-white font-semibold text-2xl">
          Collaborate joins people with common goals
        </h1>
      </div>
      <main className=" flex justify-center items-center">
        <form
          className="flex flex-col bg-gray-200 w-[400px] h-[500px] py-10 justify-center rounded-md mt-6"
          onSubmit={signIn}
        >
          <h2 className=" font-medium text-2xl rounded-md px-10">Login</h2>
          <p className=" flex justify-center my-8">
            No account?{" "}
            <Link
              to="/signup"
              className="text-green-600 font-medium hover:opacity-90"
            >
              , SignUp
            </Link>
          </p>
          {user.loading&&<p>Loading...</p>}
          <div className="flex flex-col px-10">
            <InputForm type={"email"} name={"email"} placeholder="Email" />
            <InputForm
              type={"password"}
              name={"password"}
              placeholder={"Password"}
            />
            <button className=" bg-dodger-blue-600 rounded-md py-[3px] text-white my-5 font-medium active:scale-90">
              Sign In{" "}
            </button>
          </div>

          <div className="h-[1px] bg-gray-400 my-6"></div>

          <div className="flex flex-col justify-center mx-10 gap-2">
            <div className="w-full border-[1px] border-gray-600 py-[2px] px-[5px] rounded-2xl hover:bg-dodger-blue-300">
              <a
                href="https://backendtzuzulcode.wl.r.appspot.com/auth/google"
                className="flex justify-center gap-8 items-center"
              >
                <FcGoogle className=" w-5 h-5" />
                <p className=" text-xs font-medium text-gray-500">
                  {" "}
                  LOGIN WITH GOOGLE{" "}
                </p>
              </a>
            </div>
            <div className="w-full border-[1px] border-gray-600 py-[2px] px-[5px] rounded-2xl hover:bg-dodger-blue-300">
              <a
                href="https://backendtzuzulcode.wl.r.appspot.com/auth/google"
                className="flex justify-center gap-8 items-center"
              >
                <BsFacebook className=" w-5 h-5" />
                <p className=" text-xs font-medium text-gray-500">
                  {" "}
                  LOGIN WITH GOOGLE{" "}
                </p>
              </a>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
