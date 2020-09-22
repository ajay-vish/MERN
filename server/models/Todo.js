const mongoose = require('mongoose');
const User = require('./User');
const todoSchema = mongoose.Schema({
	todo: {
		type: String,
		required: true,
	},
	start_date: {
		type: Date,
		required: true,
	},
	end_date: {
		type: Date,
		minglength: 5,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const Todo = (module.exports = mongoose.model('Todo', todoSchema));

module.exports.addTodo = function (newTodo, callback) {
	newTodo.save(callback);
};

module.exports.getTodoByUId = function (u_id, callback) {
	Todo.find({ user: u_id }, callback).populate('user');
};

module.exports.getTodos = function (callback) {
	Todo.find({}, callback).populate('user');
};

module.exports.deleteTodo = function (id, callback) {
	Todo.findOneAndDelete({ _id: id }, callback);
};

module.exports.updateTodo = function (id, updateOps, callback) {
	Todo.findOneAndUpdate(
		{ _id: id },
		{ $set: updateOps },
		{ new: true },
		callback
	);
};
