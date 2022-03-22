import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <nav>
            <ul>
                <Link to={"/dashboard"}> <li className=" hover:bg-dodger-blue-100 p-2 rounded-sm">Dashboard</li> </Link>
                <Link to={"/workspaces"}><li className=" hover:bg-dodger-blue-100 p-2 rounded-sm">Worksapces</li></Link>
            </ul>
        </nav>
    )
}
