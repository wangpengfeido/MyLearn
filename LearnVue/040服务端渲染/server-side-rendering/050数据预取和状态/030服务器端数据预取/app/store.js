import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {fetchItem} from "./api";

export function createStore() {
  return new Vuex.Store({
    state: {
      items: {},
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
  });
}











