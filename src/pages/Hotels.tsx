import React from 'react';
import { Box, Typography } from '@mui/material';
import HotelCard from '../components/HotelCard';
import HotelSearchForm from '../components/HotelSearchForm';
import hotels from '../data/hotels.json';

const Hotels = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Hotel Search</Typography>
      <HotelSearchForm />
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>Hotel Results</Typography>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </Box>
  );
};

export default Hotels;
