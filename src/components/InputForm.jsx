export default function InputForm({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="mb-3 py-[5px] px-2 rounded-md outline-none opacity-100 border border-gray-300"
    />
  );
}
