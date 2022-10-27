<template>
  <div class="border-4 border-gray-200 mt-10 p-4 w-[350px]">
    <h1 class="font-bold text-left">Inspection</h1>
    <DropDown name="Inspector" placeholder="Todd Lager" />
    <hr class="my-8 h-px bg-gray-300 border" />
    <DropDown name="Company" placeholder="Top Shop Apparel" />
    <DropDown name="Order" placeholder="80149 - Summer Linen Jacket SS22" />
    <DropDown name="Milestone" placeholder="Pre-Production" />
  </div>
</template>

<script>
import DropDown from "./common/DropDown.vue";

export default {
  name: "InspectionOptions",
  components: {
    DropDown,
  },
};
</script>
