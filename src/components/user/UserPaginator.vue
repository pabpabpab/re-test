<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :hide-on-single-page="true"
    :page-count="pageCount"
    :current-page="currentPage"
    @current-change="showPage">
  </el-pagination>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserPaginator',

  computed: {
    ...mapGetters('user', [
      'pageCount',
      'currentPage',
    ]),
  },

  methods: {
    ...mapActions('user', [
      'loadUsers',
    ]),
    showPage(pageNumber) {
      this.loadUsers(pageNumber);
    },
  },
};
</script>
