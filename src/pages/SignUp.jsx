import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../features/user/userSlice";
import { useEffect } from "react";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)

  const signUp = (event) => {
    event.preventDefault();

    const {
      name: { value: name },
      birthday: { value: birthday },
      city: { value: city },
      email: { value: email },
      password: { value: password },
    } = event.target;

    dispatch(signup({ name, birthday, city, email, password }));
  };

  useEffect(() => {
    if (user.logged) {
      navigate("/dashboard")
    }
  }, [user])

  return (
    <div className="grid grid-cols-2 items-center justify-center h-screen pt-2 bg-image">
      <main className=" flex justify-center">
        <form
          className="flex flex-col bg-gray-200 w-[450px] h-[650px] py-12 justify-center rounded-md mt-1"
          onSubmit={signUp}
        >
          <h2 className=" font-medium text-2xl rounded-md px-10">Sign Up</h2>
          <p className=" flex justify-center my-8">
            Back to{" "}
            <Link
              to="/login"
              className=" text-green-600 font-medium hover:opacity-90"
            >
              : Login
            </Link>
          </p>
          <div className="flex flex-col px-10">
            <InputForm type={"text"} name={"name"} placeholder={"Name"} />
            <InputForm
              type={"date"}
              name={"birthday"}
              placeholder={"Birthday"}
            />
            <InputForm type={"text"} name={"city"} placeholder={"City"} />
            <InputForm type={"email"} name={"email"} placeholder={"Email"} />
            <InputForm
              type={"password"}
              name={"password"}
              placeholder={"Password"}
            />
            <InputForm
              type={"password"}
              name={"passwordRepeat"}
              placeholder={"Password Repeat"}
            />
            <button className=" bg-dodger-blue-600 rounded-md py-[3px] text-white my-5 font-medium">
              Register{" "}
            </button>
          </div>

          <div className="h-[1px] bg-gray-400 my-4"></div>

          <div className="flex flex-col justify-center mx-10 gap-2">
            <div className="w-full border-[1px] border-gray-600 py-[2px] px-[5px] rounded-2xl hover:bg-dodger-blue-300">
              <a
                href="https://backendtzuzulcode.wl.r.appspot.com/auth/google"
                className="flex justify-center gap-8 items-center"
              >
                <FcGoogle className=" w-5 h-5" />
                <p className=" text-xs font-medium text-gray-500">
                  {" "}
                  CONTINUE WITH GOOGLE{" "}
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
                  CONTINUE WITH FACEBOOK{" "}
                </p>
              </a>
            </div>
          </div>
        </form>
      </main>

      <div className="mr-20 mb-64 flex justify-center">
        <h1 className=" text-white font-semibold text-2xl">
          Collaborate joins people with common goals
        </h1>
      </div>
    </div>
  );
}
