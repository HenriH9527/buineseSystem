<template>
  <div class="container">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          msg: '统计报表'
      }
  }
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
}
</style>
