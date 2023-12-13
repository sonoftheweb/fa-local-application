<script lang="ts" setup>
const topLink = [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-squares-2x2-20-solid',
    to: '/',
  },
  {
    label: 'Overview',
    icon: 'i-heroicons-document-text-20-solid',
    to: '/overview',
  },
]
const navigationUi = {
  size: 'text-base',
  icon: {
    base: 'flex-shrink-0 w-5 h-5',
  },
}
</script>

<template>
  <div class="w-60 bg-slate-400 dark:bg-slate-800 pt-10">
    <div class="flex items-center w-full px-3 mb-4">
      <div
        class="font-medium text-gray-500 dark:text-gray-600 whitespace-nowrap"
      >
        <span class="text-xs">Top</span>
      </div>
      <div
        class="flex border-slate-500 dark:border-slate-700 w-full border-t border-solid ml-3"
      ></div>
    </div>

    <UVerticalNavigation :ui="navigationUi" :links="topLink" />
  </div>
</template>
