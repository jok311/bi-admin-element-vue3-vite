<template>
  <div class="lay-out-box">
    <site-menu></site-menu>
    <app-main></app-main>
  </div>
</template>

<script>
import appMain from './components/app-main.vue'
import siteMenu from './components/site-menu.vue'
export default {
  components: {
    appMain,
    siteMenu
  }
}
</script>