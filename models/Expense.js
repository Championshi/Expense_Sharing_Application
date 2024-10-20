// const mongoose = require('mongoose');

// const participantSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     amount: { type: Number, required: true },
// });

// const expenseSchema = new mongoose.Schema({
//     description: { type: String, required: true },
//     amount: { type: Number, required: true },
//     paidBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Ensure this is an ObjectId
//     splitMethod: { type: String, required: true, enum: ['equal', 'exact', 'percentage'] }, // Add this line
//     participants: [participantSchema],
// }, { timestamps: true });

// const Expense = mongoose.model('Expense', expenseSchema);
// module.exports = Expense;

const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true }
});

const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    paidBy: { type: mongoose.Schema.Types.ObjectId, required: true },
    splitMethod: { type: String, required: true },
    participants: [participantSchema] // Ensure this is correctly defined
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense; // Export the Expense model
