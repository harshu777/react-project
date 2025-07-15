import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const HotelSearchForm = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle hotel search logic here
    console.log({ destination, checkInDate, checkOutDate, guests });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6">Search Hotels</Typography>
      <TextField
        label="Destination"
        fullWidth
        margin="normal"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <TextField
        label="Check-in Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <TextField
        label="Check-out Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
      <TextField
        label="Number of Guests"
        type="number"
        fullWidth
        margin="normal"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
        inputProps={{ min: 1 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Search Hotels
      </Button>
    </Box>
  );
};

export default HotelSearchForm;
