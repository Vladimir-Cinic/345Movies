import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TvIcon from '@material-ui/icons/Tv';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: '100',
    backgroundColor: theme.palette.primary.main,
    '& .Mui-selected': {
      color: theme.palette.secondary.main,
    },
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push('/');
    } else if (value === 1) {
      history.push('/movies');
    } else if (value === 2) {
      history.push('/series');
    } else if (value === 3) {
      history.push('/search');
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        classes={{ root: classes.icon }}
        label='Trending'
        icon={<WhatshotIcon color='inherit' />}
      />
      <BottomNavigationAction
        classes={{ root: classes.icon }}
        label='Movies'
        icon={<MovieIcon color='inherit' />}
      />
      <BottomNavigationAction
        classes={{ root: classes.icon }}
        label='TV Series'
        icon={<TvIcon color='inherit' />}
      />
      <BottomNavigationAction
        classes={{ root: classes.icon }}
        label='Search'
        icon={<SearchIcon color='inherit' />}
      />
    </BottomNavigation>
  );
}
