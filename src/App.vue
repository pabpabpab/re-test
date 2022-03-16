<template>
  <div id="app">
    <el-container>
      <el-header>
        <TopMenu/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TopMenu from '@/components/menu/TopMenu.vue';

export default {
  components: {
    TopMenu,
  },
};
</script>

<style lang="scss">
  @import "./sass/index.sass";
</style>
