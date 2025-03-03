// src/SongsSection.js
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import axios from 'axios';
import Section from './Section';

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
        setGenres(response.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchSongs();
    fetchGenres();
  }, []);

  const filteredSongs =
    selectedGenre === 'All'
      ? songs
      : songs.filter((song) => song.genre.label === selectedGenre);

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Songs
      </Typography>
      <Tabs
        value={selectedGenre}
        onChange={(_, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="All" value="All" />
        {Array.isArray(genres) && genres.map((genre) => (
  <div key={genre.id}>{genre.name}</div>
))}
      </Tabs>
      <Section items={filteredSongs} isSongSection={true} />
    </Box>
  );
};

export default SongsSection;
