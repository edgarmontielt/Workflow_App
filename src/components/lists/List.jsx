import { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { get, post } from "../../api";
import Modal from "../lists/Modal";

export default function List({ name, color }) {
    const [tasks, setTasks] = useState([]);
    const [newTaskModalOpened, setNewTaskModalOpened] = useState(false);
    const { idTeam } = useParams();

    useEffect(() => {
        get("/tasks/" + idTeam)
            .then((res) => {
                setTasks(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const addTask = (event) => {
        const { nameTask, descriptionTask } = event.target;

        post("/lists/" + idTeam + "/addTask", {
            name: nameTask.value,
            description: descriptionTask.value,
            assigned: ['623eaa25c7c19513286bf3f9'],
        }).then((res) =>
            setTasks([...tasks,res.data])
        );
        setNewTaskModalOpened(false)
    };

    return (
        <div className=" w-72 h-80 rounded-lg bg-gray-100 mb-5 mt-10 shadow-md">
            <div
                className={`w-72 h-12 bg-${color}-400 rounded-t-lg flex items-center pl-6`}
            >
                <p className=" text-white font-medium text-lg">{name}</p>
            </div>
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
                addTask={addTask}
            />
        </div>
    );
}
