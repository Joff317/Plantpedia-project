import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard/HomeCard";
import HomeArrow from "../components/HomeArrow";

export default function HomePage() {
  const [plantData, setPlantData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (page = 1) => {
    axios
      .get(`https://server-express-eight.vercel.app/plants?page=${page}`)
      .then((res) => {
        console.log(res.data);
        setPlantData(res.data.data);
        setCurrentPage(page);
        //   setIsFirstPage(currentPage);
      })
      .catch((e) => {
        console.error("Error", e);
        setHasFetchData(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickNext = () => {
    fetchData(currentPage + 1);
  };

  const handleClickLast = () => {
    fetchData(currentPage - 1);
  };
  [];
  return (
    <div className="min-h-full pt-4 w-full flex flex-col items-center justify-center ">
      <div>
        <h1 className="text-black lg:text-5xl mb-8 md:text-2xl sm:text-xl font-pacifico">
          Welcome on PlantPedia
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {plantData &&
          plantData.map((plant) => <HomeCard plant={plant} key={plant.id} />)}
      </div>
      {plantData && (
        <HomeArrow
          currentPage={currentPage}
          handleClickLast={handleClickLast}
          handleClickNext={handleClickNext}
        />
      )}
    </div>
  );
}
