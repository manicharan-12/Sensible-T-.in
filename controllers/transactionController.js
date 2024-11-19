const asyncHandler = require('express-async-handler');
const Transaction = require('../models/Transaction');

// Create transaction
const createTransaction = asyncHandler(async (req, res) => {
  const { amount, transaction_type, user } = req.body;
  
  const transaction = await Transaction.create({
    amount,
    transaction_type,
    user
  });

  res.status(201).json({
    transaction_id: transaction._id,
    amount: parseFloat(transaction.amount),
    transaction_type: transaction.transaction_type,
    status: transaction.status,
    user: transaction.user,
    timestamp: transaction.timestamp
  });
});

// Get all transactions for a user
const getTransactions = asyncHandler(async (req, res) => {
  const { user_id } = req.query;
  console.log(user_id);
  
  const transactions = await Transaction.find({ user: user_id });
  
  res.json({
    transactions: transactions.map(t => ({
      transaction_id: t._id,
      amount: parseFloat(t.amount),
      transaction_type: t.transaction_type,
      status: t.status,
      timestamp: t.timestamp
    }))
  });
});

// Update transaction status
const updateTransaction = asyncHandler(async (req, res) => {
  const { status } = req.body;
  
  const transaction = await Transaction.findByIdAndUpdate(
    req.params.transaction_id,
    { status },
    { new: true }
  );

  if (!transaction) {
    res.status(404);
    throw new Error('Transaction not found');
  }

  res.json({
    transaction_id: transaction._id,
    amount: parseFloat(transaction.amount),
    transaction_type: transaction.transaction_type,
    status: transaction.status,
    timestamp: transaction.timestamp
  });
});

// Get transaction by ID
const getTransactionById = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.transaction_id);

  if (!transaction) {
    res.status(404);
    throw new Error('Transaction not found');
  }

  res.json({
    transaction_id: transaction._id,
    amount: parseFloat(transaction.amount),
    transaction_type: transaction.transaction_type,
    status: transaction.status,
    timestamp: transaction.timestamp
  });
});

module.exports = {
  createTransaction,
  getTransactions,
  updateTransaction,
  getTransactionById
};