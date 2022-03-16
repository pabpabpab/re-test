<template>
  <div v-loading="loading" class="loading_widget">
  </div>
</template>

<script>
export default {
  name: 'LoadingWidget',
  props: ['loading'],
};
</script>
