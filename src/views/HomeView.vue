<template>
  <div class="home">
    <NavBar />
    <SubMenu />
    <div class="mt-5 grid place-items-center">
      <div class="flex flex-row space-x-3">
        <!-- Inspection List -->
        <InspectionList />
        <!-- Inspection Options -->
        <InspectionOptions />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import SubMenu from "@/components/common/SubMenu";
import InspectionList from "@/components/InspectionList";
import InspectionOptions from "@/components/InspectionOptions.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    SubMenu,
    InspectionList,
    InspectionOptions,
  },
};
</script>
