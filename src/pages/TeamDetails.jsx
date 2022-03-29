import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get, post } from "../api";
import InputForm from "../components/InputForm";
import { IoMdClose } from "react-icons/io"

export default function TeamDetails() {
  const [modalOpened, setModalOpened] = useState(false);

  const [team, setTeam] = useState();
  const { idTeam } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    get("/teams/" + idTeam)
      .then((res) => {
        setTeam(res.data);
      })
      .catch((error) => console.log(error));
  }, [idTeam]);

  const addList = (event) => {
    // post("/teams/" + idTeam + "/addList").then((res) =>
    //   setList([...list, res.data])
    // );
    const { name,description, } = event.target
    const newList = {
      name:name.value,
      description:description.value
  }
  setList([...list,newList])
  setModalOpened(false)
  };

  return (
    <div className=" max-w-screen-xl mx-auto mt-20">
      <h2 className=" text-xl font-medium ">{team ? team.name : "No hay"}</h2>
      {team ? <></> : "No hay nada"}

      <section className="w-full flex gap-10 h-[85vh]">
        <div className=" w-72 h-80 rounded-lg bg-gray-100 mt-10 shadow-md">
          <div className=" w-72 h-16 bg-purple-400 rounded-t-lg flex items-center pl-6">
            <p className=" text-white font-medium text-lg">Doing</p>
          </div>
        </div>
        <div className=" w-72 h-80 rounded-lg bg-gray-100 mt-10 shadow-md">
          <div className=" w-72 h-16 bg-dodger-blue-400 rounded-t-lg flex items-center pl-6">
            <p className=" text-white font-medium text-lg">Doing</p>
          </div>
        </div>
        <div className=" w-72 h-80 rounded-lg bg-gray-100 mt-10 shadow-md">
          <div className=" w-72 h-16 bg-meadow-400 rounded-t-lg flex items-center pl-6">
            <p className=" text-white font-medium text-lg">Doing</p>
          </div>
        </div>
        {modalOpened ? (
          <div className="w-72 h-80 rounded-lg bg-gray-200 mt-10 shadow-md p-5 flex flex-col items-center">
            <span className=" ml-auto cursor-pointer p-2 rounded-full hover:bg-gray-300" onClick={() => { setModalOpened(false) }}><IoMdClose className=" w-6 h-6 hover:opacity-60" /></span>
            <h2 className="text-lg font-medium mb-6">New list</h2>
            <form onSubmit={addList}>
              <InputForm type={"text"} name={"name"} placeholder={"List name"}/>
              <InputForm type={"text"} name={"description"} placeholder={"Description"}/>
            </form>

          </div>
        ) : (
          <div className="w-72 h-16 rounded-lg bg-gray-200 mt-10 shadow-md">
            <div
              className="bg-white m-3 rounded-md p-2 text-center hover:bg-gray-100 cursor-pointer"
              onClick={() => setModalOpened(true)}
            >
              Add new list
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
