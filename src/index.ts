import express, {Request, Response} from 'express';
import * as dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3121

app.use(express.json());
app.use(express.urlencoded({ extended:true }))

app.get('/', (req: Request, res: Response): void => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log('app listening on port: ' + PORT)
})