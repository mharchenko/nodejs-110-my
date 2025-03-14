import createHttpError from 'http-errors';
export function validateBody(schema) {
  return async (req, _res, next) => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      //   console.log(result);
    } catch (error) {
      const errors = error.details.map((detail) => detail.message);
      //   console.log(errors);
      next(new createHttpError.BadRequest(errors));
    }
  };
}
