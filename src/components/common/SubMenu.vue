<template>
  <div class="bg-white border-b-4 border-gray-200 p-4 flex w-screen">
    <!-- Back to Order -->
    <div class="flex-1">
      <router-link to="/" class="text-gray-500 text-sm flex p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Back to Order
      </router-link>
    </div>
    <!-- Add Check -->
    <div class="flex">
      <SidebarToggle @toggle="$emit('toggle')" text="Add Check" />
    </div>
  </div>
</template>

<script>
import SidebarToggle from "./SidebarToggle.vue";

export default {
  name: "SubMenu",
  components: {
    SidebarToggle,
  },
};
</script>
