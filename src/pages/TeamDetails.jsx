import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get, post } from "../api";
import InputForm from "../components/InputForm";
import { IoMdClose } from "react-icons/io"
import { RiAddLine } from "react-icons/ri"
import List from "../components/lists/List";


export default function TeamDetails() {
  const [modalOpened, setModalOpened] = useState(false);
  const [team, setTeam] = useState([]);
  const { idTeam } = useParams();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    get("/teams/"+ idTeam)
      .then((res) => {
        setLists(res.data.lists);
      })
      .catch((error) => console.log(error));
  }, [idTeam]);

  const addList = (event) => {
    event.preventDefault()
    const { nameList, descriptionList, } = event.target
    const newList = {
      name: nameList.value,
      description: descriptionList.value
    }

    post("/teams/" + idTeam + "/addList", newList).then((res) =>
      setLists([...lists, res.data])
    );
    setModalOpened(false)
  };

  return (
    <>
    {console.log(lists)}
      <div className=" max-w-screen-xl mx-auto mt-20 overflow-x-scroll">
        <h2 className=" text-xl font-medium ">{team ? team.name : "No hay"}</h2>
        {team ? <></> : "No hay nada"}
        <section className="w-full flex gap-8 h-[85vh] flex-wrap">
          <List name={"Doing"} color={"purple"} />
          <List name={"To Do"} color={"dodger-blue"} />
          <List name={"Done"} color={"meadow"} />
          {lists  ? lists.map(list => <List name={list.name} color={"gray"} />)  : <></>}
          {modalOpened ? (
            <div className="w-72 h-80 rounded-lg bg-gray-200 mt-10 shadow-md p-5 flex flex-col items-center">
              <span className=" ml-auto cursor-pointer p-2 rounded-full hover:bg-gray-300" onClick={() => { setModalOpened(false) }}><IoMdClose className=" w-6 h-6 hover:opacity-60" /></span>
              <h2 className="text-lg font-medium mb-6">New list</h2>
              <form onSubmit={addList} className="flex flex-col justify-center" >
                <InputForm type={"text"} name={"nameList"} placeholder={"List name"} />
                <InputForm type={"text"} name={"descriptionList"} placeholder={"Description"} />
                <button className=" bg-dodger-blue-700 p-1 rounded-md font-medium text-white" type="submit">Done</button>
              </form>

            </div>
          ) : (
            <div className="w-72 h-12 rounded-lg bg-gray-200 mt-10 shadow- flex items-center justify-center hover:scale-[0.99] hover:bg-gray-100 cursor-pointer" onClick={() => setModalOpened(true)}>
              <RiAddLine /><p className="font-medium "> Add new list</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
