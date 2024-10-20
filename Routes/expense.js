
const express = require('express');
const router = express.Router();
const { addExpense, getAllExpenses } = require('../controllers/expenseController');

// POST /expenses: Add a new expense
router.post('/', addExpense);

// GET /expenses: Retrieve all expenses
router.get('/', getAllExpenses);

module.exports = router;

