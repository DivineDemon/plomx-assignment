<template>
  <div class="home">
    <NavBar />
    <SubMenu />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import SubMenu from "@/components/common/SubMenu.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    SubMenu,
  },
};
</script>
