import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3121;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', routes.imageProcessing);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world' + req.ip);
});

app.listen(PORT, () => {
  console.log('app listening on http://localhost:' + PORT);
});
