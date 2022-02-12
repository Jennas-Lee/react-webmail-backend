import { Router } from 'express';

import healthCheckController from '../healthCheck/healthCheckController';

const router: Router = Router();

router.use('/', healthCheckController);

export default router;