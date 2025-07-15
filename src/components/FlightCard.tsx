import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

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
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <Typography variant="h6">{flight.airline}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">{flight.from}</Typography>
            <Typography variant="body2">{flight.departureTime}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">{flight.to}</Typography>
            <Typography variant="body2">{flight.arrivalTime}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" align="right">${flight.price}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
