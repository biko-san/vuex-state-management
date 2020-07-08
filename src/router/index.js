import Vue from "vue";
import VueRouter from "vue-router";
import All from "../views/All.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "All",
		component: All,
	},
	{
		path: "/incomplete",
		name: "Incomplete",
		// route level code-splitting
		// this generates a separate chunk (Incomplete.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "Incomplete" */ "../views/Incomplete.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
