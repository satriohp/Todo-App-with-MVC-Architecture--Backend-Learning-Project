const { todo } = require("../models");

class TodoController {
  static getTodos(req, res) {
    todo
      .findAll()
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
  static findById(req, res) {
    let id = +req.params.id;
    todo
      .findByPk(id)
      .then((result) => {
        if (result !== null) {
          res.json(result);
        } else {
          res.json({
            message: "Todo not found!",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static deleteTodo(req, res) {
    let id = +req.params.id;

    todo
      .destroy({
        where: {
          id,
        },
      })
      .then.json((result) => {
        if (result === 1) {
          res.json({
            message: "Todo has been deleted!"
          })
        } else {
          res.json({
            
          })
        }
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static updateTodo(req, res) {}
}

module.exports = TodoController;
