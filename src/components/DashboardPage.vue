<template>
  <div>
    <h1>Dashboard</h1>
    <h4>The logged in user details here</h4><br>
    <p> {{user.name}}</p>
    <p> {{user.email}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: this.auth.user
    }
  },
  created() {
    // console.log(this.auth.user);
  }
}
</script>