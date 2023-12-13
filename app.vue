<script lang="ts" setup>
import { useDatabaseStore } from '~/stores/db'
import CustomTitleBar from '~/components/app/CustomTitleBar.vue'

const { init } = useDatabaseStore()
onBeforeMount(() => init())
</script>

<template>
  <div>
    <CustomTitleBar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
