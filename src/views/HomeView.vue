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
    <SideBar />
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
};
</script>
