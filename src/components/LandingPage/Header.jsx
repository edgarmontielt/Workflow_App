import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="flex justify-center flex-col items-center mt-16">
            <h1 className=" text-center text-4xl font-bold w-3/4 flex justify-center">Collaborate joins people with commons goals</h1>
            <Link to="/signup" className="mt-10">
                <div className="w-[234px] p-2 bg-stone-900 rounded-[50px] text-center font-semibold text-white hover:w-[230px] hover:opacity-90">
                    Begin
                </div>
            </Link>
            <img src="/img/Group 71.png" className="rounded-2xl w-[700px]" alt="" />
        </header>
    )
}
