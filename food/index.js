import express from 'express'
import { getFood } from '../data/index.js';
const router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.json(getFood());
});

// define the about route
router.get('/about', function(req, res) {
  res.end('About Food');
});

export default router
