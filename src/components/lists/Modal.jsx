import React from 'react'
import { IoMdClose } from "react-icons/io"

export default function Modal({newTaskModalOpened, setNewTaskModalOpened, func}) {
    return (
        <>
            {newTaskModalOpened && <div>
                <div className='fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-30' onClick={() => { setNewTaskModalOpened(false) }}
                ></div>
                <div className="bg-white w-3/5 h-3/5 overflow-y-scroll absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
                    <div className=" bg-red-500 h-2"></div>

                    <button className='absolute right-5 top-5' onClick={() => { setNewTaskModalOpened(false) }}><IoMdClose className='w-10 h-10 rounded-full text-gray-400 p-2 hover:bg-gray-200 hover:text-gray-700' /></button>

                    <h2 className='px-16 py-10 text-lavender-800 text-2xl font-medium'>New task</h2>
                    <div className="flex">
                        <form className='flex flex-col px-16 pb-10 w-2/3' onSubmit={func}>
                            <input type="text" name="nameTask" placeholder="Task name" className="mb-3 py-[5px] px-2 rounded-md outline-none opacity-100 border bg-gray-200"></input>
                            <textarea name="descriptionTask" placeholder="Description" className="mb-3 py-[5px] px-2 rounded-md outline-none opacity-100 border bg-gray-200 h-40"></textarea>
                            <button className=' bg-dodger-blue-600 mt-2 py-1 text-md font-semibold text-white rounded-md'>Save</button>
                        </form>
                        <div className="pr-5">
                            <h2 className="mb-10 text-lg font-medium">Upload File</h2>
                            <form >
                                <input type="file" name="file" className="w-2/3" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
