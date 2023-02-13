import List from "../components/List";
import Main from "../components/Main";
import Upcoming from "../components/Upcoming";
import endpoints from "../components/Endpoints";
import Pricing from "../components/Pricing";
import { Suspense } from "react";
const Home = () => {
  return (
    <>
      <Main />
      <List
        rowID="1"
        Header="Popular Movies"
        apiURL={endpoints.popularRequest}
      />
      <List rowID="2" Header="Latest Movies" apiURL={endpoints.latestRequest} />
      <Upcoming />
      <Pricing />
    </>
  );
};

export default Home;
