const express = require('express');
const router = express.Router();
const { createBin, getBins, updateBin, deleteBin } = require('../controllers/binController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getBins)
    .post(protect, createBin);

router.route('/:id')
    .put(protect, updateBin)
    .delete(protect, deleteBin);

module.exports = router;
