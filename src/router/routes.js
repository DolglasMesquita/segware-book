
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'index', meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    name: 'login' 
  },
  {
    path: '/cadastrar',
    component: () => import('pages/Cadastrar.vue') 
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
