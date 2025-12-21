import { create } from "zustand"

type CounterStore = {
  count: number
  mycount: number
  increase: () => void
  decrease: () => void
  reset: () => void
}

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    mycount: 1,
    increase: () => set((state) => ({ count : state.count + 1 })),
    decrease: () => set((state) => ({ count : state.count - 1 })),
    reset: () => set({ count: 0 })
}))