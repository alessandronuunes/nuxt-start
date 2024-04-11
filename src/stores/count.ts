type State = { count: number }
type Getters = { doubleCount: (state: State) => number }
type Mutations = { increment: () => void }

export const useCounterStore = defineStore<
        "counter",
        State,
        Getters,
        Mutations
>("counter", {
    state: () => ({ count: 0 }),
    getters: {
        doubleCount: state => state.count * 2
    },
    actions: {
        increment () {
            this.count++
        }
    }
})
