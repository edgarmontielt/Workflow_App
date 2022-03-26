import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa"
import { logout } from "../features/user/userSlice";
import { VscSignOut } from "react-icons/vsc"

export default function Navbar() {
  const { logged, name } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signOut = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <nav className={logged ? "py-3  font-semibold shadow-md " : "bg-meadow-600 py-3 text-white font-semibold z-10 shadow-md"}>
      <div className=" max-w-screen-xl  mx-auto flex justify-between items-center">
        <p className="hover:opacity-50 text-xl">
          <Link to="/">Collaborate</Link>
        </p>
        {logged ? (
          <ul className="flex gap-6">
            <li className=" hover:opacity-80 active:scale-95 py-1 px-4 w-26 text-center rounded-md">
              <Link to="/workspaces">Workspaces</Link>
            </li>
            <li className=" hover:opacity-80 active:scale-95 py-1 px-4 w-26 text-center rounded-md">
              <Link to="#">Help</Link>
            </li>
            <li className=" hover:opacity-80 active:scale-95 py-1 px-4 w-26 text-center rounded-md flex items-center gap-2 cursor-pointer" onClick={signOut}>
              <span><VscSignOut className=" w-5 h-5" /></span>
              Sign Out
            </li>
            <li className=" hover:opacity-60 active:scale-95 py-1 px-4 w-26 text-center rounded-md flex items-center gap-2 cursor-pointer">
              <span><FaUserAlt className=" w-4 h-4" /></span>
              <Link to="#">{name}</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-6">
            <li className=" hover:opacity-80 active:scale-95 py-1 px-4 w-26 text-center rounded-md">
              <Link to="/signup">Sign Up</Link>
            </li>
            <Link to="/login">
              <li className=" hover:opacity-80 active:scale-95 bg-dodger-blue-600 py-1 px-4  w-26 text-center rounded-md shadow-md">
                Sign In
              </li>
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
}
