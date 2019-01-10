// 在服务器端，需要在开始渲染之前就解析好数据

// 在客户端，挂载到客户端应用程序之前要取到完全相同的数据

// 为了解决这个问题，我们将获取数据放在状态容器中

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











