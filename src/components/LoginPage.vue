<template>

  <main>
    <div class="px-4 py-6 sm:px-0">

      <div class="p-4 text-center text-gray-400 border-4 border-gray-200 border-dashed rounded-lg  h-96" v-if="!this.showLogin">
        You are already logged in..
        <router-link
            to="/dashboard"
            class="text-indigo-600 underline hover:text-indigo-500"
        >Dashboard</router-link
        >


      </div>
      <div v-else
          class="p-4 text-center text-gray-400 border-4 border-gray-200 border-dashed rounded-lg  h-96"
      >
        <h1>Login</h1>
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="user.email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="user.password">
        </div>
        <button @click="login">Login</button>
        <div>{{message}}</div>
      </div>
    </div>
  </main>


  <div>

  </div>
</template>

<script>
import Auth from '../Auth.js';
import axios from "axios";

export default {
  data() {
    return {
      showLogin: !this.check(),
      message:'',
      user: {
        email: '',
        password: '',

      }
    };
  },

  watch:{
    showMenu(){
      console.log('showmenu');
      this.check();
    }
  },


  methods: {
    login() {
      axios.post('/api/auth/login', this.user)
          .then(({data}) => {

            Auth.login(data.access_token, data.user);

            this.$router.push('/');
          })
          .catch((error) => {
            this.message = error;
            console.log(error);
          });
    },

    check(){
      if (Auth.check()){
        this.showLogin = false;
        return true;
      }
      this.showLogin = true;
      return false;
    }
  }
}
</script>