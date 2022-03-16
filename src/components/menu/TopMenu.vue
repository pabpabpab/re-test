<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="home">
      Home
    </el-menu-item>
    <el-menu-item index="login">
      Login
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'TopMenu',

  data() {
    return {
      activeIndex: 'home',
      activeIndex2: 'home',
    };
  },

  methods: {
    handleSelect(key) {
      if (this.$route.name === key) {
        return;
      }
      this.$router.push({ name: key });
    },
  },

  watch: {
    $route(to, from) {
      if (from.name) {
        this.activeIndex = to.name;
        this.activeIndex2 = to.name;
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.activeIndex = this.$route.name;
      this.activeIndex2 = this.$route.name;
    }, 500);
  },
};
</script>
