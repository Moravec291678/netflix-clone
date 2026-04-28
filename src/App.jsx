import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileSelect from "./pages/ProfileSelect";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfileSelect />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
export default App;
