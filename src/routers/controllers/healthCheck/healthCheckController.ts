import { Router } from 'express';

import HealthCheckMiddleware from '../../middlewares/healthCheck/healthCheckMiddleware'

const router: Router = Router();

const healthCheckMiddleware = new HealthCheckMiddleware();

router.get('/health', healthCheckMiddleware.get);

export default router;