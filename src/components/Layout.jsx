import React from 'react';
import Header from './Header/Header';
import { Container } from '@material-ui/core';
import BottomNav from './BottomNav/BottomNav';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import SideDrawer from './Drawer/SideDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useGlobalContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  app: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: (selectedTheme) =>
      selectedTheme ? '#f9f9f9' : theme.palette.primary.dark,
    padding: theme.spacing(4, 0, 12),
    display: 'flex',
    transition: '.5s ease',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 0),
    },
  },
}));

const Layout = ({ children, toggleTheme }) => {
  const { selectedTheme } = useGlobalContext();
  const isBigScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const isSMallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const classes = useStyles(selectedTheme);
  return (
    <>
      <CssBaseline />
      <Header />
      <div className={classes.app}>
        {isBigScreen && <SideDrawer />}
        <Container
          style={{
            maxWidth: '1600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
        </Container>
        {isSMallScreen && <BottomNav />}
      </div>
    </>
  );
};

export default Layout;
