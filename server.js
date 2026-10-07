const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const projectsPath = path.join(ROOT, 'data', 'projects.json');
const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'portfolio-api' });
});

app.get('/api/projects', (req, res) => {
  const category = typeof req.query.category === 'string'
    ? req.query.category.trim().toLowerCase()
    : '';
  res.json(category
    ? projects.filter((project) => project.category.toLowerCase().includes(category))
    : projects);
});

app.get('/api/projects/:slug', (req, res) => {
  const project = projects.find((item) => item.slug === req.params.slug);
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
