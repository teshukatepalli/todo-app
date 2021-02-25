<template>
  <div class="sidebar">
    <ul>
      <template v-for="(option, index) in options" :key="index">
        <li :class="setActive(option.name)">
          <router-link :to="option.link">
            {{ option.name }}
          </router-link>
        </li>
      </template>
      <li @click="logout()">Log Out</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Sidebar",
  components: {},
  data() {
    return {
      options: [
        {
          name: "Home",
          link: "/",
          img_slug: "",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart,
      profile: (state) => state.profile,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    setActive(name) {
      return this.$route.name === name ? "active" : "";
    },
  },
};
</script>
<style scoped>
.sidebar {
  height: 100vh;
  padding-top: 100px;
}
.sidebar ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
.sidebar ul li {
  margin: 0.5em 0em;
  padding: 5px;
  /* border: 1px solid #333; */
  display: flex;
  align-items: center;
  transition: 0s all ease-in-out;
  /* justify-content: center; */
  cursor: pointer;
}
.sidebar ul li a {
  text-decoration: none;
  color: #333;
  padding: 10px;
}
.sidebar ul .active {
  background-color: #7db719;
  border-radius: 10px;
  transition: 0.3s all ease-in-out;
}
</style>
