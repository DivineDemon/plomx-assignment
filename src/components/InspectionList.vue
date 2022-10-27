<template>
  <div>
    <h1 class="text-xl font-bold ml-5 mb-3">New quality check</h1>
    <div
      class="bg-white border-4 border-gray-200 w-[600px] h-[250px] flex flex-col space-y-4 justify-center items-center align-center"
    >
      <div class="text-center">
        <h1 class="font-bold">Inspection checks</h1>
        <p class="font-semibold text-gray-400">
          There are no checks selected yet.
        </p>
      </div>
      <button
        class="text-white font-semibold text-xs bg-[#0b84fe] py-2 px-3 rounded-sm"
      >
        Add first check
      </button>
      <InspectionItem />
    </div>
  </div>
</template>

<script>
import InspectionItem from "./InspectionItem.vue";

export default {
  name: "InspectionList",
  components: {
    InspectionItem,
  },
};
</script>
