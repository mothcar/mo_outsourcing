import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    name: 'home',
    path: "/",
    // component: () => import("./layout/PlaceLayout.vue"),
    component: () => import("./pages/Index.vue"),
    children: [
      {
        name: "home",
        path: "/",
        component: () => import("./pages/Home.vue"),
        props: true,
      },
      {
        name: "Test",
        path: "/test",
        component: () => import("./pages/Test.vue"),
        props: true,
      },
      {
        name: "My",
        path: "/my",
        component: () => import("./pages/My.vue"),
        props: true,
      },
    ]
  },
  {
    path: '/infocenter/',
    name: "infocenter",
    component: () => import("./layout/PublicLayout.vue"),
    children: [
      {
        name: 'main',
        path: "info/:id",
        component: () => import("./pages/PublicCenter.vue"),
      },
      {
        name: 'org',
        path: "/org/",
        component: () => import("./modal/Org.vue"),
      },
    ]
  },
  {
    path: "/detail/",
    name: "detail",
    component: () => import("./layout/PlaceLayout.vue"),
    children: [
      {
        name: 'multi',
        path: "multi",
        component: () => import("./modal/MultiPlace.vue"),
      },
      {
        name: 'place',
        path: "place/:id",
        component: () => import("./modal/PlaceModal.vue"),
      },
      {
        name: 'trade',
        path: "trade",
        component: () => import("./modal/TradeModal.vue"),
      },
      {
        name: 'inner',
        path: "inner/:id",
        component: () => import("./modal/OneDepth.vue"),
      },
      {
        name: 'buy',
        path: "buy",
        component: () => import("./modal/BuyModal.vue"),
      },
      {
        name: 'profile',
        path: "profile/:id",
        component: () => import("./modal/Profile.vue"),
      },
      {
        name: 'addFacility',
        path: "addFacility",
        component: () => import("./modal/AddFacility.vue"),
      },
      {
        name: 'createPost',
        path: "createPost",
        component: () => import("./modal/CreatePost.vue"),
      },
      {
        name: 'signIn',
        path: "signIn",
        component: () => import("./modal/SignIn.vue"),
      },
      {
        name: 'createPost',
        path: "createPost",
        component: () => import("./modal/CreatePost.vue"),
      },
      {
        name: 'editPlace',
        path: "editPlace",
        component: () => import("./modal/EditPlace.vue"),
      },
      {
        name: 'createStreet',
        path: "createStreet/:kind",
        component: () => import("./modal/CreateStreet.vue"),
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
