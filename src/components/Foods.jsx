export default function Foods({ title, image }) {
  return (
    <div className="w-[230px]  h-fit transition-all duration-300 p-3 overflow-hidden rounded-md shadow-md ">
      <img
        className="w-full h-[260px] rounded-md hover:scale-110"
        src={image}
        alt=""
      />
      <h1 className="text-sm font-bold text-center">{title}</h1>
      <button className="py-2 px-4 cursor-pointer bg-blue-400 text-white rounded-md">
        Learn More...
      </button>
    </div>
  );
}
