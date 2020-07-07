export default {
	deleteTask: ({ commit }, Todo) => {
		let taskId = Todo.id;
		commit("DELETE_TASK", taskId);
	},
	addTask: ({ commit }, task) => {
		commit("ADD_TASK", task);
	},

	fetchTodos: ({ commit }, payload) => {
		commit("ADD_TODOS", payload);
	},
};
