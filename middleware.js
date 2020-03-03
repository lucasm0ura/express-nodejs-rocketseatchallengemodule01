function checkElementExist(req, res, next) {
  const { id } = req.params;

  let result = projects.find(project => project.id == id);
  if (!result) {
    return res.status(400).json({ erro: "ID don't exist" });
  }
  return next();
}
