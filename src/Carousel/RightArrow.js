// src/Carousel/RightArrow.js
import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const RightArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        '&:hover': { backgroundColor: 'black' },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

export default RightArrow;
