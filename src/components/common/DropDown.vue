<template>
  <div class="mt-4">
    <label :for="name" class="text-xs font-bold text-gray-600">{{
      name
    }}</label>
    <div
      class="flex flex-row space-x-4 border-2 border-gray-300 rounded-sm p-2"
    >
      <input
        class="text-sm flex-1"
        type="text"
        :name="name"
        :placeholder="placeholder"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    name: String,
    placeholder: String,
  },
};
</script>
