const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const source = path.join(projectRoot, 'assets');
const destination = path.join(projectRoot, 'dist', 'assets');

fs.cpSync(source, destination, { recursive: true });
console.log('Copied portfolio assets into dist/assets.');
