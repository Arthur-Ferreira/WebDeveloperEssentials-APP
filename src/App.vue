<template>
  <AppHeader/>
  <router-view/>
</template>

<script>

import AppHeader from './components/shared/includes/AppHeader.vue';

export default {
  name: "App",
  components: {
    AppHeader
  }
}
</script>

<style lang="less">
@import "./less/base.less";

</style>
