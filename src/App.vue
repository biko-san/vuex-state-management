<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from "@/components/Header";
import { mapActions } from "vuex";
import axios from "axios";

export default {
	name: "app",
	components: {
		Header,
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
