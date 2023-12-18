import { Card } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard/HomeCard";
import HomeArrow from "../components/HomeArrow";
import SearchInput from "../components/SearchInput";

export default function SearchPlantPage() {
  const [plants, setPlants] = useState([]);
  const [query, setGetQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const matchPlantNames = (inputValue, plantName) => {
    if (inputValue.length >= 3) {
      const regex = new RegExp(inputValue, "i");
      return regex.test(plantName);
    }
    return false;
  };

  const fetchOneSpecificPlant = (page = 1) => {
    if (query.trim() !== "") {
      axios
        .get(
          `https://server-express-eight.vercel.app/plants/search?query=${query}&page=${page}`
        )
        .then((res) => {
          console.log(res.data.data);
          setPlants(res.data.data);
          setCurrentPage(page);
        })
        .catch((e) => console.error(e));
    }
  };

  useEffect(() => {
    fetchOneSpecificPlant(currentPage);
  }, [query]);

  useEffect(() => {
    fetchOneSpecificPlant(currentPage);
  }, [currentPage]);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickLast = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleQuery = (e) => {
    e.preventDefault();
    setGetQuery(e.target.value);
  };

  return (
    <div className="min-h-full pt-4 w-full flex flex-col items-center justify-center">
      <SearchInput handleQuery={handleQuery} query={query}/>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {plants.length > 0 &&
          plants.map((plant) =>
            matchPlantNames(
              query,
              plant.common_name ? plant.common_name : plant.scientific_name
            ) ? (
              <HomeCard key={plant.id} plant={plant} />
            ) : null
          )}
      </div>
      {plants &&
        (currentPage !== 1 || (currentPage === 1 && plants.length === 20)) && (
          <HomeArrow
            currentPage={currentPage}
            handleClickLast={handleClickLast}
            handleClickNext={handleClickNext}
          />
        )}
    </div>
  );
}
