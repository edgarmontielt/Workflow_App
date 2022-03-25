import { Link } from "react-router-dom";
import {MdOutlineSpaceDashboard, MdWorkspacesFilled} from "react-icons/md"

export default function SideBar() {
    return (
        <section className=" w-1/4 pl-10 py-10 h-screen shadow-lg text-stone-600 font-medium">
            <nav>
                <ul>
                    <Link to={"/dashboard"}><li className=" flex items-center gap-2 hover:bg-dodger-blue-50 p-2 rounded-sm"><MdOutlineSpaceDashboard />Dashboard</li> </Link>
                    <Link to={"/workspaces"}><li className=" flex items-center gap-2 hover:bg-dodger-blue-50 p-2 rounded-sm"><MdWorkspacesFilled/>Worksapces</li></Link>
                </ul>
            </nav>
      </section>
    )
}
