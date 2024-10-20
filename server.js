// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./config/db');

// const userRoutes = require('./routes/user');
// const expenseRoutes = require('./routes/expense');

// const app = express();
// app.use(express.json());

// // Connect to the database
// connectDB();

// // Routes
// app.use('/users', userRoutes);
// app.use('/expenses', expenseRoutes);

// // Server port setup
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose'); // Import mongoose

const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Define Participant Schema
const participantSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true }
});

// Define Expense Schema
const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    paidBy: { type: mongoose.Schema.Types.ObjectId, required: true },
    splitMethod: { type: String, required: true },
    participants: [participantSchema] // Define participants as an array of participantSchema
});

// Create Expense Model with check
const Expense = mongoose.models.Expense || mongoose.model('Expense', expenseSchema);

// Example route to create an expense
app.post('/expenses', async (req, res) => {
    const { description, amount, paidBy, splitMethod, participants } = req.body;

    try {
        const newExpense = new Expense({ description, amount, paidBy, splitMethod, participants });
        await newExpense.save();
        res.status(201).json({ message: 'Expense added successfully', expense: newExpense });
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ message: 'Error adding expense', error });
    }
});

// Example route to get all expenses
app.get('/expenses', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ message: 'Error fetching expenses', error });
    }
});

// Routes
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

// Server port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
