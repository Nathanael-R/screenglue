import { useEffect, useState } from "react";
import endpoints from "./Endpoints";

const Upcoming = () => {
  const [upComing, setUpComing] = useState([]);
  const banner = upComing[Math.floor(Math.random() * upComing.length)];
  useEffect(() => {
    getUpComing();
  }, []);

  const getUpComing = async () => {
    const check = localStorage.getItem("upComing");

    if (check) {
      setUpComing(JSON.parse(check));
    } else {
      const api = await fetch(endpoints.comingRequest);
      const data = await api.json();
      localStorage.setItem("upComing", JSON.stringify(data.items));
      setUpComing(data.items);
      console.log(upComing);
    }
  };

  return (
    <section className="text-white px-16 py-12 ">
      <div className="flex items-center mb-6  w-fit">
        <div className="w-2 h-10 bg-yellow-400 mr-3"></div>
        <h2 className="text-3xl font-bold">Coming Soon</h2>
      </div>
      <h4 className="text-xl font-bold underline cursor-pointer mb-8 w-fit">
        View all
      </h4>
      <div className=" h-[500px] w-full flex justify-between">
        <div className="w-[550px]">
          <div className="relative h-full w-full">
            <img
              className="h-full w-full object-cover"
              src={banner?.image}
              alt={banner?.title}
            />
            <div className="absolute bottom-0 w-full h-[80px] bg-black/50 flex flex-col justify-center p-4">
              <p className="text-xl font-bold mb-1">{banner?.title}</p>
              <p className="text-xs font-bold opacity-70">
                Genre: {banner?.genres}
              </p>
            </div>
          </div>
        </div>
        <aside className="h-full whitespace-wrap overflow-y-scroll">
          {upComing.map((movie) => {
            return (
              <div className="w-[500px] mb-4">
                <div className="h-[180px] gap-2 flex mb-4">
                  <div className="w-40 h-full">
                  <img src={movie?.image} alt={movie?.title} className="object-cover h-full"/>
                  </div>
                  <div className="text-amber-400">
                    <h4 className="text-xl font-bold mb-2">{movie?.title}</h4>
                    <p className="mb-1">{movie?.genres}</p>
                    <p>{movie?.year}</p>
                  </div>
                </div>
                <hr className="bg-amber-400/70 w-full h-0.5 border-none" />
              </div>
            );
          })}
        </aside>
      </div>
    </section>
  );
};

export default Upcoming;
