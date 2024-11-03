export const environment = {
  production: false,
  productApiRestUrl: 'http://localhost:4000/api',
  apiUrl: 'http://localhost:3500/api', // URL base para la API
  endpoints: {
    users: 'users',
    products: 'products',
    orders: 'orders',
    uploads: 'uploads',
  },
  defaultLimit: 5,
  defaultSkip: 1,
};
