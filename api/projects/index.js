const { getProjectsByCategory } = require('../../lib/projects');

module.exports = function projectsHandler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  res.status(200).json(getProjectsByCategory(req.query.category));
};
