import axios from "axios";
import { useEffect, useState } from "react";
import HomeArrow from "../components/HomeArrow";
import { Link } from "react-router-dom";

export default function SearchByCountries() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCountries = (page = 1) => {
    axios
      .get(`https://server-express-eight.vercel.app/countries?page=${page}`)
      .then((res) => {
        console.log(res.data.data);
        setCountries(res.data.data);
        setCurrentPage(page);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleClickNext = () => {
    fetchCountries(currentPage + 1);
  };

  const handleClickLast = () => {
    fetchCountries(currentPage - 1);
  };

  return (
    <div className="min-h-full pt-4 w-full flex flex-col items-center justify-center">
      <h1 className="text-black">SELECT A SPECIFIC AREA</h1>
      <div>
        {countries &&
          countries.map((country) => (
            <Link to={`/searchCountries/${country.slug}`} key={country.id}>
              <p className="text-black">{country.name}</p>
            </Link>
          ))}
      </div>
      {countries && (
        <HomeArrow
          currentPage={currentPage}
          handleClickLast={handleClickLast}
          handleClickNext={handleClickNext}
        />
      )}
    </div>
  );
}
