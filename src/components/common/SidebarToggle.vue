<template>
  <button
    class="rounded-md bg-[#0b84fe] text-white py-2 px-3 font-semibold"
    @click="$emit('toggle')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "SidebarToggle",
  props: {
    text: String,
  },
};
</script>
