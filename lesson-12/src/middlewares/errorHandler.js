import createHttpError from 'http-errors';

// export function errorHandler(error, req, res, next) {
//   // console.log(error);

//   if (createHttpError.isHttpError(error) === true) {
//     return res
//       .status(error.status)
//       .json({ status: error.status, message: error.message });
//   }
//   res.status(500).json({
//     status: 500,
//     message: 'Internal server ERROR - mission impossible!!!',
//   });
// }
export function errorHandler(error, req, res, next) {
  console.error('Application error:', error);
  if (createHttpError.isHttpError(error)) {
    return res
      .status(error.status)
      .json({ status: error.status, message: error.message });
  }
  res.status(500).json({
    status: 500,
    message: `Internal server ERROR - mission impossible!!! Reason: ${error.message}`,
  });
}
