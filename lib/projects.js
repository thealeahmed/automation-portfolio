const projects = require('../data/projects.json');

function getProjectsByCategory(category) {
  const normalizedCategory = typeof category === 'string'
    ? category.trim().toLowerCase()
    : '';

  return normalizedCategory
    ? projects.filter((project) => project.category.toLowerCase().includes(normalizedCategory))
    : projects;
}

function findProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

module.exports = { findProjectBySlug, getProjectsByCategory };
