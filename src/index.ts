import express, { Application, Request, Response } from 'express';

import routes from './routes';

const app: Application = express();
const PORT = 3121;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', routes.imageProcessing);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world' + req.ip);
});

app.listen(PORT, () => {
  console.log('app listening on http://localhost:' + PORT);
});
