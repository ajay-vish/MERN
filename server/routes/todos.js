const express = require('express');
const router = express.Router();
const { Todo } = require('../models/Todo');

router.post('/add', (req, res) => {
	const todo = new Todo(req.body);
	Todo.addTodo(todo, (err, Todo) => {
		if (err)
			res
				.status(200)
				.json({ success: false, msg: 'Failed to add todo', err: err });
		else {
			res
				.status(200)
				.json({ success: true, msg: 'Todo added successfully', Todo: Todo });
		}
	});
});

router.get('/', (req, res) => {
	Todo.getTodos((err, Todo) => {
		if (err)
			res
				.status(200)
				.json({ success: false, msg: 'Failed to get todos', err: err });
		else {
			res
				.status(200)
				.json({ success: true, msg: 'Fetching successful', Todo: Todo });
		}
	});
});

router.get('/get/:id', (req, res) => {
	const u_id = req.params.id;
	Todo.getTodoByUId(u_id, (err, Todo) => {
		if (err)
			res
				.status(200)
				.json({ success: false, msg: 'Failed to get todos', err: err });
		else {
			res
				.status(200)
				.json({ success: true, msg: 'Fetching successful', Todo: Todo });
		}
	});
});

router.patch('/patch/:id', (req, res) => {
	const _id = req.params.id;
	Todo.updateTodo(_id, (err, Todo) => {
		if (err)
			res
				.status(200)
				.json({ success: false, msg: 'Failed to update todo', err: err });
		else {
			res
				.status(200)
				.json({ success: true, msg: 'Update successful', Todo: Todo });
		}
	});
});

router.patch('/patch/:id', (req, res) => {
	const _id = req.params.id;
	Todo.updateTodo(_id, (err, Todo) => {
		if (err)
			res
				.status(200)
				.json({ success: false, msg: 'Failed to update todo', err: err });
		else {
			res
				.status(200)
				.json({ success: true, msg: 'Update successful', Todo: Todo });
		}
	});
});

router.delete('/:id', (req, res, next) => {
	var _id = req.params.id;
	Todo.deleteTodo(_id, (err, todo) => {
		if (err) {
			res.json({
				success: false,
				msg: 'Error occured while deleting',
				err: err,
			});
		}
		if (todo) {
			res.json({
				success: true,
				msg: 'Todo has been deleted',
			});
		} else {
			res.json({
				success: false,
				msg: 'No Todo for the given ID',
			});
		}
	});
});

module.exports = router;
