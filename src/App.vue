<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/#login">Login</router-link>
      <router-link to="/#register">Register</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import MyReports from './components/MyReports.vue';
import Auth from './Auth';

export default {
  components: {
  },
  data() {
    return {
      //loggedUser: false,
      test: 'test!'

    };
  },
  mounted() {
    console.log('this.$router');
    console.log(this.$router);
  },
  methods: {

    logout() {

      this.axios.post('http://127.0.0.1:8001/api/logout')
          .then(({data}) => {
            Auth.logout(); //reset local storage
            this.$router.push('/login');
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
