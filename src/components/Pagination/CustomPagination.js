import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Box, Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1),
    },
    display: 'inline-block',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  ul: {
    '& .MuiPaginationItem-root': {
      color: theme.palette.primary.contrastText,
    },
  },
}));

export default function CustomPagination({ page, setPage, numOfPages = 10 }) {
  const handlePageChange = (e, value) => {
    setPage(value);
    window.scroll(0, 0);
  };
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xsm'));

  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.paper}>
      <Pagination
        size={isSmallScreen ? 'small' : 'large'}
        onChange={handlePageChange}
        classes={{ ul: classes.ul }}
        count={numOfPages}
        page={page}
        color='secondary'
        hideNextButton
        hidePrevButton
      />
    </Paper>
  );
}
