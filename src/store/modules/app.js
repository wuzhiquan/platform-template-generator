/* eslint-disable no-shadow */
const state = {
  loading: false, // 全局的loading
  patient: {},
};

const mutations = {
  UPDATE_LOADING: (state, bol) => {
    state.loading = bol;
  },
  UPDATE_PATIENT: (state, info) => {
    sessionStorage.setItem('patient', JSON.stringify(info));
    state.patient = info;
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
