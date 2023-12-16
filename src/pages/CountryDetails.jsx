import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  let { countryId } = useParams();
  console.log(countryId);

  const [countryDetails, setCountryDetails] = useState(null);

  const fetchOneCountry = () => {
    axios
      .get(
        `https://server-express-eight.vercel.app/distributions/id?id=${countryId}/plants`
      )
      .then((res) => {
        console.log(res.data);
        setCountryDetails(res.data);
      })
      .catch((e) => console.error("Error: ", e));
  };

  useEffect(() => {
    fetchOneCountry();
  }, []);

  return <div>CountryDetails</div>;
}
