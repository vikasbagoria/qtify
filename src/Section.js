// src/Section/Section.js
import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import Carousel from './Carousel/Carousel';
import AlbumCard from './Card';

const Section = ({ title, items, isSongSection = false }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ mt: 3 }}>
      {title && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{title}</Typography>
          {/* Show toggle only for album sections */}
          {!isSongSection && (
            <Button variant="outlined" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Collapse' : 'Show All'}
            </Button>
          )}
        </Box>
      )}
      {isSongSection ? (
        // Always render carousel for songs (no Show All)
        <Carousel items={items} isSongSection={isSongSection} />
      ) : (
        expanded ? (
          // Grid view when expanded
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {items.map((item) => (
              <AlbumCard key={item.id} item={item} isSong={isSongSection} />
            ))}
          </Box>
        ) : (
          // Carousel view when collapsed
          <Carousel items={items} isSongSection={isSongSection} />
        )
      )}
    </Box>
  );
};

export default Section;
