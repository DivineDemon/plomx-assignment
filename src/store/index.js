import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    inspectionChecks: [],
  },
  getters: {
    getAllInspectionChecks(state) {
      return state.inspectionChecks;
    },
  },
  mutations: {
    setInspectionChecks(state, payload) {
      state.inspectionChecks.push(payload);
    },
    removeInspectionChecks(state, id) {
      let itemIndex = state.inspectionChecks.findIndex(
        (inspectionCheck) => inspectionCheck.id === id
      );
      state.inspectionChecks.splice(itemIndex, 1);
    },
  },
});

export default store;
