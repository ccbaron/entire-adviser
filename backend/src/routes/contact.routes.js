import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';
import { contactFormRateLimiter } from '../middlewares/rateLimiter.js';

const router = Router();

// Keep route-level protections close to the endpoint definition.
router.post('/', contactFormRateLimiter, submitContactForm);

export default router;