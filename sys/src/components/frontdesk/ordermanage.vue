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
          msg: '订单管理'
      }
  }
};
</script>

<style scoped lang="scss">
.container{
    width: 100%;
}
</style>
