export default function InputForm({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="mb-5 py-[1px] px-2 rounded-md outline-none opacity-100 border border-gray-300"
    />
  );
}
