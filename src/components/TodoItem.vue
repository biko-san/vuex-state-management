<template>
	<div class="todo-item" :class="{ 'is-complete': todo.completed }">
		<p>
			<input type="checkbox" @change="markComplete()" />
			{{ todo.title }}
			<button class="del" @click="removeTask(todo)">x</button>
		</p>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
	props: {
		todo: Object,
	},
	methods: {
		...mapActions(["deleteTask"]),
		markComplete() {
			this.todo.completed = !this.todo.completed;
		},
		removeTask(todo) {
			axios
				.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
				.then(() => this.deleteTask(todo))
				.catch((error) => console.log(error));
		},
	},
};
</script>

<style scoped>
.todo-item {
	background: #f4f4f4;
	padding: 10px;
	border-bottom: 1px #ccc dotted;
}
.is-complete {
	text-decoration: line-through;
}
.del {
	background: #ff0000;
	color: #fff;
	border: none;
	padding: 5px 9px;
	border-radius: 50%;
	cursor: pointer;
	float: right;
}
</style>
