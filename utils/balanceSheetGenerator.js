const generateBalanceSheet = (expenses) => {
    const balanceSheet = {};
  
    expenses.forEach(expense => {
      const payerId = expense.paidBy._id.toString();
  
      if (!balanceSheet[payerId]) {
        balanceSheet[payerId] = 0;
      }
  
      expense.participants.forEach(participant => {
        const participantId = participant.user._id.toString();
  
        if (!balanceSheet[participantId]) {
          balanceSheet[participantId] = 0;
        }
  
        // Payer gets a positive balance, participants get a negative balance
        if (payerId === participantId) {
          balanceSheet[payerId] += participant.amount;
        } else {
          balanceSheet[payerId] += participant.amount;
          balanceSheet[participantId] -= participant.amount;
        }
      });
    });
  
    return balanceSheet;
  };
  
  module.exports = generateBalanceSheet;
  