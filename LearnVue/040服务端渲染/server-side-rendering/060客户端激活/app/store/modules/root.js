import Vue from "vue";

import {fetchItem} from "../../api";


export default {
  namespace: true,
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




