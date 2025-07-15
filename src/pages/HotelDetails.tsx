import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Grid, Card, CardMedia, CardContent, Button, Chip } from '@mui/material';
import hotels from '../data/hotels.json';

const HotelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find((h) => h.id === parseInt(id || ''));

  if (!hotel) {
    return <Typography>Hotel not found</Typography>;
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {hotel.name}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={hotel.image}
              alt={hotel.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Location: {hotel.location}</Typography>
              <Typography variant="h6">Price: ${hotel.price}/night</Typography>
              <Typography variant="h6">Rating: {hotel.rating}/5</Typography>
              <Typography variant="h6" style={{ marginTop: '1rem' }}>
                Amenities:
              </Typography>
              <div>
                {hotel.amenities.map((amenity) => (
                  <Chip label={amenity} style={{ margin: '0.25rem' }} />
                ))}
              </div>
              <Typography variant="body1" style={{ marginTop: '1rem' }}>
                {hotel.details}
              </Typography>
              <Button
                component={Link}
                to={`/booking/${hotel.id}`}
                variant="contained"
                color="primary"
                style={{ marginTop: '1rem' }}
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default HotelDetails;
