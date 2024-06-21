<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Bereits einen Account? <router-link to="/">Hier einloggen</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      handleRegister() {
        // Registration logic goes here
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        // Add your API request for registration here
  
        // Simulating a successful registration
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your styles */
  </style>
  
