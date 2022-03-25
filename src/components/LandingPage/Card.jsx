import { Link } from "react-router-dom";

export default function Card({ title, content }) {
    return (
        <div className=" w-[386px] h-[476px] bg-gray-200 p-10 rounded-lg shadow-lg flex flex-col justify-center items-center">
            
            <h2 className=" text-2xl text-center font-bold mb-10">{title}</h2>
            <p className=" text-center text-base mb-10">{content}</p>

            <Link to="/signup" className=" mt-7">
                <div className="w-[234px] p-2 bg-stone-900 rounded-[50px] text-center font-semibold text-white hover:opacity-90">
                    Read More
                </div>
            </Link>
        </div>
    )
}
