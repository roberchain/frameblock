const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_'
  : 'pk_test_';

export default STRIPE_PUBLISHABLE;
