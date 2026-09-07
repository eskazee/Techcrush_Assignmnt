import { Router } from 'express';
import db from '../db.js';

const router = Router();

const insertSubmission = db.prepare(
  'INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)'
);
const listSubmissions = db.prepare(
  'SELECT id, name, email, message, created_at FROM contact_submissions ORDER BY created_at DESC'
);

router.post('/', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are all required.' });
  }

  const result = insertSubmission.run(name.trim(), email.trim(), message.trim());
  res.status(201).json({ id: result.lastInsertRowid, name, email, message });
});

router.get('/', (_req, res) => {
  res.json(listSubmissions.all());
});

export default router;
