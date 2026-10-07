const { findProjectBySlug } = require('../../lib/projects');

module.exports = function projectHandler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const project = findProjectBySlug(req.query.slug);
  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  res.status(200).json(project);
};
