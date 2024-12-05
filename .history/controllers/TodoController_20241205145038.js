const { todo } = require("../models");

class TodoController {
  static getTodos(req, res) {
    todo
      .findAll(
        {where: {
          id:1
        }}
      )
      .then((todos) => {
        res.json(todos);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static AddTodos(req, res) {
    const { task, status } = req.body;

    todo
      .create({
        task,
        status,
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}

module.exports = TodoController;
