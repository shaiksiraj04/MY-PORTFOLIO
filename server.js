const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { notFound } = require('./middleware/notFound');
const { errorHandler } = require('./middleware/errorHandler');

const { apiRouter } = require('./routes');

const app = express();

// Security & logging
app.use(helmet());
app.use(morgan('combined'));

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map(s => s.trim()) : true,
    credentials: true
  })
);

// Body parsing
app.use(express.json({ limit: process.env.JSON_LIMIT || '1mb' }));
app.use(express.urlencoded({ extended: true, limit: process.env.URLENCODED_LIMIT || '1mb' }));

// Health
app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, name: 'Mahammed Siraj Portfolio API' });
});

// API routes
app.use('/api', apiRouter);

// 404 + error handler
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Portfolio API listening on port ${port}`);
});

