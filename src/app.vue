<script setup lang="ts">
    const toast = useToast()
    const store = useCounterStore()

    function doubleCount () {
        toast.add({
            detail: store.doubleCount.toString(),
            severity: "info",
            summary: "It is value of double count!"
        })
    }
</script>

<template>
    <div class="flex min-h-screen w-screen items-center justify-center">
        <Toast />
        <div class="flex flex-col items-center space-y-2">
            <h1 class="text-4xl font-bold">
                Counter
            </h1>
            <h2 class="text-2xl font-bold">
                {{ store.count }}
            </h2>
            <Button label="Increment" @click="store.increment" />
            <Button label="Duplicate" @click="doubleCount" />
        </div>
    </div>
</template>
