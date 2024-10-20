const Expense = require('../models/Expense');

// Add a new expense
exports.addExpense = async (req, res) => {
  const { description, amount, paidBy, participants, splitMethod } = req.body;

  try {
    const expense = new Expense({ description, amount, paidBy, participants, splitMethod });

    if (splitMethod === 'equal') {
      const equalShare = amount / participants.length;
      expense.participants.forEach(p => p.amount = equalShare);
    } else if (splitMethod === 'percentage') {
      const totalPercentage = participants.reduce((sum, p) => sum + p.percentage, 0);
      if (totalPercentage !== 100) {
        return res.status(400).json({ message: 'Percentages must add up to 100%' });
      }
      expense.participants.forEach(p => p.amount = (p.percentage / 100) * amount);
    }

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense', error });
  }
};

// Retrieve all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().populate('paidBy').populate('participants.user');
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
};
