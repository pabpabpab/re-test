export default {

  loadUsers({ dispatch, commit, state }, pageNumber) {
    const offset = state.limit * (pageNumber - 1);
    const params = `?limit=${state.limit}&offset=${offset}`;
    const url = state.url.list + params;
    commit('setLoadingFlag', true);
    return dispatch('getJson', url, { root: true })
      .then((data) => {
        // console.log(data);
        commit('setUsers', data.items);
        commit('setTotalCount', data.total);
        commit('setPerPage', data.per_page);
        commit('setCurrentPage', data.page);
      })
      .finally(() => {
        setTimeout(() => {
          commit('setLoadingFlag', false);
        }, 800);
      });
  },
};
