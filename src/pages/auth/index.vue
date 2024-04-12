<script lang="ts" setup>

    definePageMeta({
        layout: "auth",
        middleware: ["auth"]
    })
    useHead({
        title: "Auth"
    })

    const name = ref()
    const email = ref()
    const accept = ref(false)
</script>

<template>
    <div class="card justify-content-center p-fluid flex">
        <div v-focustrap class="w-full" style="max-width: 20rem">
            <div class="field">
                <IconField>
                    <InputIcon>
                        <i class="pi pi-user" />
                    </InputIcon>
                    <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
                </IconField>
            </div>
            <div class="field">
                <IconField>
                    <InputIcon>
                        <i class="pi pi-envelope" />
                    </InputIcon>
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </IconField>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions.</label>
            </div>
            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
</template>

<style scoped></style>
