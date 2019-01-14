import Vue from "vue/types/index";

export default {
  namespace: true,
  // 注意：这里state必须是一个函数，以多次实例化该模块
  state() {
    return {
      items: {},
    };
  },
  mutations: {
    setItem(state, {id, item}) {
      Vue.set(state.items, id, item);
    },
  },
  actions: {
    fetchItem({commit}, id) {
      return fetchItem(id).then(item => {
        commit('setItem', {id, item});
      });
    },
  },
}




