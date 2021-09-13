import { Grid, Typography, Box } from '@material-ui/core';
import React from 'react';
import CustomPagination from '../Pagination/CustomPagination';
import MovieCard from '../SingleContent/MovieCard';
import Genres from '../Genres/Genres';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { useGlobalContext } from '../../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    color: (selectedTheme) =>
      selectedTheme
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText,
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    width: '100%',
  },
  errorMsg: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(10),
    fontWeight: '600',
  },
}));

const ContentGrid = ({
  content,
  title,
  page,
  setPage,
  numOfPages,
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  media_type,
  errorMsg,
}) => {
  const { selectedTheme } = useGlobalContext();
  const classes = useStyles(selectedTheme);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isBigScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <>
      {title && (
        <Box
          borderLeft={5}
          borderColor='secondary.main'
          className={classes.root}
        >
          <Typography
            style={{
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
            align='left'
            variant='h5'
          >
            {title}
          </Typography>
        </Box>
      )}

      {type && (
        <Genres
          type={type}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
      )}
      {content.length === 0 ? (
        <Typography className={classes.errorMsg} variant='h4' align='center'>
          {errorMsg}
        </Typography>
      ) : (
        <Grid container spacing={isSmallScreen ? 2 : 3}>
          {content.map((item, index) => {
            if (index === 0 || index === 5 || index === 10 || index === 15) {
              return (
                <>
                  {isBigScreen && <Grid lg={1} item key={index}></Grid>}
                  <Grid
                    style={{ marginBottom: '.5rem' }}
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    key={item.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '.5rem',
                    }}
                  >
                    <MovieCard
                      media_type={media_type}
                      {...item}
                      date={item.first_air_date || item.release_date}
                    />
                  </Grid>
                </>
              );
            } else if (
              index === 4 ||
              index === 9 ||
              index === 14 ||
              index === 19
            ) {
              return (
                <>
                  <Grid
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '.5rem',
                    }}
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    key={item.id}
                  >
                    <MovieCard
                      media_type={media_type}
                      {...item}
                      date={item.first_air_date || item.release_date}
                    />
                  </Grid>
                  {isBigScreen && <Grid lg={1} item key={index}></Grid>}
                </>
              );
            } else {
              return (
                <Grid
                  style={{ marginBottom: '.5rem' }}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '.5rem',
                  }}
                >
                  <MovieCard
                    media_type={media_type}
                    {...item}
                    date={item.first_air_date || item.release_date}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      )}
      {numOfPages > 1 && (
        <CustomPagination
          page={page}
          setPage={setPage}
          numOfPages={numOfPages}
        />
      )}
    </>
  );
};

export default ContentGrid;
