import React from "react";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import './HomeCard.css'

const HomeCard = (props) => {
  const { plant } = props;
  const isImage = plant.image_url;
  return (
    <>
      <div key={plant.id} className="col-span-1">
        <Card
          isFooterBlurred
          className="w-[250px] h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h4 className="text-black font-bold text-lg p-1" id="title-header">
              {plant.common_name || plant.scientific_name}
            </h4>
          </CardHeader>
          {isImage ? (
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={plant.image_url}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
               <p></p>
              <p className="text-black text-lg">No image available</p>
            </div>
          )}
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Discover in : {plant.year}</p>
              <p className="text-black text-tiny">Family : {plant.family}</p>
            </div>
            <Link to={`/${plant.id}`}>
              <Button
                className="text-tiny bg-lime-700 font-bold text-black"
                color="primary"
                radius="full"
                size="sm"
              >
                See Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default HomeCard;
