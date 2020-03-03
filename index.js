const express = require("express");
const server = express();

server.use(express.json());

function checkElementExist(req, res, next) {
  const { id } = req.params;
  const result = projects.find(project => project.id == id);

  if (!result) {
    return res.status(400).json({ erro: "ID don't exist" });
  }

  return next();
}

function countRequest(req, res, next) {
  console.count("Requisições feitas: ");

  return next();
}

server.use(countRequest);

const projects = [];

server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = { id: id, title: title };

  projects.push(project);

  return res.json(projects);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkElementExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.find(project => {
    if (project.id == id) {
      project.title = title;
    }
  });

  return res.json(projects);
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  let count = 0;
  let index = 0;

  projects.find(project => {
    if (project.id == id) {
      index = count;
    }
    count = count + 1;
  });

  projects.splice(index, 1);

  return res.send();
});

server.get("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.find(project => {
    if (project.id == id) {
      const tasks = project.tasks ? project.tasks : [];
      tasks.push(title);
      project.tasks = tasks;
    }
  });

  return res.json(projects);
});

server.listen(3000);
