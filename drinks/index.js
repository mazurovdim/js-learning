import express from 'express'
import { getDrinks } from '../data/index.js';
const router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.json(getDrinks())
});

// define the about route
router.get('/about', function(req, res) {
  res.end('About Drinks');
});

export default router
