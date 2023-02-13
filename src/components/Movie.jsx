import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const trim = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="relative mr-3 cursor-pointer inline-block sm:w-[250px] w-[150px]">
      <img className="w-full sm:h-[350px] object-cover" src={item?.image} alt={item?.title} />
      <div className="absolute bottom-0 w-full h-[60px] bg-black/50 sm:px-4 px-1 flex items-center justify-between">
        <div className="">
          <p className="text-sm font-bold !opacity-100 text-white">
            {trim(item?.title, 15)}
          </p>
          <p className="text-sm font-bold flex items-center h-full !opacity-70 text-white">
            {item?.year}
          </p>
        </div>
        <FaRegHeart size={20}/>
      </div>
    </div>
  );
};

export default Movie;
