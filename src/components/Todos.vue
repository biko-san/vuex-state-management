<template>
	<div class="todos-container">
		<div v-for="Todo in Todos" :key="Todo.id">
			<TodoItem :todo="Todo" />
		</div>
	</div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import { mapState } from "vuex";

export default {
	name: "Todos",
	computed: {
		...mapState(["Todos"]),
	},
	components: { TodoItem },
};
</script>

<style scoped></style>
