<template>
  <div class="home">
    <NavBar />
    <SubMenu />
    <div class="mt-5 grid place-items-center">
      <!-- Inspection Check -->
      <InspectionEmpty />
      <!-- Inspection -->
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import SubMenu from "@/components/common/SubMenu.vue";
import InspectionEmpty from "@/components/InspectionEmpty.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    SubMenu,
    InspectionEmpty,
  },
};
</script>
