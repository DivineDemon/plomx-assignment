<template>
  <nav class="bg-white border-b-4 border-gray-200 p-4 w-screen">
    <div class="flex">
      <!-- Logo -->
      <div class="flex w-full md:w-auto">
        <div class="flex-1">
          <router-link to="/" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 mr-3 text-[#0b84fe]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
            <span class="self-center text-xl font-semibold">Rechain</span>
          </router-link>
        </div>
        <!-- Hamburger -->
        <div
          class="block md:hidden mr-3 hover:cursor-pointer pt-1"
          @click="isOpen = !isOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <!-- Nav Links -->
      <div class="hidden flex-1 ml-12 p-1 md:flex">
        <ul class="flex flex-row space-x-12">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="flex"
            :class="{
              'bg-sky-100 text-sm text-[#0b84fe] text-primary py-1 px-3 rounded-md':
                active === item.name,
            }"
            @click="setActive(item.name)"
          >
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <!-- User Profile -->
      <div class="hidden space-x-3 md:flex">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 rounded-full p-1 bg-gray-100 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
        <button>
          <img
            class="w-8 h-8 rounded-full"
            src="https://randomuser.me/api/portraits/women/8.jpg"
            alt="user-profile"
          />
        </button>
      </div>
    </div>
    <!-- Nav Items -->
    <div class="mt-5" v-if="isOpen">
      <ul class="flex flex-col space-y-3">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="flex"
          :class="{
            'bg-sky-100 text-sm text-[#0b84fe] text-primary py-1 px-3 rounded-md':
              active === item.name,
          }"
          @click="setActive(item.name)"
        >
          <router-link :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      active: "Orders",
      items: [
        {
          name: "Orders",
          link: "/",
        },
        {
          name: "Shipments",
          link: "/",
        },
        {
          name: "Products",
          link: "/",
        },
        {
          name: "Manufacturers",
          link: "/",
        },
      ],
    };
  },
  methods: {
    setActive(name) {
      this.active = name;
    },
  },
};
</script>
