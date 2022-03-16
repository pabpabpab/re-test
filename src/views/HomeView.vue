<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <UserTable/>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple">
      </div>
    </el-col>
  </el-row>
</template>

<script>
import UserTable from '@/components/user/UserTable.vue';

export default {
  name: 'HomeView',
  components: {
    UserTable,
  },
};
</script>
