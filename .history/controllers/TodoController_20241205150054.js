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
  static findById(req,res){
    let id = +req.params.id
    todo.findByPk(id)
      .then(reslut => {
        if (result !== null) {
          res.json(result)
        }
      })
  }
}

module.exports = TodoController;
