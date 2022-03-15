import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { logged } = useSelector((state) => state.user);

  console.log(logged);

  return (
    <nav className="bg-meadow-600 py-3 text-white font-semibold absolute w-screen ">
      <div className=" max-w-screen-xl  mx-auto flex justify-between items-center">
        <p className="hover:opacity-50 text-lg">
          <Link to="/">Collaborate</Link>
        </p>
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
      </div>
    </nav>
  );
}
