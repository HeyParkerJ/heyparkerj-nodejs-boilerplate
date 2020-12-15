import 'dotenv/config';
import { fetchMatchups, fetchRosters, fetchUsers } from './http/index';
import { performScoreCalculations } from './calculations'
import express from 'express';
import cors from 'cors';

const useHttp = process.env.NODE_ENV === 'PROD'
  ? true
  : false;

const app = express();
app.use(cors());

app.get('/isAlive', (req, res) => {
  res.send(true);
});

app.get('/', async (req, res) => {
  res.send('Hi man');
})

app.listen(process.env.PORT, () => {
  console.log('Listening on 3001 now')
})
