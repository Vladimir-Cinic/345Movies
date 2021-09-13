import React, { useState } from 'react';
import { img_300, unavailable } from '../../config/config';
import { Typography, Box } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Badge from '@material-ui/core/Badge';
import { useStyles } from './CardStyles';
import ContentModal from '../ContentModal/ContentModal';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import { useGlobalContext } from '../../Context';

const MovieCard = ({
  poster_path,
  title,
  date,
  vote_average,
  name,
  id,
  media_type,
}) => {
  const { selectedTheme } = useGlobalContext();
  const classes = useStyles(selectedTheme);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popUpContent, setPopUpContent] = useState('');
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    if (event.currentTarget.id === 'title') {
      setPopUpContent(title ? title : name);
    } else if (event.currentTarget.id === 'date') {
      if (media_type === 'tv') {
        setPopUpContent(`First Aired : ${date}`);
      } else if (media_type === 'movie') {
        setPopUpContent(`Release Date : ${date}`);
      }
    }
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <ContentModal className={classes.card} media_type={media_type} id={id}>
      <Badge
        classes={
          vote_average > 6
            ? { badge: classes.customBadgeGreen }
            : { badge: classes.customBadgeRed }
        }
        badgeContent={vote_average}
      ></Badge>
      <Box className={classes.imageWrapper}>
        <img
          className={classes.poster}
          src={poster_path ? `${img_300}/${poster_path}` : unavailable}
          alt={title}
        />
      </Box>
      <Box className={classes.textWrapper}>
        <Typography
          variant='h4'
          id='title'
          color='textSecondary'
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup='true'
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          className={classes.title}
        >
          {(() => {
            if (title) {
              return title.length > 17 ? `${title.substring(0, 17)}...` : title;
            }
            if (name) {
              return name.length > 17 ? `${name.substring(0, 17)}...` : name;
            }
          })()}
        </Typography>

        <Box className={classes.info}>
          <Typography
            id='date'
            color='textSecondary'
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup='true'
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            variant='caption'
            className={classes.subtitle}
          >
            {date && (
              <EventNoteOutlinedIcon
                style={{ marginRight: 1 }}
                fontSize='small'
              />
            )}
            {date ? `${date.split('-')[0]}` : ''}
          </Typography>
          <Typography
            color='textSecondary'
            variant='caption'
            className={classes.subtitle}
          >
            {media_type === 'tv' ? 'TV Series' : 'Movie'}
          </Typography>
        </Box>
        <Popover
          id='mouse-over-popover'
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>{popUpContent}</Typography>
        </Popover>
      </Box>
    </ContentModal>
  );
};

export default MovieCard;
