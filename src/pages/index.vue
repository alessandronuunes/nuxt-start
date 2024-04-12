<script setup lang="ts">
    definePageMeta({
        layout: "dash",
        middleware: ["auth"]
    })
    useHead({
        title: "Dashboard",
        meta: [
            {
                name: "description",
                content: "Dashboard page"
            }
        ]
    })
</script>
<template>
    <Card>
        <template #title>
            Dashboard
        </template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
    </Card>
</template>
