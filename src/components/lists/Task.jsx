import React from 'react'

export default function Task({detailsModalOpened,data}) {
    return (
        <div className="rounded-md m-5 p-2 bg-gray-50 shadow- flex items-center justify-center hover:scale-[0.99] hover:bg-gray-300 cursor-pointer" onClick={() => detailsModalOpened(true)}>
            <p>{data.name}</p>
        </div>
        
    )
}