const Joi = require('joi');

const createTransactionSchema = Joi.object({
  amount: Joi.number().positive().required(),
  transaction_type: Joi.string().valid('DEPOSIT', 'WITHDRAWAL').required(),
  user: Joi.string().required()
});

const updateTransactionSchema = Joi.object({
  status: Joi.string().valid('COMPLETED', 'FAILED').required()
});

const validateTransaction = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.details[0].message });
  }
};

module.exports = {
  validateCreateTransaction: validateTransaction(createTransactionSchema),
  validateUpdateTransaction: validateTransaction(updateTransactionSchema)
};