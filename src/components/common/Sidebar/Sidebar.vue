<template>
  <div
    class="flex h-screen absolute top-0 right-0 bg-white shadow-md z-50 transition delay-150 duration-300 ease-in-out"
  >
    <div>
      <div class="flex flex-1 border-b-2 p-5 text-gray-400">
        <button @click="closeSidebar()">
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
      <CheckForm />
      <!-- <h1 class="text-sm font-bold px-5 pb-2 mt-[30px]">Select check to add</h1>
      <ul
        class="my-[-90px] px-5 mt-[2px] flex flex-col justify-center items-center align-center space-y-5"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          @click="setActive(item)"
        >
          <SidebarItem :type="item" :click="active === item ? true : false" />
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import CheckForm from "@/components/common/Sidebar/CheckForm.vue";
// import SidebarItem from "./SidebarItem";

export default {
  name: "SideBar",
  components: {
    CheckForm,
    // SidebarItem,
  },
  data() {
    return {
      active: "",
      items: [
        "Barcode check",
        "Defects check",
        "Dimensions check",
        "Packaging check",
        "Quantity check",
      ],
    };
  },
  methods: {
    closeSidebar() {
      this.$emit("close");
    },
    setActive(type) {
      this.active = type;
      console.log(this.active);
    },
  },
};
</script>
