import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  return (
    <div className="relative mr-6 cursor-pointer inline-block lg:w-[250px] md:w-[200px] sm:w-[200px] w-[200px]">
      <img className="w-full h-auto" src={item?.image} alt={item?.title} />
      <div className="absolute bottom-0 w-full h-[60px] bg-black/50 px-4 flex items-center justify-between">
        <div className="">
          <p className="md:text-sm font-bold !opacity-100 text-white w-[50px]">
            {item?.title}
          </p>
          <p className="md:text-sm font-bold flex items-center h-full !opacity-70 text-white">
            {item?.year}
          </p>
        </div>
        <FaRegHeart size={20}/>
      </div>
    </div>
  );
};

export default Movie;
