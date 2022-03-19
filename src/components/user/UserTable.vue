<template>
  <div>
    <el-table
      :data="tableData"
      max-height="500"
      :fit="true"
      empty-text="Нет пользователей"
      v-loading="loadingFlag"
      style="width: 100%">
      <el-table-column
        fixed
        align="left"
        width="100"
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column
        fixed
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        fixed
        prop="role"
        label="Role">
      </el-table-column>
      <el-table-column
        fixed
        width="180"
        prop="date"
        label="Date">
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        label="Operations">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index)"
            type="text"
            size="small">
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <user-paginator/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import UserPaginator from '@/components/user/UserPaginator.vue';

export default {
  name: 'UserTable',

  components: {
    UserPaginator,
  },

  data() {
    return {
      tableData: [
        {
          id: 0,
          name: '',
          role: '',
          date: '',
        },
      ],
    };
  },

  computed: {
    ...mapGetters('user', [
      'users',
      'loadingFlag',
      'deletedUserName',
    ]),
  },

  methods: {
    ...mapMutations('user', [
      'deleteUser',
    ]),
    ...mapActions('user', [
      'loadUsersByPageNumber',
    ]),
    deleteRow(index) {
      this.deleteUser(index);
      this.$message(`Пользователь ${this.deletedUserName} удален.`);
    },
  },

  watch: {
    users(items) {
      this.tableData = [...items];
    },
  },

  mounted() {
    this.loadUsersByPageNumber(1);
  },
};
</script>
