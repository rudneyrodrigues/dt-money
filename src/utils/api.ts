import axios from 'axios'

export const api = axios.create({
  baseURL:
    'http://localhost:3000/api/' || `https://${process.env.VERCEL_URL}/api/`,
})
