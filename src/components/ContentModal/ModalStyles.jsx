import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  paper: {
    width: '100%',
    margin: '0 1rem',
    height: 'auto',
    maxHeight: '95%',
    backgroundColor: theme.palette.primary.main,
    overflow: 'hidden',
    boxShadow: theme.shadows[5],
    maxWidth: theme.breakpoints.values.md,
    padding: theme.spacing(1),
    outline: 'none',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '35rem',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '60rem',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: '200px',
    textAlign: 'center',
    cursor: 'pointer',
    height: '100%',
    backgroundColor: 'transparent',
  },
  title: {
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(0.5, 0),
    fontSize: '1.3rem',
    fontWeight: '600',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    color: theme.palette.primary.contrastText,
    fontStyle: 'italic',
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
  },
  highlightText: {
    color: theme.palette.secondary.main,
    marginLeft: theme.spacing(1),
  },
  paragraph: {
    color: theme.palette.primary.contrastText,
    fontWeight: '300',
    fontSize: '.8rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(0, 2),
    },
  },
  imgContainer: {
    width: '100%',
    hight: '100%',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      objectFit: 'cover',
      [theme.breakpoints.up('md')]: {
        minHeight: '100%',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      marginLeft: theme.spacing(1),
    },
  },
  carouselContainer: {
    margin: theme.spacing(3, 0, 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
}));
