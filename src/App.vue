<template>
<div id="app">
  <!-- <HelloWorld></HelloWorld> -->
  <router-link to="/">Home</router-link>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <router-link to="/login">login</router-link>  
  <router-view />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
