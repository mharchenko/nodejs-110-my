export function errorHandler(error, req, res, next) {
  console.log(error);
  res.status(500).json({
    status: 500,
    message: 'Internal server ERROR - mission impossible!!!',
  });
}
