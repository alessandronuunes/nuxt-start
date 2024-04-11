<script setup lang="ts">
    const site = useSite()
    await site.getData()
</script>

<template>
    <div class="h-screen w-full">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
