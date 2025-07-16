import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface Flight {
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ flex: '1 1 0' }}>
            <Typography variant="h6">{flight.airline}</Typography>
          </Box>
          <Box sx={{ flex: '1 1 0' }}>
            <Typography variant="body1">{flight.from}</Typography>
            <Typography variant="body2">{flight.departureTime}</Typography>
          </Box>
          <Box sx={{ flex: '1 1 0' }}>
            <Typography variant="body1">{flight.to}</Typography>
            <Typography variant="body2">{flight.arrivalTime}</Typography>
          </Box>
          <Box sx={{ flex: '1 1 0', textAlign: 'right' }}>
            <Typography variant="h6">${flight.price}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
