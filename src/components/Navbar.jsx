import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" bg-meadow-600 py-3 text-white font-semibold absolute w-screen">
      <div className=" max-w-screen-xl flex justify-between mx-20">
        <p className=" hover:opacity-50">
          <Link to="/">Inicio</Link>
        </p>
        <ul className="flex">
          <li className=" hover:opacity-50">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
