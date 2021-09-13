import { Chip, useMediaQuery, Tabs, AppBar } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    zIndex: '0',
    maxWidth: '1250px',
  },
  chip: {
    margin: theme.spacing(0.5),
    color: theme.palette.primary.contrastText,
  },

  tab: {
    alignItems: 'center',
    height: '100%',
  },
}));

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line
  }, []);
  const classes = useStyles();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xsm'));

  return (
    <AppBar position='static' color='default' className={classes.root}>
      <Tabs
        className={classes.tab}
        textColor='primary'
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
      >
        {selectedGenres &&
          selectedGenres.map((genre) => (
            <Chip
              key={genre.id}
              style={{ margin: 3 }}
              label={genre.name}
              clickable
              color='secondary'
              variant='outlined'
              size={isSmallScreen ? 'small' : 'medium'}
              onDelete={() => handleRemove(genre)}
            />
          ))}
        {genres &&
          genres.map((genre) => (
            <Chip
              key={genre.id}
              style={{ margin: 3 }}
              label={genre.name}
              variant='outlined'
              clickable
              size={isSmallScreen ? 'small' : 'medium'}
              onClick={() => handleAdd(genre)}
            />
          ))}
      </Tabs>
    </AppBar>
  );
};

export default Genres;
