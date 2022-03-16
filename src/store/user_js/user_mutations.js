export default {
  setUsers: (state, data) => {
    const items = data.map((item) => {
      const d = new Date(item.ctime * 1000);
      const day = String(d.getDate()).length > 1 ? d.getDate() : `0${d.getDate()}`;
      const month = String(d.getMonth()).length > 1 ? d.getMonth() : `0${d.getMonth()}`;
      const hour = String(d.getHours()).length > 1 ? d.getHours() : `0${d.getHours()}`;
      const minute = String(d.getMinutes()).length > 1 ? d.getMinutes() : `0${d.getMinutes()}`;
      const user = { ...item };
      user.date = `${day}.${month}.${d.getFullYear()} ${hour}:${minute}`;
      return user;
    });
    state.users = [...items];
  },
  setTotalCount: (state, value) => {
    state.totalCount = value;
  },
  setPerPage: (state, value) => {
    state.perPage = value;
  },
  setCurrentPage: (state, value) => {
    state.currentPage = value;
  },
  deleteUser: (state, index) => {
    if (state.users.length === 0) {
      return;
    }
    const { users } = state;
    users.splice(index, 1);
    state.users = [...users];
  },
  setLoadingFlag: (state, value) => {
    state.loading = value;
  },
};
