import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
  res.send("Backend is working 🚀 Request received!");
});

export default router;