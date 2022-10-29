<template>
  <div
    class="flex h-screen absolute top-0 right-0 bg-white shadow-md z-50 transition delay-150 duration-300 ease-in-out w-screen md:w-[650px]"
  >
    <div class="flex flex-col h-16 border-b-2">
      <!-- Top Bar -->
      <div
        class="flex flex-row p-3 justify-center items-center align-middle text-gray-400"
      >
        <!-- Close Sidebar -->
        <div class="flex-1">
          <button @click="$emit('close')" class="cursor-pointer">
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
            @click="save"
            class="text-sm font-semibold text-white bg-[#0b84fe] rounded-sm px-2 h-8"
          >
            {{ saved ? "Save Changes" : "Confirm" }}
          </button>
        </div>
      </div>
      <!-- Content -->
      <div v-if="state === 'barcode'">
        <!-- Check Form -->
        <div class="w-auto h-[600px] m-5">
          <span
            class="flex flex-row mb-5 text-xs text-gray-400 cursor-pointer"
            @click="back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mr-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Back to check selection
          </span>
          <div class="flex flex-row">
            <h1 class="flex flex-row space-x-2 font-bold mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 flex-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                />
              </svg>
              <div class="flex flex-row space-x-2">
                <span>Barcode check</span>
              </div>
            </h1>
          </div>
          <form>
            <p class="text-xs text-gray-500 font-semibold text-justify mb-5">
              When performing the barcode check inspector will be required
              locate, scan and verify specified barcode and optionally provide
              photographic evidence.
            </p>
            <div class="flex flex-col mb-5">
              <label for="location" class="text-xs font-bold text-gray-500"
                >Barcode location</label
              >
              <input
                type="text"
                name="location"
                class="text-sm p-2 border border-gray-500 w-64"
                placeholder="Inside (by Label)"
                v-model="formData.location"
              />
            </div>
            <div class="flex flex-col mb-5">
              <label for="expected" class="text-xs font-bold text-gray-500"
                >Expected value</label
              >
              <input
                type="text"
                name="expected"
                placeholder="ASd1233de3f-SDDFd"
                class="text-sm p-2 border border-gray-500 w-64"
                v-model="formData.expectedValue"
              />
            </div>
            <label for="expected" class="text-xs font-bold text-gray-500"
              >Evidence</label
            >
            <p class="text-xs text-gray-500 font-semibold text-justify mb-5">
              When enabled inspector will be required to upload photographic
              evidence.
            </p>
            <div
              class="flex flex-col cursor-pointer text-white"
              @click="formData.evidence = !formData.evidence"
            >
              <div
                class="w-16 h-8 bg-gray-400 rounded-2xl p-1 flex flex-row space-x-1"
                :class="{
                  'w-16 h-8 rounded-2xl p-1 flex flex-row space-x-1 bg-[#0b84fe]':
                    formData.evidence,
                }"
              >
                <div
                  class="w-6 h-6 bg-white rounded-2xl"
                  :class="{ 'order-1': formData.evidence }"
                ></div>
                <div>
                  <p class="font-semibold mr-0.5">
                    {{ formData.evidence ? "YES" : "NO" }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-5">
              <label for="instructions" class="text-xs font-bold text-gray-500"
                >Instructions</label
              >
              <textarea
                name="instructions"
                id=""
                cols="30"
                rows="10"
                class="text-sm p-2 border border-gray-500 rounded-md"
                v-model="formData.instructions"
              ></textarea>
            </div>
          </form>
        </div>
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
import { mapMutations } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  name: "SideBar",
  components: {
    SidebarItem,
  },
  data() {
    return {
      saved: false,
      state: "",
      active: "",
      items: [
        "Barcode check",
        "Defects check",
        "Dimensions check",
        "Packaging check",
        "Quantity check",
      ],
      formData: {
        location: "",
        expectedValue: "",
        evidence: false,
        instructions: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setInspectionChecks"]),
    setActive(type) {
      this.active = type;
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
    save() {
      if (this.saved) {
        this.formData.id = Math.random(1, 10000000);
        this.formData.type = this.active;
        this.setInspectionChecks(this.formData);
        this.formData = {
          location: "",
          expectedValue: "",
          evidence: false,
          instructions: "",
        };
        this.saved = false;
        this.active = "";
        this.state = "";
        this.$emit("close");
      }
      this.saved = true;
    },
  },
};
</script>
