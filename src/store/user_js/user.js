import state from './user_state';
import getters from './user_getters';
import mutations from './user_mutations';
import actions from './user_actions';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
