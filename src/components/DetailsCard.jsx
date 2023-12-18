import React from "react";

const DetailsCard = (props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl sm:m-6 mb-4">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={props.plantDetails && props.plantDetails.image_url}
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
                {props.plantDetails && props.plantDetails.observations}
              </li>
              <li className="mt-3">
                {" "}
                <span className="font-bold underline underline-offset-4">
                  Family :
                </span>{" "}
                {props.plantDetails && props.plantDetails.family.name}
              </li>
              <li className="mt-3">
                {" "}
                <span className="font-bold underline underline-offset-4">
                  Genus :
                </span>{" "}
                {props.plantDetails && props.plantDetails.genus.name}
              </li>
              <li className="mt-3">
                {" "}
                <span className="font-bold underline underline-offset-4">
                  Scientific Name :
                </span>{" "}
                {props.plantDetails && props.plantDetails.scientific_name}
              </li>
            </ul>

            <div className="author mt-8 flex flex-col justify-center items-center">
              <h1>
                Author : {props.plantDetails && props.plantDetails.author}
              </h1>
              <p>
                {" "}
                <span className="font-bold">Bibliography:</span>{" "}
                {props.plantDetails && props.plantDetails.bibliography}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
