import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export function isValidId(req, res, next) {
  const { id } = req.params;

  if (isValidObjectId(id) !== true) {
    return next(new createHttpError.BadRequest('Ooo-ps! ID is not valid!'));
  }

  //   console.log({ id });
  next();
}
