import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import FlightSearchForm from '../components/FlightSearchForm';
import HotelSearchForm from '../components/HotelSearchForm';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Flights" />
        <Tab label="Hotels" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {selectedTab === 0 && <FlightSearchForm />}
        {selectedTab === 1 && <HotelSearchForm />}
      </Box>
    </Box>
  );
};

export default Home;