import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: '4rem',
    backgroundColor: 'red',
    backgroundColor: theme.palette.primary.main,
  },
}));

const SideDrawer = () => {
  const classes = useStyles();
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (url, index) => {
    setSelectedIndex(index);
    history.push(`/${url}`);
  };
  const drawerItems = [
    {
      text: 'Trending',
      url: '',
      icon: <WhatshotIcon />,
    },
    { text: 'Movies', url: 'movies', icon: <MovieIcon /> },
    { text: 'Series', url: 'series', icon: <TvIcon /> },
    { text: 'Search', url: 'search', icon: <SearchIcon /> },
  ];

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <Box>
        <List>
          {drawerItems.map((item, index) => {
            const { text, icon, url } = item;
            return (
              <ListItem
                button
                key={text}
                selected={selectedIndex === index}
                onClick={() => handleClick(url, index)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
