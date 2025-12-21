import { create } from "zustand";

type AppStore = {
    user: string | null,
    login: (user: string) => void
    theme: string
    logout: () => void
    toggleTheme: () => void
}
export const useAppStore = create<AppStore>((set) => ({
    user: null,
    login: (user) => set({user}),
    logout: () => set({user: null}),

    theme: 'light',
    toggleTheme : () => set((state) => ({theme: state.theme === 'dark' ? "light" : "dark"}))
}))