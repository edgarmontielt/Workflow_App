import { useState } from "react";
import Modal from "../components/workspaces/Modal";
import Teams from "../components/workspaces/Teams";

export default function WorkSpaces() {

  const [teams, setTeams] = useState([])
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <section className=" w-[80%] ml-[20%]">
      <div className=" text-2xl font-medium text-stone-700 flex">
        <h2>Workspaces</h2>
        <div className="ml-auto">
          <form action="" className="">
            <input type="text" placeholder="Search" className=" bg-gray-200 text-sm outline-none w-72 py-1 px-2 rounded-md" />
          </form>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-10">
        <Teams teams={teams} setTeams={setTeams} />
        <div className=" bg-meadow-50 w-72 h-[160px] rounded-md hover:bg-meadow-100 cursor-pointer flex justify-center items-center p-3" onClick={() => { setModalOpened(!modalOpened) }}>
          <p className=" text-base font-medium text-gray-700 hover:text-gray-600">New Team</p>
        </div>
        {modalOpened && <Modal setModalOpened={setModalOpened} teams={teams} setTeams={setTeams} />}
      </div>
    </section>
  )
}
