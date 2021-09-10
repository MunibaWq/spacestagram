import React, { useEffect, useState } from "react";
import { NasaCard } from ".";
import { getNasaAPOD } from "../api/nasa";

const CardContainer = () => {
  const [nasaInfo, setNasaInfo] = useState();

  useEffect(() => {
    const getNasaInfo = async () => {
      const res = await getNasaAPOD();
      setNasaInfo([res.data]);
    };
    getNasaInfo();
  }, []);

  console.log(nasaInfo);

  return (
    <>
      <NasaCard />
    </>
  );
};

export { CardContainer };
