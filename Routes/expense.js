
const express = require('express');
const router = express.Router();
const { addExpense, getAllExpenses } = require('../controllers/expenseController');
router.post('/', addExpense);
router.get('/', getAllExpenses);

module.exports = router;

