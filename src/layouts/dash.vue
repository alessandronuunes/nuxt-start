<script setup lang="ts">
</script>
<template>
    <div class="layout-wrapper">
        <dash-topbar />
        <div class="layout-sidebar">
            <dash-sidebar />
        </div>
        <div class="layout-main-container">
            <dash-breadcrumb />
            <div class="layout-main">
                <slot />
            </div>
            <dash-footer />
        </div>
        <Toast />
    </div>
</template>

<style lang="scss" scoped></style>
