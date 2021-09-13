import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from '../../config/config';

import {
  Box,
  Button,
  Paper,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Carousel from '../Carousel/Carousel';
import { useStyles } from './ModalStyles';

export default function TransitionsModal({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Paper elevation={0} className={classes.card} onClick={handleOpen}>
        {children}
      </Paper>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <Box
              border={1}
              borderColor='primary.light'
              className={classes.paper}
            >
              <Box className={classes.modalContent}>
                <Box className={classes.imgContainer}>
                  {isSmallScreen ? (
                    <img
                      src={
                        content.poster_path
                          ? `${img_500}/${content.poster_path}`
                          : unavailable
                      }
                      alt={content.name || content.title}
                    />
                  ) : (
                    <img
                      src={
                        content.backdrop_path
                          ? `${img_500}/${content.backdrop_path}`
                          : unavailableLandscape
                      }
                      alt={content.name || content.title}
                    />
                  )}
                </Box>
                <Box className={classes.aboutContainer}>
                  <Box>
                    {' '}
                    <Typography
                      className={classes.title}
                      variant='h4'
                      align='center'
                    >
                      {content.name || content.title}
                      <Box className={classes.highlightText} component='span'>
                        (
                        {(
                          content.first_air_date ||
                          content.release_date ||
                          '-----'
                        ).substring(0, 4)}
                        )
                      </Box>
                    </Typography>
                    {content.tagline && (
                      <Typography
                        className={classes.subtitle}
                        align='center'
                        variant='subtitle2'
                      >
                        {content.tagline}
                      </Typography>
                    )}
                  </Box>

                  <Typography
                    className={classes.paragraph}
                    variang='subtitle1'
                    align='center'
                  >
                    {content.overview}
                  </Typography>

                  <Box className={classes.carouselContainer}>
                    <Button
                      variant='contained'
                      style={{ marginBottom: '2rem' }}
                      startIcon={<YouTubeIcon />}
                      color='secondary'
                      target='__blank'
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Watch the Trailer
                    </Button>
                    <Carousel id={id} media_type={media_type} />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Fade>
      </Modal>
    </>
  );
}
