import { IoMdClose } from "react-icons/io"

export default function Modal({ setModalOpened, teams, setTeams}) {

    const addTeam = (event) => {
        event.preventDefault()
            alert("Creando...")
            const {name,cover,description} = event.target
            const newTeam = {
                name:name.value,
                cover:cover.value,
                description:description.value
            }
            setTeams([...teams,newTeam])
            setModalOpened(false)
      }

    return (
        <div className="bg-gray-100 w-[450px] rounded-md shadow-lg h-[500px] absolute left-1/3 p-10 ">
            <div className=" flex items-center ">
                <h1 className=" text-2xl font-medium text-dodger-blue-900 ">New Team</h1>
                <span className=" ml-auto cursor-pointer" onClick={() => { setModalOpened(false) }}><IoMdClose className=" w-6 h-6 hover:opacity-70" /></span>
            </div>
            <form className='flex flex-col h-full mt-20' onSubmit={addTeam}>
                <input className='p-2 bg-lavender-100 outline-none border focus:border-lavender-600 my-2 rounded-md' name='name' placeholder='Name...' type="text" />
                <input className='p-2 bg-lavender-100 outline-none border focus:border-lavender-600 my-2 rounded-md' name='cover' placeholder='Image...' type="text" />
                <input className='p-2 bg-lavender-100 outline-none border focus:border-lavender-600 my-2 rounded-md' name='description' placeholder='Description...' type="text" />
                <button className=' bg-dodger-blue-600 mt-5 py-2 text-xl font-medium text-lavender-100 rounded-md'>Crear equipo</button>
            </form>
        </div>
    )
}
