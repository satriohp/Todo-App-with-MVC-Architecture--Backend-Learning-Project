const todoRoute = require("express").Router();
const TodoController = require("../controllers/TodoController");

todoRoute.get("/", TodoController.getTodos);

todoRoute.post("/add", TodoController.AddTodos);

todoRoute.get("/find/:id", TodoController.findById);

todoRoute.delete("/delete/:id", TodoController.deleteTodo);

todoRoute.put('update:id')
module.exports = todoRoute;
