import { Card } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import SearchCard from "../components/SearchCard";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon";
import HomeArrow from "../components/HomeArrow";

export default function SearchPlantPage() {
  const [plants, setPlants] = useState([]);
  const [query, setGetQuery] = useState("coconut");
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
      <Input
        value={query}
        onChange={handleQuery}
        label="Search"
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        className="text-black w-[16em] mb-4"
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
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
      {plants && (
        <HomeArrow
          currentPage={currentPage}
          handleClickLast={handleClickLast}
          handleClickNext={handleClickNext}
        />
      )}
    </div>
  );
}
