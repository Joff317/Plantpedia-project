import React from "react";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  //   console.log(props);
  return (
    <>
      <div key={props.plant.id} className="col-span-1">
        <Card
          isFooterBlurred
          className="w-[250px] h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h4 className="text-white font-medium text-2xl">
              {props.plant.common_name}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={props.plant.image_url}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">
                Discover in : {props.plant.year}
              </p>
              <p className="text-black text-tiny">
                Family : {props.plant.family}
              </p>
            </div>
            <Link to={`/${props.plant.id}`}>
              <Button
                className="text-tiny"
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
