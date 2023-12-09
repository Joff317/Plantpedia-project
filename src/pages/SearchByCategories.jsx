import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchByCategories() {
  const [getFilterParams, setGetFilterParams] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const options = [
    { value: "common_name", text: "Common Name" },
    { value: "family_name", text: "Family Name" },
    { value: "species", text: "species" },
    { value: "slug", text: "slug" },
    { value: "year", text: "year" },
  ];

  const fetchByCategories = () => {
    const filterParams = getFilterParams;

    axios
      .get(
        `https://server-express-eight.vercel.app/plants/filter?filterParams=${filterParams}`
      )
      .then((res) => {
        console.log(res.data);
        setFilteredData(res.data.data);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  };

  useEffect(() => {
    fetchByCategories();
  }, [getFilterParams]);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setGetFilterParams(e.target.value);
  };

  return (
    <div className="min-h-full pt-4 w-full flex flex-col items-center justify-center text-black">
      <select value={getFilterParams} onChange={(e) => handleChange(e)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <div>
        {filteredData.length > 0 ? (
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>
                <p>{item.common_name}</p>
                <p>{item.species}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune donnée filtrée à afficher</p>
        )}
      </div>
    </div>
  );
}
