const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(30);
const completed = Joi.boolean();

const createTaskSchema = Joi.object({
  title: title.required(),
  completed: completed.optional(),
});

const updateTaskSchema = Joi.object({
  title: title.optional(),
  completed: completed.optional(),
});

const getTaskSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTaskSchema, updateTaskSchema, getTaskSchema }
