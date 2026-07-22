import type { SlotMachine } from "@/data/siteContent";

export interface InquiryFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  rentalPeriod: string;
  message: string;
}

const formatSelectedMachines = (selectedMachines: SlotMachine[]) =>
  selectedMachines.map((machine) => `- ${machine.name} (${machine.category})`).join("\n");

export function buildInquiryMessage(
  formData: InquiryFormData,
  selectedMachines: SlotMachine[],
) {
  const selectionText =
    selectedMachines.length > 0 ? formatSelectedMachines(selectedMachines) : "- noch keine Auswahl";

  return [
    "Neue Mietanfrage fuer Geldspielautomaten",
    "",
    `Name: ${formData.fullName}`,
    `Firma: ${formData.company || "-"}`,
    `Telefon: ${formData.phone}`,
    `E-Mail: ${formData.email}`,
    `Standort: ${formData.location}`,
    `Wunschzeitraum: ${formData.rentalPeriod}`,
    "",
    "Ausgewaehlte Automaten:",
    selectionText,
    "",
    "Nachricht:",
    formData.message || "-",
  ].join("\n");
}

export function buildMailtoLink(message: string) {
  const subject = encodeURIComponent("Mietanfrage fuer Geldspielautomaten");
  const body = encodeURIComponent(message);

  return `mailto:anfrage@automaten-miete.de?subject=${subject}&body=${body}`;
}

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/491701234567?text=${encodeURIComponent(message)}`;
}
