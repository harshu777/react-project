import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Paper, Stack, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import hotels from '../data/hotels.json';
import { handleRazorpayPayment } from '../utils/razorpay';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find((h) => h.id === parseInt(id || ''));
  const [paymentStatus, setPaymentStatus] = useState<
    'success' | 'failure' | null
  >(null);

  if (!hotel) {
    return <Typography>Hotel not found</Typography>;
  }

  const onPaymentSuccess = (response: any) => {
    console.log(response);
    setPaymentStatus('success');
  };

  const onPaymentFailure = () => {
    setPaymentStatus('failure');
  };

  const handlePayment = () => {
    handleRazorpayPayment(hotel.price, onPaymentSuccess, onPaymentFailure);
  };

  const handleCloseSnackbar = () => {
    setPaymentStatus(null);
  };

  return (
    <Paper style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Booking Confirmation
      </Typography>
      <Stack direction="row" spacing={4}>
        <Stack flex={1}>
          <Typography variant="h5">{hotel.name}</Typography>
          <Typography variant="body1">{hotel.location}</Typography>
          <Typography variant="h6" style={{ marginTop: '1rem' }}>
            Price: ${hotel.price}/night
          </Typography>
        </Stack>
        <Stack flex={1} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handlePayment}
            style={{ marginTop: '1rem' }}
          >
            Pay with Razorpay
          </Button>
        </Stack>
      </Stack>
      <Snackbar
        open={paymentStatus === 'success'}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Payment successful! Your booking is confirmed.
        </Alert>
      </Snackbar>
      <Snackbar
        open={paymentStatus === 'failure'}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Payment failed. Please try again.
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default Booking;
