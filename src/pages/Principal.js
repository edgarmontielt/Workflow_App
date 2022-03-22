import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Principal() {
  return (
    <>
      <main className="flex flex-row justify-center">
        <section className=" w-1/4 pl-10 py-10 h-screen shadow-lg text-stone-600 font-medium ">
          <SideBar />
        </section>
        <section className="w-full p-10">
          <div>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}
