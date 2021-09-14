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
        ? nasaInfo.map((array, index) => {
            return (
              <>
                <NasaCard key={array.earth_date} array={array} />
              </>
            );
          })
        : null}
    </div>
  );
};

export { CardContainer };
