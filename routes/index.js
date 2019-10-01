var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const TODO_DB="mongodb+srv://buiquangha250199:quangha@cluster0-xgwjq.mongodb.net/workspace?retryWrites=true&w=majority";

mongoose.connect(TODO_DB, { useNewUrlParser: true });

var todoSchema = mongoose.Schema({
    	'name': String,
    	'status': Boolean
    });

var Todo = mongoose.model('Todo', todoSchema);

var checkTodoExist = function (todoName) {
	Todo.find({'name': todoName}, (err, data) => {

		if(data != null) return true;

		return false;

	});
}


/* GET home page. */
router.get('/', function(req, res, next) {
	let list = Todo.find({}, '-_id name status', function (err, docs) {

	var listTodo = [];

    docs.forEach(function(doc) {
      listTodo.push(doc);
    });

	res.render('index', { listTodo });

	});
});

router.post("/addTodo", function (req, res) {
	Todo.find({'name': req.body.newTodoName}, (err, data) => {
		if(data.length != 0) {
			console.log(data.length);
		} else {
			let todo = new Todo({'name': req.body.newTodoName, 'status':false});
			todo.save();
		}

		res.redirect('back');
	});
	
});

router.post("/editTodo", function (req, res) {

	Todo.findOneAndUpdate({'name': req.body.editName },
		{'name': req.body.nameEditted}, {new: true}, 
		(err, data) => {
			res.redirect('back');
		});
	
});

router.post("/removeTodo", function (req, res) {

	Todo.findOneAndRemove({'name': req.body.deleteName }, 
		(err, data) => {
			res.redirect('back');
		});
	
});

router.post("/done", function (req, res) {
let status = false;

if(req.body.status == 'on') status = true;

Todo.findOneAndUpdate({'name': req.body.checkName },
		{'status': status}, {new: true}, 
		(err, data) => {
			res.redirect('back');
		});
	
});

router.get("/test/:name", function (req, res) {
	Todo.find({'name': req.params.name}, (err, data) => {

		res.send('Name: ' + req.params.name + '; Result: ' + (data!=null));

	});
	
});

module.exports = router;
