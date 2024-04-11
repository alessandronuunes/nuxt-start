<script setup lang="ts">
    const home = ref({
        icon: "pi pi-home"
    })
    const items = ref([
        { label: "Electronics" },
        { label: "Computer" },
        { label: "Accessories" },
        { label: "Keyboard" },
        { label: "Wireless" }
    ])
</script>
<template>
    <div class="card justify-content-center flex">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>
