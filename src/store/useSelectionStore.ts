import { create } from "zustand";

interface SelectionState {
  selectedIds: string[];
  toggleMachine: (machineId: string) => void;
  clearSelection: () => void;
}

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedIds: [],
  toggleMachine: (machineId) =>
    set((state) => ({
      selectedIds: state.selectedIds.includes(machineId)
        ? state.selectedIds.filter((id) => id !== machineId)
        : [...state.selectedIds, machineId],
    })),
  clearSelection: () => set({ selectedIds: [] }),
}));
