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
      <h1>Country Details</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {countryDetails &&
          countryDetails.map((plant) => (
            <HomeCard key={plant.id} plant={plant} />
          ))}
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
