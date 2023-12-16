import axios from "axios";
import { useEffect, useState } from "react";
import HomeArrow from "../components/HomeArrow";
import HomeCard from "../components/HomeCard/HomeCard";
import { Select, SelectItem } from "@nextui-org/react";

export default function SearchByCategories() {
  const [getFilterParams, setGetFilterParams] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const options = [
    {
      value: "year",
      text: "Year",
    },

    {
      value: "family",
      text: "Family",
    },
  ];

  const fetchByParams = (page = 1) => {
    const filterParams = getFilterParams;

    axios
      .get(
        `https://server-express-eight.vercel.app/plants/sort?params=${filterParams}&page=${page}`
      )
      .then((res) => {
        console.log(res.data);
        setFilteredData(res.data.data);
        setCurrentPage(page);
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setFilteredData(false);
      });
  };

  useEffect(() => {
   fetchByParams()
  }, [getFilterParams]);

  const handleClickNext = () => {
    fetchByParams(currentPage + 1);
  };

  const handleClickLast = () => {
    fetchByParams(currentPage - 1);
  };

  const handleChange = (value) => {
    console.log(value);
    setGetFilterParams(value);
  };

  return (
    <div className="min-h-full pt-4 w-full flex flex-col items-center justify-center text-black">
      <Select
        label="Select a category"
        className="max-w-xs"
        value={getFilterParams}
        onChange={handleChange}
      >
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.text}
          </SelectItem>
        ))}
      </Select>
      {/* <select
        className="mb-4"
        value={getFilterParams}
        onChange={(e) => handleChange(e)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select> */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {filteredData.length > 0 &&
          filteredData.map((plant) => (
            <HomeCard key={plant.id} plant={plant} />
          ))}
      </div>
      {filteredData && (
        <HomeArrow
          currentPage={currentPage}
          handleClickLast={handleClickLast}
          handleClickNext={handleClickNext}
        />
      )}
    </div>
  );
}
