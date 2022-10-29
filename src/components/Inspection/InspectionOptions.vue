<template>
  <div class="border-4 border-gray-200 p-4 w-full md:w-25 md:flex-1">
    <h1 class="font-bold text-left">Inspection</h1>
    <DropDown name="Inspector" :options="['Todd Lager']" />
    <hr class="my-8 h-px bg-gray-300 border" />
    <DropDown name="Company" :options="['Top Shop Apparel']" />
    <DropDown name="Order" :options="['80149 - Summer Linen Jacket SS22']" />
    <DropDown name="Milestone" :options="['Pre-Production']" />
  </div>
</template>

<script>
import DropDown from "../common/DropDown";

export default {
  name: "InspectionOptions",
  components: {
    DropDown,
  },
};
</script>
