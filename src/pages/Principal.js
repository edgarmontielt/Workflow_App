import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Principal() {
  return (
    <>
      <main>
        <section className=" w-1/5 py-16 shadow-lg text-stone-600 font-medium h-[100vh] top-10 left-0 fixed">
          <SideBar />
        </section>
        <section className="p-10">
          <Outlet />
        </section>
      </main>
    </>
  );
}
