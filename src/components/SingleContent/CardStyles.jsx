import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    overflow: 'hidden',
    height: '100%',
    boxShadow:
      '0px 3px 3px -2px rgba(0,0,0,0.5),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  },
  poster: {
    minHeight: '100%',
    objectFit: 'cover',
    width: '100%',

    ' &:hover': {
      transform: 'scale(1.1)',
    },
    transition: '.3s',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    fontSize: '.9rem',
    fontWeight: '800',
    textAlign: 'left',
    margin: '.8rem 0',
    paddingLeft: '.1rem',
    color: theme.palette.secondary.main,
  },
  info: {
    display: 'flex',
    height: 'auto',
    justifyContent: 'space-between',
    width: '100%',
  },
  subtitle: {
    fontSize: '.9rem',
    fontWeight: '500',
    color: (selectedTheme) =>
      selectedTheme
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  customBadgeRed: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.contrastText,
  },
  customBadgeGreen: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText,
  },
}));
