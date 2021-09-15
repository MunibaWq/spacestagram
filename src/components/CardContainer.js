import React, { useEffect, useState } from "react";
import { NasaCard } from ".";
import { getNasaMars } from "../api/nasa";

const CardContainer = () => {
  const [nasaInfo, setNasaInfo] = useState();

  useEffect(() => {
    const getNasaInfo = async () => {
      const res = await getNasaMars();
      setNasaInfo(res.data.photos);
    };
    getNasaInfo();
  }, []);

  return (
    <div>
      {nasaInfo
        ? nasaInfo.map((array) => {
            return <NasaCard key={array.id} array={array} />;
          })
        : null}
    </div>
  );
};

export { CardContainer };
