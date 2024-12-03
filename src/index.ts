import 'dotenv/config';
import express, { json, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import userRouter from './routers/userRouter';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

const app = express();
app.use(cors());
app.use(json());

app.get('/health', (req: Request, res: Response) => { res.send("I'm OK!").status(200) })

app.use(userRouter)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
})