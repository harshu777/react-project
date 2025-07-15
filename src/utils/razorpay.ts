
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

interface Razorpay {
  open(): void;
  on(event: string, callback: () => void): void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => Razorpay;
  }
}

export const handleRazorpayPayment = (
  amount: number,
  onSuccess: (response: any) => void,
  onFailure: () => void
) => {
  const options: RazorpayOptions = {
    key: 'rzp_test_your_key_here', // Replace with your test key
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    name: 'Travel Booking',
    description: 'Hotel Booking',
    image: '/logo512.png',
    handler: (response) => {
      onSuccess(response);
    },
    prefill: {
      name: 'Test User',
      email: 'test.user@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Test Address',
    },
    theme: {
      color: '#3399cc',
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

  rzp.on('payment.failed', () => {
    onFailure();
  });
};
