<template>
  <div class="w-full mt-2.5 md:w-75">
    <div
      class="bg-white border-4 border-gray-200 flex flex-col space-y-4 justify-center items-center align-center p-8"
    >
      <div
        v-if="!getAllInspectionChecks.length"
        class="flex flex-col items-center"
      >
        <h1 class="font-bold flex-1">Inspection checks</h1>
        <p class="font-semibold text-gray-400 mb-5">
          There are no checks selected yet.
        </p>
        <SidebarToggle @toggle="$emit('toggle')" text="Add first check" />
      </div>
      <div v-else>
        <div class="flex flex-row mb-5 items-center">
          <h1 class="font-bold flex-1">Inspection checks</h1>
          <SidebarToggle @toggle="$emit('toggle')" text="Add check" />
        </div>
        <div
          v-for="(checks, index) in getAllInspectionChecks"
          :key="index"
          class="mb-5"
        >
          <InspectionItem :checks="checks" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarToggle from "../common/SidebarToggle.vue";
import InspectionItem from "./InspectionItem";

export default {
  name: "InspectionList",
  components: {
    InspectionItem,
    SidebarToggle,
  },
  computed: {
    ...mapGetters(["getAllInspectionChecks"]),
  },
};
</script>
