// 404 handler
const notFound = (req, res) => {
  return res.json("not found").status(400);
};

module.exports = notFound;
