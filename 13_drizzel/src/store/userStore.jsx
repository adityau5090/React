import { create } from 'zustand'

export const useBear = create((set) => ({
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
  clearSelectedUser: () => set({ selectedUser: null }),
}))
