<script lang="ts" setup>
import { getName } from '@tauri-apps/api/app'
const name = await getName()
</script>

<template>
  <div
    data-tauri-drag-region
    class="fixed top-0 left-0 w-screen h-10 flex justify-between bg-slate-400 dark:bg-slate-900 rounded-t-lg"
  >
    <div class="flex items-center">
      <div class="flex items-center mr-5">
        <div
          class="w-4 h-4 rounded-full bg-red-500 ml-3 mr-3 cursor-pointer"
        ></div>
        <div
          class="w-4 h-4 rounded-full bg-yellow-500 mr-3 cursor-pointer"
        ></div>
        <div
          class="w-4 h-4 rounded-full bg-green-500 mr-3 cursor-pointer"
        ></div>
      </div>
      <div v-if="name" class="font-bold">{{ name }}</div>
    </div>
  </div>
</template>
