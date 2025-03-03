// src/Carousel/LeftArrow.js
import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const LeftArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        '&:hover': { backgroundColor: 'black' },
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

export default LeftArrow;
