export default function Team({ data }) {
    return (
        <div className=" hover:opacity-80 cursor-pointer  hover:rotate-1 hover:scale-[.98]">
            <div className="bg-dodger-blue-100 w-80 rounded-t-md flex justify-center items-center flex-col p-2">
            <p className=" text-lg font-medium text-dodger-blue-800">{data.name}</p>
            </div>
            <img src={data.cover} alt="" className=" w-80 h-44 rounded-b-md object-cover hover:object-top duration-1000" />
        </div>
    )
}
