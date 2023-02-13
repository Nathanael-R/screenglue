import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const List = ({ Header, rowID, apiURL }) => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(apiURL);
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.items));
      setPopular(data.items);
    }
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  
  return (
    <section className="md:px-16 sm:px-8 py-12 text-white px-4">
      <div className="flex items-center mb-6 w-fit">
        <div className="w-2 h-10 bg-yellow-400 mr-3"></div>
        <h2 className="text-3xl font-bold">{Header}</h2>
      </div>
      <h4 className="text-xl font-bold underline cursor-pointer w-fit mb-6">
        View all
      </h4>
      <div className="relative flex items-center group">
        {
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        }
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {popular?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        {
          <MdChevronRight
            onClick={slideRight}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        }
      </div>
    </section>
  );
};

export default List;
