export const environmentProd = {
  production: false,
  apiUrl: 'http://localhost:3500/api', // URL base para la API
  endpoints: {
    users: '/users',
    products: '/products',
    orders: '/orders',
  },
  defaultLimit: 5,
  defaultSkip: 1,
};
