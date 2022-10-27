<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
