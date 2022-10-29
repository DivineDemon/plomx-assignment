<template>
  <div
    class="flex h-screen absolute top-0 right-0 bg-white shadow-md z-50 transition delay-150 duration-300 ease-in-out w-[650px]"
  >
    <div class="flex flex-col h-16 border-b-2">
      <!-- Top Bar -->
      <div
        class="flex flex-row p-3 justify-center items-center align-middle text-gray-400"
      >
        <!-- Close Sidebar -->
        <div class="flex-1">
          <button @click="closeSidebar()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 mt-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </div>
        <!-- CheckForm Buttons -->
        <div v-if="state" class="flex flex-row space-x-2">
          <button
            @click="back"
            class="text-sm font-semibold text-gray-500 bg-gray-300 rounded-sm p-1 w-16 h-8"
          >
            Cancel
          </button>
          <button
            class="text-sm font-semibold text-white bg-[#0b84fe] rounded-sm p-1 w-16 h-8"
          >
            Confirm
          </button>
        </div>
      </div>
      <!-- Content -->
      <div v-if="state === 'barcode'">
        <CheckForm @back="back" />
      </div>
      <div v-else-if="!state">
        <h1 class="text-sm font-bold px-5 pb-2 mt-[30px]">
          Select check to add
        </h1>
        <ul
          class="my-[-90px] px-5 mt-[2px] flex flex-col justify-center items-center align-center space-y-5"
        >
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="setActive(item)"
          >
            <SidebarItem
              :type="item"
              :click="active === item ? true : false"
              @showForm="showForm"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CheckForm from "@/components/common/Sidebar/CheckForm.vue";
import SidebarItem from "./SidebarItem";

export default {
  name: "SideBar",
  components: {
    CheckForm,
    SidebarItem,
  },
  data() {
    return {
      state: "",
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
    showForm() {
      switch (this.active) {
        case "Barcode check":
          this.state = "barcode";
          break;

        default:
          break;
      }
    },
    back() {
      this.state = "";
      this.active = "";
    },
  },
};
</script>
