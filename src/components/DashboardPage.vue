<template>
  <div>
    <p>Name: {{user.name}}</p>
    <p>Email: {{user.email}}</p>
  </div>
</template>
<script>

import Auth from '../Auth';
export default {
  data () {
    return {
      user: Auth.user
    }
  },
  created() {
    // console.log(this.auth.user);
  }
}
</script>