import Joi from "joi";

import { typeList } from "../constants/contacts.js";

export const contactAddSchema = Joi.object({
    name: Joi.string().min(6).max(16).required().messages({
        'string.base': 'Name should be a string',
        'string.min': 'Name should have at least {#limit} characters',
        'string.max': 'Name should have at most {#limit} characters',
        'any.required': 'Name is required',
      }),
    phoneNumber: Joi.string().min(6).max(16).required().messages({
        "any.required": "Phone number must be exist",
    }),
    email: Joi.string().email().min(6).max(16),
    isFavourite: Joi.boolean().required(),
    contactType: Joi.string().min(6).max(16).valid(...typeList).required(),
    photo: Joi.string(),
});

export const contactPatchSchema = Joi.object({
    name: Joi.string().min(6).max(16).messages({
        'string.base': 'Name should be a string',
        'string.min': 'Name should have at least {#limit} characters',
        'string.max': 'Name should have at most {#limit} characters',
      }),
    phoneNumber: Joi.string().min(6).max(16),
    email: Joi.string().email().min(6).max(16),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().min(6).max(16).valid(...typeList),
    photo: Joi.string(),
});