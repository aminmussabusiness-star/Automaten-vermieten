import { describe, expect, it } from "vitest";

import type { SlotMachine } from "@/data/siteContent";
import { buildInquiryMessage, buildMailtoLink, buildWhatsAppLink } from "@/utils/inquiry";

const selectedMachines: SlotMachine[] = [
  {
    id: "royal-lounge",
    slug: "royal-lounge-8",
    name: "Royal Lounge 8",
    category: "Premium",
    tagline: "Premium",
    description: "Beschreibung",
    longDescription: "Lange Beschreibung",
    idealFor: "Bar",
    monthlyPriceFrom: "ab 349 EUR / Monat",
    baseMonthlyPrice: 349,
    baseDeposit: 950,
    features: ["LED"],
    summaryPoints: ["edel"],
    image: "https://example.com/machine.jpg",
    available: true,
  },
];

describe("inquiry helpers", () => {
  it("builds a structured inquiry message", () => {
    const message = buildInquiryMessage(
      {
        fullName: "Max Mustermann",
        company: "Muster GmbH",
        phone: "01701234567",
        email: "max@example.com",
        location: "Berlin",
        rentalPeriod: "3 Monate",
        message: "Bitte Angebot senden",
      },
      selectedMachines,
    );

    expect(message).toContain("Neue Mietanfrage fuer Geldspielautomaten");
    expect(message).toContain("Royal Lounge 8");
    expect(message).toContain("Berlin");
  });

  it("encodes mail and WhatsApp links", () => {
    const message = "Hallo, ich interessiere mich fuer ein Modell.";

    expect(buildMailtoLink(message)).toContain("mailto:anfrage@automaten-miete.de");
    expect(buildWhatsAppLink(message)).toContain("wa.me/491701234567");
    expect(buildWhatsAppLink(message)).toContain(encodeURIComponent(message));
  });
});
