import React, { useEffect, useState } from 'react';
import { Loading, NasaCard } from '.';
import { getNasaMars } from '../axios';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    padding: '24px',
    marginTop: '-60px'
  },

  grid: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  }
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
      <Grid container spacing={3} className={classes.grid}>
        {nasaInfo ? (
          nasaInfo.map((array, index) => {
            return (
              <Grid item xs={4} key={index} className={classes.grid}>
                <NasaCard key={array.id} array={array} />
              </Grid>
            );
          })
        ) : (
          <Loading />
        )}
      </Grid>
    </div>
  );
};

export { CardContainer };
