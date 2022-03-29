import { IoMdClose } from "react-icons/io"
import { post } from "../../api"

export default function Modal({ setModalOpened, teams, setTeams }) {

    const addTeam = (event) => {
        event.preventDefault()
        const { name, img, description, color } = event.target
        // const newTeam = new FormData();
        // newTeam.append("name", name.value)
        // newTeam.append("img", img.value)
        // newTeam.append("description", description.value)

        // post("/teams", newTeam)
        // .then(res => {
        //     setTeams([...teams, res.data])
        // })
        const newTeam = {
            name:name.value,
            img:img.value,
            description:description.value
        }
        setTeams([...teams,newTeam])
        setModalOpened(false)
    }

    return (
        <div className="bg-gray-200 w-[450px] rounded-xl shadow-stone-600 shadow-xl h-[550px] left-1/3 p-10 fixed">
            <div className=" flex items-center ">
                <h1 className=" text-3xl font-medium text-dodger-blue-500 ">New Team</h1>
                <span className=" ml-auto cursor-pointer p-2 rounded-full hover:bg-gray-300" onClick={() => { setModalOpened(false) }}><IoMdClose className=" w-6 h-6 hover:opacity-60" /></span>
            </div>
            <form className='flex flex-col h-full mt-14 gap-3' onSubmit={addTeam}>
                <input className='p-2 outline-none border focus:border-dodger-blue-400 my-2 rounded-md' name='name' placeholder='Name...' type="text" />
                <input className='p-2 outline-none border focus:border-dodger-blue-400 my-2 rounded-md' name='img' placeholder='Image...' type="text" />
                <input className='p-2 outline-none border focus:border-dodger-blue-400 my-2 rounded-md' name='description' placeholder='Description...' type="text" />

                <select name="color" id="" className="p-2 outline-none rounded-md focus:border-dodger-blue-400 my-2">
                    <option value="dodger-blue">Blue</option>
                    <option value="meadow">Green</option>
                    <option value="purple">Purple</option>
                </select>
                <button className=' bg-dodger-blue-600 mt-5 py-2 text-base text-dodger-blue-200 font-medium text-lavender-100 rounded-md hover:bg-dodger-blue-500 hover:text-white'>Crear equipo</button>
            </form>
        </div>
    )
}