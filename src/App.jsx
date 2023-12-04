import { Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
