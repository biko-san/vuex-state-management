export default {
  DELETE_TASK: (state, taskId) => {
    state.Todos = state.Todos.filter(Todo => {
      return Todo.id !== taskId;
    });
  },
  ADD_TODOS: (state, tasks) => {
    state.Todos = [...state.Todos, ...tasks];
  },
  ADD_TASK: (state, task) => {
    state.Todos = [...state.Todos, task];
  }
};
