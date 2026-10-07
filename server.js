const express = require('express');
const path = require('path');
const fs = require('fs');
const { findProjectBySlug, getProjectsByCategory } = require('./lib/projects');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'portfolio-api' });
});

app.get('/api/projects', (req, res) => {
  res.json(getProjectsByCategory(req.query.category));
});

app.get('/api/projects/:slug', (req, res) => {
  const project = findProjectBySlug(req.params.slug);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  return res.json(project);
});

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use('/assets', express.static(path.join(ROOT, 'assets'), { maxAge: 0 }));

if (fs.existsSync(path.join(DIST, 'index.html'))) {
  app.use(express.static(DIST, { maxAge: '1h' }));
  app.get(/.*/, (req, res) => res.sendFile(path.join(DIST, 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.status(503).send('Frontend is not built yet. Run "npm run build" first.');
  });
}

app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});
