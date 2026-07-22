import type { SlotMachine } from "@/data/siteContent";

export const rentalDurations = [
  {
    id: "12-monate",
    label: "12 Monate",
    monthlyFactor: 1,
    depositAdjustment: 0,
  },
  {
    id: "24-monate",
    label: "24 Monate",
    monthlyFactor: 0.9,
    depositAdjustment: 0,
  },
] as const;

export const gamePackages = [
  {
    id: "basis",
    label: "Basis",
    description: "Grundausstattung mit klassischem Spielpaket.",
    monthlySurcharge: 0,
    depositSurcharge: 0,
  },
  {
    id: "plus",
    label: "Plus",
    description: "Erweitertes Spielpaket mit mehr Auswahl.",
    monthlySurcharge: 49,
    depositSurcharge: 120,
  },
  {
    id: "premium",
    label: "Premium",
    description: "Volles Paket fuer maximale Ausstattung.",
    monthlySurcharge: 99,
    depositSurcharge: 220,
  },
] as const;

export type RentalDurationId = (typeof rentalDurations)[number]["id"];
export type GamePackageId = (typeof gamePackages)[number]["id"];

export function getRentalDuration(durationId: RentalDurationId) {
  return rentalDurations.find((duration) => duration.id === durationId) ?? rentalDurations[0];
}

export function getGamePackage(packageId: GamePackageId) {
  return gamePackages.find((entry) => entry.id === packageId) ?? gamePackages[0];
}

export function calculateMachineMonthlyPrice(
  machine: SlotMachine,
  durationId: RentalDurationId,
  packageId: GamePackageId,
) {
  const duration = getRentalDuration(durationId);
  const selectedPackage = getGamePackage(packageId);

  return Math.round((machine.baseMonthlyPrice + selectedPackage.monthlySurcharge) * duration.monthlyFactor);
}

export function calculateMachineDeposit() {
  return 1999;
}

export function formatEuro(amount: number) {
  return `${amount.toLocaleString("de-DE")} EUR`;
}
