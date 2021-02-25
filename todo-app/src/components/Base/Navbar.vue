<template>
  <div class="row header">
    <div class="col-12">
      Interface Matters
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "Navbar",
  // computed: {
  //   ...mapState({
  //     user: (state) => state.user,
  //   }),
  // },
};
</script>
<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 87px;
  background-color: #fff;
  padding: 1em 0em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
.logo {
  padding: 0em 1em;
}
</style>
