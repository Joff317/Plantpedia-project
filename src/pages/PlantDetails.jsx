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
        setPlantDetails(res.data.data);
      })
      .catch((e) => console.error("Error: ", e));
  };

  useEffect(() => {
    fetchOnePlant();
  }, []);

  return (
    <div className="min-h-full pt-4 w-full flex flex-col">
      <h1 className="text-black text-5xl mb-8 text-center">
        {plantDetails && plantDetails.common_name}
      </h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl sm:m-6">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={plantDetails && plantDetails.image_url}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <h3 className="underline underline-offset-4 decoration-green-600 text-black text-center font-bold text-2xl">
              Plant Details
            </h3>
            <div className="plant-details-container">
              <ul className="p-4 text-xl md:text-lg mt-3">
                <li>
                  {" "}
                  <span className="font-bold underline underline-offset-4">
                    Observation :
                  </span>{" "}
                  {plantDetails && plantDetails.observations}
                </li>
                <li className="mt-3">
                  {" "}
                  <span className="font-bold underline underline-offset-4">
                    Family :
                  </span>{" "}
                  {plantDetails && plantDetails.family.name}
                </li>
                <li className="mt-3">
                  {" "}
                  <span className="font-bold underline underline-offset-4">
                    Genus :
                  </span>{" "}
                  {plantDetails && plantDetails.genus.name}
                </li>
                <li className="mt-3">
                  {" "}
                  <span className="font-bold underline underline-offset-4">
                    Scientific Name :
                  </span>{" "}
                  {plantDetails && plantDetails.scientific_name}
                </li>
              </ul>

              <div className="author mt-8 flex flex-col justify-center items-center">
                <h1>Author : {plantDetails && plantDetails.author}</h1>
                <p>
                  {" "}
                  <span className="font-bold">Bibliography:</span>{" "}
                  {plantDetails && plantDetails.bibliography}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="middle-content mx-auto md:m-6 p-6 border-2 drop-shadow-xl lg:bg-slate-50 rounded-lg  border-inherit flex lg:flex-row lg:justify-center sm:flex-col sm:justify-center sm:m-8 items-center sm:bg-none">
        <img
          className="rounded-lg lg:w-[400px] lg:h-[450px] drop-shadow-2xl md:w-[300px] md:h-[350px] md:mr-8 sm:w-[100px] sm:h-[150px]"
          src={plantDetails && plantDetails.image_url}
          alt=""
        />
        <div className="right-content text-left ml-28">
          <h3 className="underline underline-offset-4 decoration-green-600 text-black lg:text-4xl md:text-2xl">
            Plant details
          </h3>
          <div className="plant-details-container">
            <ul className="p-4 lg:text-2xl md:text-lg mt-3">
              <li>
                {" "}
                <span className="font-bold underline underline-offset-4">
                  Observation :
                </span>{" "}
                {plantDetails && plantDetails.observations}
              </li>
              <li className="mt-3">
                {" "}
                <span className="font-bold underline underline-offset-4">
                  Family :
                </span>{" "}
                {plantDetails && plantDetails.family.name}
              </li>
              <li className="mt-3">
                {" "}
                <span className="font-bold underline underline-offset-4">
                  Genus :
                </span>{" "}
                {plantDetails && plantDetails.genus.name}
              </li>
              <li className="mt-3">
                {" "}
                <span className="font-bold underline underline-offset-4">
                  Scientific Name :
                </span>{" "}
                {plantDetails && plantDetails.scientific_name}
              </li>
            </ul>

            <div className="author mt-8 flex flex-col justify-center items-center">
              <h1>Author : {plantDetails && plantDetails.author}</h1>
              <p>
                {" "}
                <span className="font-bold">Bibliography:</span>{" "}
                {plantDetails && plantDetails.bibliography}
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
