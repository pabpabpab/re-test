<template>
  <div>
    <el-table
      :data="tableData"
      max-height="500"
      :fit="true"
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
            @click.native.prevent="deleteRow(scope.$index, tableData)"
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
import { mapGetters } from 'vuex';
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
    ]),
  },

  methods: {
    deleteRow(index, rows) {
      console.log(index);
      console.log(rows);
      // rows.splice(index, 1);
    },
  },

  watch: {
    users(items) {
      this.tableData = [...items];
    },
  },

  mounted() {
    this.$store.dispatch('user/loadUsers', 1);
  },
};
</script>
