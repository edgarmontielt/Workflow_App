export default function Team({ data }) {

    return (
        <div className=" hover:opacity-80 cursor-pointer hover:scale-[.98]">
            <div className={`bg-dodger-blue-400 w-72 rounded-t-md flex justify-center items-center flex-col p-1`}>
                <p className=" text-base font-medium text-dodger-blue-50">{data.name}</p>
            </div>
            <img src={data.img} alt="" className=" w-72 h-32 rounded-b-md object-cover hover:object-top duration-200" />
        </div>
    )
}
