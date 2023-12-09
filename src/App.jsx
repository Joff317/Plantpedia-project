import { Route, Routes } from "react-router-dom";
import "./App.css";

// import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import SearchPlantPage from "./pages/SearchPlantPage";
import PlantDetails from "./pages/PlantDetails";
import SearchByCategories from "./pages/SearchByCategories";
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchPlant" element={<SearchPlantPage />} />
        <Route path="/:plantId" element={<PlantDetails />} />
        <Route path="/searchCategories" element={<SearchByCategories />} />
      </Routes>
    </div>
  );
}
