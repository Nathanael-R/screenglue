const endpoints = {
  popularRequest: `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_KEY}`,
  latestRequest: `https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_KEY}`,
  comingRequest: `https://imdb-api.com/en/API/ComingSoon/${process.env.REACT_APP_KEY}`,
};

export default endpoints;
