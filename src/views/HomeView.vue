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
import NavBar from "@/components/common/NavBar";
import SubMenu from "@/components/common/SubMenu";
import InspectionEmpty from "@/components/InspectionEmpty";

export default {
  name: "HomeView",
  components: {
    NavBar,
    SubMenu,
    InspectionEmpty,
  },
};
</script>
