import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from '../../config/config';
import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  carouselItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'auto',
    width: 'auto',
    cursor: 'pointer',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    paddingBottom: theme.spacing(1),
    justifyContent: 'center',
  },
  carouselImg: {
    width: 'auto',
    objectFit: 'fill',
    height: '5rem',
    boxShadow: theme.shadows[5],
  },
  name: {
    color: theme.palette.primary.contrastText,
  },
}));

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ id, media_type }) => {
  const classes = useStyles();
  const [credits, setCredits] = useState([]);

  const searchActor = async (name) => {
    const { data } = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${name}`
    );
    window.open(
      `https://en.wikipedia.org/?curid=${data.query.search[0].pageid}`
    );
  };

  const items = credits.map((item) => (
    <Box
      className={classes.carouselItem}
      onClick={() => searchActor(item.name)}
    >
      <Box className={classes.imageContainer}>
        <img
          src={
            item.profile_path ? `${img_300}/${item.profile_path}` : noPicture
          }
          alt={item?.name}
          onDragStart={handleDragStart}
          className={classes.carouselImg}
        />
      </Box>

      <Typography className={classes.name} align='center' variant='subtitle2'>
        {item?.name}
      </Typography>
    </Box>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
      autoPlayInterval={1000}
    />
  );
};

export default Gallery;
