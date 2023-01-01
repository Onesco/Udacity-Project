import { Response, Router, Request } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('hello world from ' + `${req.query.j}`);
});

export default router;
