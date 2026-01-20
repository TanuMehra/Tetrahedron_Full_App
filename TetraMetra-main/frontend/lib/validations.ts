// lib/validations.ts
import Joi from 'joi';

export const blogValidationSchema = Joi.object({
  //id string or num optional
  id: Joi.alternatives().try(Joi.string().allow(''), Joi.number()).optional(),
  image: Joi.alternatives().try(
    Joi.object({
      url: Joi.string().allow('').optional(),
      publicId: Joi.string().allow('').optional(),
      alt: Joi.string().allow('').optional()
    }),
    Joi.string().uri().allow('').optional() // or just a string URL
  ).optional(),
  
  title: Joi.string().required(),
  slug: Joi.string().required(),
  sections: Joi.array().items(Joi.object({
    heading: Joi.string().allow('').optional(),
    content: Joi.array().items(Joi.allow('').optional()).allow('').optional(),
    // Optional image object with url, publicId, and alt text or image string
    image: Joi.alternatives().try(
      Joi.object({
        url: Joi.string().allow('').optional(),
        publicId: Joi.string().allow('').optional(),
        alt: Joi.string().allow('').optional()
      }),
      Joi.string().uri().allow('').optional() // or just a string URL
    ).optional()
  })).optional(),
  cta: Joi.object({
    buttonText: Joi.string().allow('').optional(),
    text: Joi.string().allow('').optional()
  }).optional(),
  status: Joi.string().valid('draft', 'published', 'archived').default('published'),
  featured: Joi.boolean().default(false),
  tags: Joi.array().items(Joi.string().allow('')),
  category: Joi.string().allow('').optional(),
  metaDescription: Joi.string().allow('').optional()
});
