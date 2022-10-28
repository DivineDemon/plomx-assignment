<template>
  <div class="w-[600px] h-[600px] m-5">
    <span class="flex flex-row mb-5 text-xs text-gray-400">
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
        When performing the barcode check inspector will be required locate,
        scan and verify specified barcode and optionally provide photographic
        evidence.
      </p>
      <div class="flex flex-col mb-5">
        <label for="location" class="text-xs font-bold text-gray-500"
          >Barcode location</label
        >
        <input
          type="text"
          name="location"
          value="Inside (by Label)"
          class="text-sm p-2 border border-gray-500 w-64"
        />
      </div>
      <div class="flex flex-col mb-5">
        <label for="expected" class="text-xs font-bold text-gray-500"
          >Expected value</label
        >
        <input
          type="text"
          name="expected"
          value="ASd1233de3f-SDDFd"
          class="text-sm p-2 border border-gray-500 w-64"
        />
      </div>
      <div class="flex flex-col">
        <label for="evidence" class="text-xs font-bold text-gray-500"
          >Evidence</label
        >
        <p class="text-xs text-gray-500 font-semibold text-justify">
          When enabled inspector will be required to upload photographic
          evidence.
        </p>
        <input type="checkbox" name="evidence" class="mt-3 mb-5 w-4" />
      </div>
      <div class="flex flex-col">
        <label for="instructions" class="text-xs font-bold text-gray-500"
          >Instructions</label
        >
        <textarea
          name="instructions"
          id=""
          cols="30"
          rows="10"
          value=""
          class="text-sm p-2 border border-gray-500 rounded-md"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CheckForm",
};
</script>
