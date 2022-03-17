<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <div class="grid-content">
        <UserTable/>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <EventTable/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import UserTable from '@/components/user/UserTable.vue';
import EventTable from '@/components/socket/EventTable.vue';

export default {
  name: 'HomeView',
  components: {
    UserTable,
    EventTable,
  },
};
</script>
