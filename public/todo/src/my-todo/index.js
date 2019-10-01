const componentName = "myTodo";
module.exports = componentName;
const myService = require('../my-service');

angular.module(componentName, [myService])
	.component("todoList", {
		bindings: {
			list: '='
		},
		controller: myTodoController,
		controllerAs: "self",
		template: require("./template.html"),
		style: require("./style.css")
	});

function myTodoController(myService) {
	console.log("todo works!");
	let self = this;

	self.message = myService.message();

	self.removeTodo = function(id) {
		
		if(self.todoList.length === 1) self.todoList.pop();

		self.todoList.splice(id,1);
	}

	self.addNewTodo = function(name) {
		var newTodo = {'id': self.todoList.length,'name': name, 'status': false};
		self.todoList.push(newTodo);
		todoDb.addTodo(newTodo);
	}


}