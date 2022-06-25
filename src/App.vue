<template>
  <app-header/>
  <app-main/>
</template>

<script>
import AppHeader from './components/appHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name:'app',
  components:{AppHeader, AppMain}
};
</script>

<style>
</style>
