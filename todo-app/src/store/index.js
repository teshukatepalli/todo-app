import router from "../router";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: localStorage.getItem("user") || null,
    products: [],
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    updateContent(state, product) {
      state.products.push(product);
    },
    clear(state) {
      localStorage.clear();
      state.user = null;
      router.push("/login");
    },
  },
  actions: {
    setUser(context, user) {
      context.commit("updateUser", user);
      router.push("/");
    },
    removeUser(context) {
      context.commit("updateUser", null);
    },
    addContent(context, product) {
      context.commit("updateContent", product);
    },
    logout(context) {
      context.commit("clear");
    },
  },
  getters: {
    isLoggedIn: (state) => state.user,
  },
});
