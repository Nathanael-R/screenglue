import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import { Route, Routes } from "react-router-dom";
import Searched from "./pages/Searched";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
