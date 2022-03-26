export default function Dashboard() {
  return (
    <section className=" w-[80%] ml-[20%]">
      <div className=" text-2xl font-semibold text-stone-700">Dashboard</div>
      <div className=" grid grid-cols-2 gap-10 mt-10 ">
        <div className=" bg-gray-100 h-72 p-5 rounded-xl shadow-lg">
          <h3 className=" text-lg font-medium text-stone-500">Datos</h3>
        </div>
        <div className=" bg-gray-100 h-72 p-5 rounded-xl shadow-lg">
          <h3 className=" text-lg font-medium text-stone-500">Información</h3>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-10 mt-10 ">
        <div className=" bg-gray-100 h-56 p-5 rounded-xl shadow-lg">
          <h3 className=" text-lg font-medium text-stone-500">Datos</h3>
        </div>
        <div className=" bg-gray-100 h-56 p-5 rounded-xl shadow-lg">
          <h3 className=" text-lg font-medium text-stone-500">Información</h3>
        </div>
        <div className=" bg-gray-100 h-56 p-5 rounded-xl shadow-lg">
          <h3 className=" text-lg font-medium text-stone-500">Información</h3>
        </div>
      </div>
    </section>
  )
}
