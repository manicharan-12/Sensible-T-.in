const express = require('express');
const router = express.Router();
const { 
  createTransaction,
  getTransactions,
  updateTransaction,
  getTransactionById
} = require('../controllers/transactionController');
const {
  validateCreateTransaction,
  validateUpdateTransaction
} = require('../middleware/validate');

router.post('/', validateCreateTransaction, createTransaction);
router.get('/', getTransactions);
router.put('/:transaction_id', validateUpdateTransaction, updateTransaction);
router.get('/:transaction_id', getTransactionById);

module.exports = router;