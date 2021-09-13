import React from 'react';
import { Button, Tab, Tabs, TextField, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import { useGlobalContext } from '../../Context';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { grey, yellow, purple } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '28rem',
    width: '100%',
    margin: '0 auto 2rem',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  tabs: {
    color: (selectedTheme) =>
      selectedTheme
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText,
    fontWeight: '600',
    width: '50%',
  },
  textField: {
    color: theme.palette.primary.main,
  },
}));

export const customTheme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    type: 'light',
    primary: {
      main: purple[900],
    },
    secondary: {
      main: yellow[800],
    },
  },
});

const SearchForm = ({ setPage, setType, setSearchText, fetchSearch, type }) => {
  const { selectedTheme } = useGlobalContext();
  const classes = useStyles(selectedTheme);

  return (
    <>
      <Box className={classes.root}>
        <Tabs
          centered
          value={type}
          indicatorColor='secondary'
          textColor='secondary'
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          aria-label='disabled tabs example'
        >
          <Tab className={classes.tabs} label='Search Movies' />
          <Tab className={classes.tabs} label='Search TV Series' />
        </Tabs>
        <Box className={classes.box}>
          <ThemeProvider theme={selectedTheme ? customTheme : selectedTheme}>
            <TextField
              className={classes.textField}
              size='small'
              style={{ flex: 1 }}
              label='Search'
              color={selectedTheme ? 'primary' : 'secondary'}
              variant='filled'
              onChange={(e) => setSearchText(e.target.value)}
              InputProps={{
                className: classes.input,
              }}
            />
          </ThemeProvider>

          <Button
            onClick={fetchSearch}
            variant='outlined'
            color={selectedTheme ? 'primary' : 'secondary'}
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize='large' />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SearchForm;
