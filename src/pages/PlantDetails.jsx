import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";

export default function PlantDetails() {
  let { plantId } = useParams();
  console.log(plantId);

  const [plantDetails, setPlantDetails] = useState(null);

  const fetchOnePlant = () => {
    axios
      .get(`https://server-express-eight.vercel.app/plants/id?id=${plantId}`)
      .then((res) => {
        console.log(res.data);
        setPlantDetails(res.data.data);
      })
      .catch((e) => console.error("Error: ", e));
  };

  useEffect(() => {
    fetchOnePlant();
  }, []);

  return (
    <div className="min-h-full pt-4 w-full flex flex-col justify-center items-center">
      <h1 className="text-black text-4xl mb-8 text-center font-pacifico">
        {plantDetails && plantDetails.common_name}
      </h1>
      <DetailsCard plantDetails={plantDetails} />
    </div>
  );
}
