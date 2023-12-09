import { Card } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import SearchCard from "../components/SearchCard";

export default function SearchPlantPage() {
  const [plants, setPlants] = useState([]);
  const [query, setGetQuery] = useState("coconut");

  const matchPlantNames = (inputValue, plantName) => {
    if (inputValue.length >= 3) {
      const regex = new RegExp(inputValue, "i");
      return regex.test(plantName);
    }
    return false;
  };

  const fetchOneSpecificPlant = () => {
    if (query.trim() !== "") {
      axios
        .get(
          `https://server-express-eight.vercel.app/plants/search?query=${query}`
        )
        .then((res) => {
          console.log(res.data);
          setPlants(res.data.data);
        })
        .catch((e) => console.error(e));
    }
  };

  useEffect(() => {
    fetchOneSpecificPlant();
  }, [query]);

  const handleQuery = (e) => {
    e.preventDefault();
    setGetQuery(e.target.value);
  };

  return (
    <div className="min-h-full pt-4 w-full flex flex-col items-center justify-center">
      <label htmlFor="search-plant">Search Specific Plant in English</label>
      <input
        type="text"
        className="text-black"
        placeholder="search for special beers"
        value={query}
        onChange={handleQuery}
      />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {plants.length > 0 &&
          plants.map((plant) =>
            matchPlantNames(query, plant.common_name || plant.slug) ? (
              <HomeCard key={plant.id} plant={plant} />
            ) : null
          )}
      </div>
    </div>
  );
}
