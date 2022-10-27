<template>
  <nav
    class="bg-white border border-b-4 border-gray-200 px-2 sm:px-4 py-2.5 rounded"
  >
    <div class="container flex flex-wrap mx-auto">
      <div class="flex items-center">
        <a
          href="https://whimsical.com/rechain-qc-checks-A7mroejkWrQAkVSGAs4sm5"
          class="flex items-center"
        >
          <TemplateIcon class="mr-3 h-6 sm:h-9 text-[#0b84fe]" />
          <span class="self-center text-xl font-semibold whitespace-nowrap"
            >Rechain</span
          >
        </a>
      </div>
      <div class="flex flex-1 justify-end md:order-2">
        <div class="flex items-center space-x-1 md:space-x-3">
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
          >
            <BellIcon class="w-8 h-8 rounded-full text-gray-500 p-1" />
          </button>
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
          >
            <img
              class="w-8 h-8 rounded-full"
              src="https://randomuser.me/api/portraits/women/71.jpg"
              alt="user photo"
            />
          </button>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="flex mr-3 text-sm bg-gray-200 md:mr-0 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon class="w-8 h-8 text-gray-500 p-1" />
          </button>
        </div>
      </div>
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        <ul
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
        >
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { BellIcon } from "@vue-hero-icons/outline";
import { TemplateIcon, MenuIcon } from "@vue-hero-icons/solid";
export default {
  name: "NavBar",
  components: {
    BellIcon,
    TemplateIcon,
    MenuIcon,
  },
};
</script>
