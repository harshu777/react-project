import React, { useState } from 'react';
import { TextField, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const FlightSearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [tripClass, setTripClass] = useState('Economy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle flight search logic here
    console.log({ from, to, departureDate, returnDate, adults, tripClass });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6">Search Flights</Typography>
      <TextField
        label="From"
        fullWidth
        margin="normal"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <TextField
        label="To"
        fullWidth
        margin="normal"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <TextField
        label="Departure Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      <TextField
        label="Return Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <TextField
        label="Number of Adults"
        type="number"
        fullWidth
        margin="normal"
        value={adults}
        onChange={(e) => setAdults(parseInt(e.target.value, 10))}
        inputProps={{ min: 1 }}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Trip Class</InputLabel>
        <Select
          value={tripClass}
          onChange={(e) => setTripClass(e.target.value)}
          label="Trip Class"
        >
          <MenuItem value="Economy">Economy</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
          <MenuItem value="First">First</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Search Flights
      </Button>
    </Box>
  );
};

export default FlightSearchForm;
