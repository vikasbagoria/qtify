// src/Card/Card.js
import React from 'react';
import { Card, CardMedia, CardContent, Chip, Typography } from '@mui/material';

const AlbumCard = ({ item, isSong }) => {
  return (
    <Card sx={{ width: 200, borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Chip
          label={`${isSong ? item.likes : item.follows} ${isSong ? 'Likes' : 'Follows'}`}
          size="small"
          sx={{ mb: 1 }}
        />
        <Typography variant="h6">{item.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
