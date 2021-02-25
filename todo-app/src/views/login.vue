<template>
  <div class="login">
    <div class="text-center">
      <h4>LOGIN</h4>
      <br />
      <input type="text" placeholder="Username" v-model="user.username" />
      <br />
      <input type="password" placeholder="Password" v-model="user.password" />
      <br />
      <button class="btn btn-success btn-lg" @click="submit()">SUBMIT</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      if (this.user.username && this.user.password) {
        localStorage.setItem("user", JSON.stringify(this.user));
        this.$router.push("/");
      } else {
        alert("Please enter username && password");
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.login
  display flex
  align-items center
  justify-content center
  width 100%
  height 100vh
</style>
