<template>
	<div id="app">
		<div class="main-app-container">
			<Todos />
			<AddTodo />
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";
import axios from "axios";

export default {
	components: {
		Todos,
		AddTodo,
	},
	methods: {
		...mapActions(["fetchTodos"]),
	},
	created() {
		axios
			.get("https://jsonplaceholder.typicode.com/todos?_limit=6")
			.then((response) => {
				this.fetchTodos(response.data);
			})
			.catch((error) => console.log(error));
	},
};
</script>
<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
.main-app-container {
	margin-top: 20px;
	margin-left: 5vw;
	max-width: 80vw;
}
body {
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1.4;
}
.btn {
	display: inline-block;
	border: none;
	background: #555;
	color: #fff;
	padding: 7px 20px;
	cursor: pointer;
}
.btn:hover {
	background: #666;
}
</style>
