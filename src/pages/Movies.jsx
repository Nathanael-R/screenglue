import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import endpoints from "../components/Endpoints";

const Movies = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(endpoints.popularRequest);
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.items));
      setPopular(data.items);
    }
  };

  return (
    <section className="md:px-16 sm:px-8 py-12 text-white px-4">
      <div className="flex items-center mb-10 w-fit">
        <div className="w-2 h-10 bg-yellow-400 mr-3"></div>
        <h2 className="text-3xl font-bold">Popular Movies</h2>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {popular?.map((item, id) => (
          <Movie key={id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
