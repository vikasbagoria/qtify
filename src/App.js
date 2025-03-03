import React, {useState, useEffect} from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import './App.css';
import Navbar from './Navbar/Navbar'; 
import Hero from './Hero/Hero';
// import Card from './Card';
import Section from "./Section";
import SongsSection from './SongsSection';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setTopAlbums(response.data);
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };

    const fetchNewAlbums = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
        setNewAlbums(response.data);
      } catch (error) {
        console.error('Error fetching new albums:', error);
      }
    };

    fetchTopAlbums();
    fetchNewAlbums();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Card /> */}
      <Box sx={{ p: 3 }}>
      <Section title="Top Albums" items={topAlbums} />
      <Section title="New Albums" items={newAlbums} />
      <SongsSection />
    </Box>
    </div>
  );
}

export default App;
