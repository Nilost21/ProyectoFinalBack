export default function errorHandler(err, req, res, next) {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    error: {
      success: false,
      statusCode,
      message,
      path: req.path
    }
  });
};
