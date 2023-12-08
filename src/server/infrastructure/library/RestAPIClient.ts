import axios from 'axios';
import { getServerEnv } from '@/server/shared/config';

const { API_BASE_URL } = getServerEnv;

export const restAPIClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3_000,
  headers: {
    'Content-Type': 'application/json',
  },
});
