const express = require('express');

const ctrlTodo = require('../controllers/todo');
const router = express.Router();

router.get('/todo', ctrlTodo.todoRead);

module.exports = router;