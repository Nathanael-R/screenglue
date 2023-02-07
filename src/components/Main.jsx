import {useEffect, useState } from "react";
import {FaPlayCircle} from "react-icons/fa"

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("movies");

    if (check) {
      setMovies(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_KEY}`
      );
      const data = await api.json();
      localStorage.setItem("movies", JSON.stringify(data.items));
      setMovies(data.items);
    }
  };

  return (
    <main className="h-[550px] text-white">
      <div className="w-full h-full">
        <div /*className="absolute w-full h-[550px] bg-gradient-to-r from-black"*/></div>
          <img
          className="w-full h-full object-contain" 
          src={movie?.image} 
          alt={movie?.title} 
          />
      </div>
      <div className="absolute w-full top-[20%] p-4 md:p-16">
        <h1 className="text-5xl font-bold mb-8">{movie?.title}</h1>
        <p className="w-[40%]">{movie?.plot}</p>
        <p className="text-gray-500 my-4">Release Year: {movie?.year}</p>
        <div className="flex">
            <button className="bg-yellow-500 font-bold h-14 w-[180px] rounded-full mr-4 flex items-center justify-center gap-2">Watch Now <FaPlayCircle className="bg-transparent" size={20}/></button>
            <button className="bg-gray-900 font-bold h-14 w-[180px] rounded-full">Watch Later</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
