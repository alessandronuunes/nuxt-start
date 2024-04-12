import { Sidebar } from "@/interfaces/sidebar"

export const state = () => useState<Sidebar[]>("sidebar", () => [])
