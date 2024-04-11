import { type Ref, ref } from "vue"
import { defineStore } from "pinia"

interface CounterState {
    n: number
    myRef: Ref<string>
}

export const useExample = defineStore("example", {
    state: (): CounterState => ({
        n: 5,
        myRef: ref("hello")
    }),

    getters: {
        doubleCount: state => state.n * 2
    },

    actions: {
        increment (): void {
            this.n++
        }
    }
})
