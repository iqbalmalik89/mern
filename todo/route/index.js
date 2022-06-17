const express = require('express');

const controller = require("../controller");

const router = express.Router();

router.get('/api/todos',controller.getAllTodos);

router.post('/api/todo',controller.saveTodo);

router.get('/api/todo/:id',controller.getTodo);

router.put('/api/todo/:id',controller.updateTodo);

module.exports = router;
