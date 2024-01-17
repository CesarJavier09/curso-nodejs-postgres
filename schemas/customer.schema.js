const Joi = require('joi');
const {createUserSchema} = require('./user.schema');

const id = Joi.number().integer();
const name = Joi.string().min(2).max(30);
const lastName = Joi.string();
const phone = Joi.string();
const user = createUserSchema;
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: user.required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
