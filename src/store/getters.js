export default {
  completedTasks: state => {
    return state.Todos.filter(todo => todo.completed);
  },
  incompleteTasks: state => {
    return state.Todos.filter(todo => !todo.completed);
  }
};
