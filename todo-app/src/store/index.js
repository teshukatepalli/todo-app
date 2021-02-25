import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    content: {},
  },
  mutations: {
    updateUser(state, user) {
      this.state.user = user;
    },
    updateContent(state, content) {
      this.state.content.push(content);
    },
  },
  actions: {
    setUser(context, user) {
      context.commit("updateUser", user);
    },
    removeUser(context) {
      context.commit("updateUser", null);
    },
    addContent(context, content) {
      context.commit("updateContent", content);
    },
  },
  modules: {},
});
