<template>
  <el-table
    :data="tableData"
    max-height="500"
    :fit="true"
    style="width: 100%">
    <el-table-column
      fixed
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
</template>

<script>
export default {
  name: 'UserTable',
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'Tom',
          role: 'user',
          date: 'DD.MM.YYYY HH:mm',
        },
      ],
    };
  },

  methods: {
    deleteRow(index, rows) {
      console.log(index);
      console.log(rows);
      // rows.splice(index, 1);
    },
  },

  mounted() {
    this.$store.dispatch('user/loadUsers');
  },
};
</script>
