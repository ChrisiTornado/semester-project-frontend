<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Noch keinen Account? <router-link to="/register">Registriere dich hier</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // Simulating a successful login
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        // Add your API request for login here
  
        // Navigate to the TodoList page
        this.$router.push('/todos');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your styles */
  </style>
  
