import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.post({
    baseURL: 'http://localhost:3000/api/v1/contacts',
  }),
  options
);

export default client;