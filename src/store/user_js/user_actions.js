export default {

  loadUsers({ dispatch, commit, state }) {
    const params = '?limit=5&offset=0';
    const url = state.url.list + params;
    return dispatch('getJson', url, { root: true })
      .then((data) => {
        console.log(data);
        commit('setUsers', data.items);
        // return users;
      });
  },
};
