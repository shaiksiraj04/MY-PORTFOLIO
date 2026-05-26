const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const router = express.Router();

const uploadsDir = path.join(__dirname, '..', 'uploads');
const resumePath = path.join(uploadsDir, 'resume.pdf');

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (_req, _file, cb) {
    // Always overwrite single file
    cb(null, 'resume.pdf');
  }
});

const upload = multer({
  storage,
  fileFilter: function (_req, file, cb) {
    // PDF only
    const isPdf = file.mimetype === 'application/pdf' || file.originalname.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
      cb(new Error('Resume must be a PDF file.'));
      return;
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Admin upload: replace the previous resume
router.post('/resume', upload.single('resume'), (_req, res) => {
  res.status(200).json({ ok: true, message: 'Resume uploaded successfully.' });
});

// Public download
router.get('/resume', (req, res) => {
  if (!fs.existsSync(resumePath)) {
    return res.status(404).json({ ok: false, message: 'Resume not uploaded yet.' });
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
  return res.sendFile(resumePath);
});

// Allow router export name used in index.js
const resumeRoutes = router;

module.exports = { resumeRoutes };

