import React, { useEffect, useState } from "react";
import { NasaCard } from ".";
import { getNasaMars } from "../api/nasa";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "24px",
  },
}));

const CardContainer = () => {
  const classes = useStyles();
  const [nasaInfo, setNasaInfo] = useState();

  useEffect(() => {
    const getNasaInfo = async () => {
      const res = await getNasaMars();
      setNasaInfo(res.data.photos);
    };
    getNasaInfo();
  }, []);

  return (
    <div className={classes.cardContainer}>
      <Grid container spacing={3}>
        {nasaInfo
          ? nasaInfo.map((array, index) => {
              return (
                <Grid item xs={12} sm={4} key={index}>
                  <NasaCard key={array.id} array={array} />
                </Grid>
              );
            })
          : null}
      </Grid>
    </div>
  );
};

export { CardContainer };
