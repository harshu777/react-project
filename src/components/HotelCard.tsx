import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

interface Hotel {
  name: string;
  location: string;
  price: number;
  image: string;
}

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={hotel.image}
        alt={hotel.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {hotel.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {hotel.location}
          </Typography>
          <Typography variant="h6" component="div" sx={{ mt: 1 }}>
            ${hotel.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default HotelCard;
