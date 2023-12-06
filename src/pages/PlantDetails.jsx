import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlantDetails() {
  let { plantId } = useParams();
  console.log(plantId);

  const [plantDetails, setPlantDetails] = useState(null);

  const fetchOnePlant = () => {
    axios
      .get(`https://server-express-eight.vercel.app/plants/id?id=${plantId}`)
      .then((res) => {
        console.log(res.data);
        setPlantDetails(res.data);
      })
      .catch((e) => console.error("Error: ", e));
  };

  useEffect(() => {
    fetchOnePlant();
  }, []);

  return (
    <div className="details-content">
      <div className="left-content">Test</div>
      <div className="right-content"></div>
    </div>
  );
}
