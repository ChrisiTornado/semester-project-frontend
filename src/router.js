import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import TodoList from "@/components/TodoList.vue";


const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/todos',
      name: 'TodoList',
      component: TodoList
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
