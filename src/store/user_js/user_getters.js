export default {
  users: (state) => state.users,
  totalCount: (state) => state.totalCount,
  perPage: (state) => state.perPage,
  pageCount: (state) => Math.ceil(state.totalCount / state.perPage),
  currentPage: (state) => state.currentPage,
  loadingFlag: (state) => state.loadingFlag,
};
