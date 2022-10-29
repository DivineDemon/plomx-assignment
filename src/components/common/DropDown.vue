<template>
  <div class="mt-4">
    <label :for="name" class="text-xs font-bold text-gray-600">{{
      name
    }}</label>
    <div class="flex flex-row space-x-4 border-2 border-gray-300 p-2">
      <select
        class="text-sm flex-1 text-dark focus:outline-0"
        type="text"
        :name="name"
      >
        <option v-for="(option, index) in options" :key="index">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    name: String,
    options: Array,
  },
};
</script>
