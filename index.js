const express = require('express');

const { resumeRoutes } = require('./resumeRoutes');

const apiRouter = express.Router();

apiRouter.use('/admin', resumeRoutes);
apiRouter.use('/public', resumeRoutes);

// Compatibility: allow direct GET /api/public/resume while router is mounted
// (resumeRoutes defines GET /resume)
apiRouter.get('/public/resume', (_req, res) => res.redirect('/api/public/resume/')); 


module.exports = { apiRouter };

