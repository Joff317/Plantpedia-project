import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
// import Nav from "../components/Nav";

export default function HomePage() {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-express-eight.vercel.app/plants")
      .then((res) => {
        console.log(res.data);
        setPlantData(res.data.data);
      })
      .catch((e) => console.error("Error", e));
  }, []);
  return (
    <div className="min-h-full pt-4 w-full flex flex-col items-center justify-center">
      <div>
        <h1 className="text-black text-4xl mb-8">Welcome on PlantPedia</h1>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {plantData &&
          plantData.map((plant) => (
            <div key={plant.id} className="col-span-1">
              <Card
                isFooterBlurred
                className="w-[250px] h-[300px] col-span-12 sm:col-span-5"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <h4 className="text-white font-medium text-2xl">
                    {plant.common_name}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={plant.image_url}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-tiny">
                      Discover in : {plant.year}
                    </p>
                    <p className="text-black text-tiny">Family : {plant.family}</p>
                  </div>
                  <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    See Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
