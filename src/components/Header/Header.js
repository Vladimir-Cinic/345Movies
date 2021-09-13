import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { useGlobalContext } from '../../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: '1000',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
  },
  boxColor: {
    color: theme.palette.secondary.main,
  },
  toolbar: theme.mixins.toolbar,
  switchBase: {
    color: theme.palette.secondary.main,
    '& $checked': {
      color: theme.palette.secondary.main,
    },
    '& $checked + $track': {
      backgroundColor: theme.palette.secondary.main,
    },
    checked: {},
    track: {},
  },
}));

const Header = () => {
  const { selectedTheme, toggleTheme } = useGlobalContext();
  const classes = useStyles();
  return (
    <>
      <AppBar onClick={() => window.scroll(0, 0)} className={classes.root}>
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {' '}
          <Typography style={{ fontWeight: '800' }} variant='h5'>
            🎬{' '}
            <Box className={classes.boxColor} component='span'>
              345
            </Box>
            MOVIES 🎥
          </Typography>{' '}
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            {' '}
            <Switch
              classes={{ switchBase: classes.switchBase }}
              onChange={() => toggleTheme()}
              name='checkedA'
              color='secondary'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            {selectedTheme ? (
              <Brightness3Icon color='secondary' />
            ) : (
              <WbSunnyIcon color='secondary' />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Paper>
        <Box className={classes.toolbar}></Box>
      </Paper>
    </>
  );
};

export default Header;
