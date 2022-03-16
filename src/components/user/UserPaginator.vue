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
import { mapGetters } from 'vuex';

export default {
  name: 'UserPaginator',
  computed: {
    ...mapGetters('user', [
      'pageCount',
      'currentPage',
    ]),
  },
  methods: {
    showPage(pageNumber) {
      this.$store.dispatch('user/loadUsers', pageNumber);
    },
  },
};
</script>
