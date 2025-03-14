import Joi from 'joi';

export const studentValidSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  year: Joi.number().integer().min(1900).max(2024).required(),
  gender: Joi.string().valid('male', 'female').required(),
  onDuty: Joi.boolean(),
});

export const updateStudentValidSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  year: Joi.number().integer().min(1900).max(2024),
  gender: Joi.string().valid('male', 'female'),
  onDuty: Joi.boolean(),
});
