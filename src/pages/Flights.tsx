import React from 'react';
import { Box, Typography } from '@mui/material';
import FlightCard from '../components/FlightCard';
import FlightSearchForm from '../components/FlightSearchForm';

const mockFlights = [
  { airline: 'Indigo', from: 'Delhi', to: 'Mumbai', departureTime: '10:00', arrivalTime: '12:00', price: 5000 },
  { airline: 'Vistara', from: 'Delhi', to: 'Mumbai', departureTime: '11:00', arrivalTime: '13:00', price: 5500 },
  { airline: 'Air India', from: 'Delhi', to: 'Mumbai', departureTime: '12:00', arrivalTime: '14:00', price: 4800 },
];

const Flights = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Flight Search</Typography>
      <FlightSearchForm />
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>Flight Results</Typography>
      {mockFlights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </Box>
  );
};

export default Flights;
