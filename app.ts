import express, { Request, Response, NextFunction } from 'express';

import apiController from './src/routers/controllers/api/apiController';

interface ErrorWithStatus extends Error{
  status: number;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';
const PORT: number = parseInt(process.env.EXPRESS_PORT || '3001');

const app: express.Application = express();

app.set('port', PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiController);

app.use((req: Request, res: Response, next: NextFunction) => {
  let err = new Error() as ErrorWithStatus;
  err.status = 404;
  next(err);
});

app.use((err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
  res.locals.error = NODE_ENV === 'development' ? err : {};
  res.status(err.status || 500).send();
  next();
});

app.listen(app.get('port'), () => {
  console.log('Server is listening on port :', app.get('port'));
});
