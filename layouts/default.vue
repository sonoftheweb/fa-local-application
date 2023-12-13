<script lang="ts" setup>
import PrimaryNavigation from '~/components/app/PrimaryNavigation.vue'
</script>

<template>
  <div
    class="rounded-lg bg-slate-300 dark:bg-slate-700 w-full h-screen pt-[40px] flex"
  >
    <PrimaryNavigation />
    <div class="px-3 pt-1">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
