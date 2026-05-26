function errorHandler(err, _req, res, _next) {
  // eslint-disable-next-line no-console
  console.error(err);

  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ ok: false, message });
}

module.exports = { errorHandler };

