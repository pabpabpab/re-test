export default {
  setUsers: (state, data) => {
    state.users = [...data];
  },
  /*
  deleteItemFromUsers: (state, userId) => {
    if (state.users.length === 0) {
      return;
    }
    const users = state.users;
    let index = users.findIndex(item => item.id === userId);
    if (index === -1) {
      return;
    }
    users.splice(index, 1);
    state.users = [...users];
  },
  */
};
