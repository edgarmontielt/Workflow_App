import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Principal() {
  return (
    <>
      <main className="flex flex-row justify-center ">
        <SideBar />
        <section className="w-full p-10">
            <Outlet />
        </section>
      </main>
    </>
  );
}
