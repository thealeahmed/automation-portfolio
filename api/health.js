module.exports = function healthHandler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  res.status(200).json({ ok: true, service: 'portfolio-api' });
};
