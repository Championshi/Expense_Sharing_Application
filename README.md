Overview
The Daily Expenses Sharing Application allows users to manage their expenses and split them with others. Users can add expenses and choose how to divide them among participants. The application supports three splitting methods: equal split, exact amounts, and percentages. Additionally, users can download a balance sheet of their expenses.

Table of Contents
Features
Technologies Used
Setup Instructions
Usage
API Endpoints
Conclusion

Features
User Management:
Create user accounts with email, name, and mobile number.
Retrieve user details.
Expense Management:
Add expenses with descriptions and amounts.
Split expenses using three methods:
Equal Split: Divide the total equally among all participants.
Exact Amounts: Specify exact amounts owed by each participant.
Percentage Split: Specify the percentage each participant owes (ensuring they add up to 100%).
Balance Sheet:
Display individual expenses for each user.
Display overall expenses for all users.
Download balance sheets in a user-friendly format.
Technologies Used
Node.js
Express.js
MongoDB (using Mongoose)
dotenv (for environment variables)
Setup Instructions
Clone the Repository

bash
Copy code
git clone https://github.com/Championshi/Expense_Sharing_Application.git
Navigate to the Project Directory

bash
Copy code
cd Expense_Sharing_Application
Install Dependencies Make sure you have Node.js installed. Run the following command to install the required packages:

bash
Copy code
npm install
Set Up Environment Variables Create a .env file in the root of your project and add your MongoDB connection string:

plaintext
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Start the Server Run the following command to start the server:

bash
Copy code
npm start
The server should now be running at http://localhost:5000.

Usage
User Management
Create User

Endpoint: POST /users
Body:
json
Copy code
{
  "email": "user@example.com",
  "name": "User Name",
  "mobile": "1234567890"
}
Get User Details

Endpoint: GET /users/:userId
Expense Management
Add Expense

Endpoint: POST /expenses
Body:
json
Copy code
{
  "description": "Dinner with friends",
  "amount": 3000,
  "paidBy": "userId",
  "splitMethod": "equal", // or "exact", "percentage"
  "participants": [
    { "userId": "userId1", "amount": 1000 },
    { "userId": "userId2", "amount": 1000 },
    { "userId": "userId3", "amount": 1000 }
  ]
}
Get Individual User Expenses

Endpoint: GET /expenses/user/:userId
Get Overall Expenses

Endpoint: GET /expenses
Download Balance Sheet

Endpoint: GET /expenses/balance-sheet
Conclusion
This application provides a simple yet powerful way to manage daily expenses among friends or family. By following the setup instructions, you can easily get the application running and start managing your expenses. For any further questions or contributions, feel free to reach out or create an issue in the GitHub repository.

