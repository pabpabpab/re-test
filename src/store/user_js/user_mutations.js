import getFormattedDate from '@/auxiliary_functions/getFormattedDate';

export default {
  setUsers: (state, data) => {
    const items = data.map((item) => {
      const user = { ...item };
      user.date = getFormattedDate(item.ctime);
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
    state.deletedUserName = users[index].name;
    users.splice(index, 1);
    state.users = [...users];
  },
  setLoadingFlag: (state, value) => {
    state.loadingFlag = value;
  },
};
