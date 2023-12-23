import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeCard from "../components/HomeCard/HomeCard";
import HomeArrow from "../components/HomeArrow";

export default function CountryDetails() {
  let { slug } = useParams();
  //   console.log(countrySlug);

  const [countryDetails, setCountryDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchOneCountry = (page = 1) => {
    axios
      .get(
        `https://server-express-eight.vercel.app/countries/${slug}?page=${page}`
      )
      .then((res) => {
        const uniqueDetails = res.data.data.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        );
        setCountryDetails(uniqueDetails);
        setCurrentPage(page);
      })
      .catch((e) => console.error("Error: ", e));
  };

  useEffect(() => {
    fetchOneCountry();
  }, [slug]);

  const handleClickNext = () => {
    fetchOneCountry(currentPage + 1);
  };

  const handleClickLast = () => {
    fetchOneCountry(currentPage - 1);
  };

  return (
    <div className="min-h-full pt-4 w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8 font-pacifico">Country Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        {countryDetails.length > 0 ? (
          countryDetails.map((plant) => (
            <HomeCard key={plant.id} plant={plant} />
          ))
        ) : (
          <p className="text-black bg-green-600 p-2 m-2 rounded-lg cursor-pointer hover:bg-slate-300 text-center font-semibold w-full col-span-full">
            Pas de données disponibles
          </p>
        )}
      </div>
      {countryDetails && (
        <HomeArrow
          currentPage={currentPage}
          handleClickLast={handleClickLast}
          handleClickNext={handleClickNext}
        />
      )}
    </div>
  );
}
