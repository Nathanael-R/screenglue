import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Searched = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  let params = useParams();

  const getSearchedMovie = async (name) => {
    const data = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_KEY}/${name}`
    );
    const movies = await data.json();
    setSearchedMovie(movies);
    console.log(searchedMovie);
  };

  useEffect(() => {
    getSearchedMovie(params.search);
  }, [params.search]);

//   return (
//     <>
//       {searchedMovie?.map((movie) => {
//         return(<p>{movie?.title}</p>);
//       })}
//     </>
//   );
};

export default Searched;
