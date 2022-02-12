import { Request, Response } from 'express';

class HealthCheckMiddleware {
  get = (req: Request, res: Response): void => {
    res.status(200).send();
  }
}

export default HealthCheckMiddleware;