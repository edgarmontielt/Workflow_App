import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { del, post, put } from "../../api";
import Modal from "../lists/Modal";
import { FaTrash } from "react-icons/fa";
import Task from "./Task";
import ModalDetailsTask from "./ModalDetailsTask";

export default function List({ name, color, idList, data }) {
  const [tasks, setTasks] = useState(data);
  const [newTaskModalOpened, setNewTaskModalOpened] = useState(false);
  const [detailsModalOpened, setDetailsModalOpened] = useState(false);
  const { idTeam } = useParams();

  const addTask = (event) => {
    const { nameTask, descriptionTask } = event.target;

    post("/lists/" + idList + "/addTask", {
      name: nameTask.value,
      description: descriptionTask.value,
      assigned: ["623eaa25c7c19513286bf3f9"],
    }).then((res) => setTasks([...tasks, res.data]));
    setNewTaskModalOpened(false);
  };

  const deleteList = () => {
    del("/teams/" + idTeam + "/removeList/" + idList).then((res) => res.data);
    // window.location(__dirname)
  };

  const updateTask = (event) => {
      event.preventDefault()
      const { descriptionTask } = event.target
    put("/lists/" + idList, {
        description: descriptionTask.value
    }).then(res =>setTasks([...tasks, res.data]));
    setDetailsModalOpened(false)
  }

  return (
    <div className=" w-72 h-80 rounded-lg bg-gray-100 mb-5 mt-10 shadow-md">
      <div
        className={`w-72 h-12 bg-${color}-400 rounded-t-lg flex items-center pl-6`}
      >
        <p className=" text-white font-medium text-lg">{name}</p>
        <FaTrash
          className="text-white ml-auto mr-3 w-4 h-4 hover:text-red-400 cursor-pointer"
          onClick={deleteList}
        />
      </div>

      {tasks ? (
        tasks.map((task) => (
            <Task data={task} detailsModalOpened={setDetailsModalOpened}/>
        ))
      ) : (
        <></>
      )}
      <div
        className="rounded-lg m-5 p-2 bg-gray-100 shadow- flex items-center justify-center hover:scale-[0.99] hover:bg-gray-300 cursor-pointer"
        onClick={() => setNewTaskModalOpened(true)}
      >
        <RiAddLine />
        <p className="font-medium ">Add new task</p>
      </div>
      <Modal
        newTaskModalOpened={newTaskModalOpened}
        setNewTaskModalOpened={setNewTaskModalOpened}
        func={addTask}
      />

        <ModalDetailsTask detailsModalOpened={detailsModalOpened}
        setDetailsModalOpened={setDetailsModalOpened} 
        func={updateTask}
        data={tasks}
        />

    </div>
  );
}
