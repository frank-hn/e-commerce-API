import { Joi } from 'celebrate';

export default Joi.object().keys({
  review: Joi.string().lowercase().min(3).max(100)
    .trim().required(),
  rating: Joi.number().integer().min(1).max(5)
    .required()
});
