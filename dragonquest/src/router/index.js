import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SigninView from "../views/SigninView.vue";
import SignupView from "../views/SignupView.vue";
import EditView from "../views/EditView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	} /*
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ /*'../views/AboutView.vue')*/,
	/* } */
	{
		path: `/login`,
		name: `login`,
		component: SigninView,
	},
	{
		path: `/signup`,
		name: `signup`,
		component: SignupView,
	},
	{
		path: "/edit",
		name: "edit",
		component: EditView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
