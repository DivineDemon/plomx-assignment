<template>
  <div class="home">
    <NavBar />
    <SubMenu />
    <div class="mt-5 grid place-items-center">
      <div class="flex flex-row space-x-3">
        <!-- Inspection List -->
        <InspectionList @toggle="openSidebar()" />
        <!-- Inspection Options -->
        <InspectionOptions />
      </div>
    </div>
    <template v-if="showSidebar">
      <SideBar @close="closeSidebar()" />
    </template>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import SubMenu from "@/components/common/SubMenu";
import SideBar from "@/components/common/Sidebar/Sidebar";
import InspectionList from "@/components/Inspection/InspectionList";
import InspectionOptions from "@/components/Inspection/InspectionOptions";

export default {
  name: "HomeView",
  components: {
    NavBar,
    SideBar,
    SubMenu,
    InspectionList,
    InspectionOptions,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    openSidebar() {
      this.showSidebar = true;
    },
    closeSidebar() {
      this.showSidebar = false;
    },
  },
};
</script>
