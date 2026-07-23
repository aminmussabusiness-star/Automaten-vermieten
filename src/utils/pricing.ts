import type { SlotMachine } from "@/data/siteContent";

export const rentalDurations = [
  {
    id: "12-monate",
    label: "12 Monate",
    monthlyFactor: 1,
  },
  {
    id: "24-monate",
    label: "24 Monate",
    monthlyFactor: 0.9,
  },
] as const;

export const paymentOptions = [
  {
    id: "monatlich",
    label: "Monatliche Zahlung",
    priceLabel: "Monatliche Zahlung",
    multiplier: 1,
  },
  {
    id: "jaehrlich",
    label: "Jaehrliche Zahlung",
    priceLabel: "Jaehrliche Zahlung",
    multiplier: 11,
  },
] as const;

export type RentalDurationId = (typeof rentalDurations)[number]["id"];
export type PaymentOptionId = (typeof paymentOptions)[number]["id"];

export function getRentalDuration(durationId: RentalDurationId) {
  return rentalDurations.find((duration) => duration.id === durationId) ?? rentalDurations[0];
}

export function getPaymentOption(paymentOptionId: PaymentOptionId) {
  return paymentOptions.find((entry) => entry.id === paymentOptionId) ?? paymentOptions[0];
}

export function calculateMachineMonthlyPrice(machine: SlotMachine, durationId: RentalDurationId) {
  const duration = getRentalDuration(durationId);

  return Math.round(machine.baseMonthlyPrice * duration.monthlyFactor);
}

export function calculateMachinePaymentAmount(
  machine: SlotMachine,
  durationId: RentalDurationId,
  paymentOptionId: PaymentOptionId,
) {
  const paymentOption = getPaymentOption(paymentOptionId);
  const monthlyPrice = calculateMachineMonthlyPrice(machine, durationId);

  return Math.round(monthlyPrice * paymentOption.multiplier);
}

export function calculateMachineDeposit() {
  return 1999;
}

export function formatEuro(amount: number) {
  return `${amount.toLocaleString("de-DE")} EUR`;
}
