import VueRouter from "vue-router";

const routes = [
  {
    path: "/not-found",
    component: () => import("./pages/NotFound.vue"),
    alias: "*",
  },

  {
    path: "/",
    name: "Dashboard",
    props: {
      default: true,
    },
    components: {
      default: () => import("./pages/Dashboard.vue"),
      sidebarA: () => import("./components/SideBarA.vue"),
      sidebarB: () => import("./components/SideBarB.vue"),
    },
    meta: { requiresAuth: true },
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("./pages/Login.vue"),
  },

  {
    path: "/detail/:id",
    name: "DetailItem",
    props: {
      default: (route) => ({ login: route.query.login }),
    },
    components: {
      default: () => import("./pages/DetailItem.vue"),
      sidebarA: () => import("./components/Ads.vue"),
      sidebarB: () => import("./components/Ads.vue"),
    },
  },

	{
		path: '/order',
		name: 'Order',
		component: () => import("./pages/Order.vue"),
  },
  
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) =>{
	const test = to.matched.some(record=> record.meta.requiresAuth);
	console.log(test);
	console.log("[to]", to, "[from]", from, "[next]", next);
	const login = localStorage.getItem("login");
	if(to.name != 'Login' && !login){
		next({name:"Login"});
	}
	next();
});

export default router;
