import { ArrowLeft, BadgeEuro, HandCoins } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { SectionHeading } from "@/components/SectionHeading";
import { findMachineBySlug } from "@/data/siteContent";
import { buildMailtoLink } from "@/utils/inquiry";
import { getMachinePreviewImage } from "@/utils/machinePreview";
import {
  calculateMachineDeposit,
  calculateMachinePaymentAmount,
  calculateMachineMonthlyPrice,
  formatEuro,
  getPaymentOption,
  paymentOptions,
  rentalDurations,
  type PaymentOptionId,
  type RentalDurationId,
} from "@/utils/pricing";

export default function MachineDetailPage() {
  const { machineId } = useParams();
  const machine = findMachineBySlug(machineId);
  const [selectedDurationId, setSelectedDurationId] = useState<RentalDurationId>("12-monate");
  const [selectedPaymentOptionId, setSelectedPaymentOptionId] =
    useState<PaymentOptionId>("monatlich");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
  });

  if (!machine) {
    return <Navigate to="/automaten" replace />;
  }

  const selectedDuration =
    rentalDurations.find((duration) => duration.id === selectedDurationId) ?? rentalDurations[0];
  const selectedPaymentOption = getPaymentOption(selectedPaymentOptionId);
  const calculatedMonthlyPrice = calculateMachineMonthlyPrice(machine, selectedDurationId);
  const calculatedPaymentAmount = calculateMachinePaymentAmount(
    machine,
    selectedDurationId,
    selectedPaymentOptionId,
  );
  const calculatedDeposit = calculateMachineDeposit();
  const detailImage = getMachinePreviewImage(machine.slug, machine.image);
  const usesCustomDetailImage = detailImage !== machine.image;
  const isAdjustedDetailImage = detailImage === "/merkurmulti.png";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      `Neue Mietanfrage fuer ${machine.name}`,
      "",
      `Name: ${formData.fullName}`,
      `Firma: ${formData.company || "-"}`,
      `E-Mail: ${formData.email}`,
      `Telefon: ${formData.phone}`,
      `Mietlaufzeit: ${selectedDuration.label}`,
      `Zahlungsweise: ${selectedPaymentOption.label}`,
      `Monatliche Miete: ${formatEuro(calculatedMonthlyPrice)}`,
      `${selectedPaymentOption.priceLabel}: ${formatEuro(calculatedPaymentAmount)}`,
      `Kaution: ${formatEuro(calculatedDeposit)}`,
    ].join("\n");

    window.location.href = buildMailtoLink(message);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen px-5 py-8 md:px-8 md:py-10">
      <div className="rounded-[36px] border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/automaten"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm text-stone-100 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurueck zur Uebersicht
          </Link>
          <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-200">
            {machine.category}
          </span>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[30px] border border-white/10">
            <img
              src={detailImage}
              alt={machine.name}
              className={
                usesCustomDetailImage
                  ? isAdjustedDetailImage
                    ? "h-full min-h-[440px] w-full translate-y-6 scale-[1.04] bg-[#0f0f0f] object-contain p-0"
                    : "h-full min-h-[440px] w-full bg-[#0f0f0f] object-contain p-6"
                  : "h-full min-h-[440px] w-full object-cover"
              }
            />
          </div>

          <div>
            <SectionHeading eyebrow="Automatendetail" title={machine.name} description={machine.tagline} />
            <h1 className="mt-6 font-display text-5xl leading-[0.92] text-stone-50 md:text-6xl">
              {machine.name}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300/78 md:text-base">
              {machine.tagline}
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 md:p-6">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
                    Mietpreis berechnen
                  </p>
                  <p className="mt-3 font-display text-3xl text-stone-50">
                    Laufzeit und Zahlungsweise direkt waehlen
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Mietlaufzeit</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {rentalDurations.map((duration) => (
                      <button
                        key={duration.id}
                        type="button"
                        onClick={() => setSelectedDurationId(duration.id)}
                        className={`rounded-full px-4 py-3 text-sm transition ${
                          selectedDurationId === duration.id
                            ? "bg-amber-300 text-neutral-950"
                            : "border border-white/10 bg-white/[0.04] text-stone-200 hover:bg-white/[0.08]"
                        }`}
                      >
                        {duration.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                    Zahlungsweise
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {paymentOptions.map((entry) => (
                      <button
                        key={entry.id}
                        type="button"
                        onClick={() => setSelectedPaymentOptionId(entry.id)}
                        className={`rounded-full px-4 py-3 text-sm transition ${
                          selectedPaymentOptionId === entry.id
                            ? "bg-amber-300 text-neutral-950"
                            : "border border-white/10 bg-white/[0.04] text-stone-200 hover:bg-white/[0.08]"
                        }`}
                      >
                        {entry.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-stone-300/76">
                    Bei jaehrlicher Zahlung ist 1 Monat kostenlos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                <BadgeEuro className="h-5 w-5 text-amber-200" />
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-stone-500">
                  {selectedPaymentOption.priceLabel}
                </p>
                <p className="mt-2 text-sm text-stone-100">{formatEuro(calculatedPaymentAmount)}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                <HandCoins className="h-5 w-5 text-amber-200" />
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-stone-500">Kaution</p>
                <p className="mt-2 text-sm text-stone-100">{formatEuro(calculatedDeposit)}</p>
              </div>
            </div>

            <form
              className="mt-10 rounded-[28px] border border-amber-300/15 bg-amber-300/8 p-6"
              onSubmit={handleSubmit}
            >
              <p className="text-xs uppercase tracking-[0.34em] text-amber-200/80">
                Anfrage direkt stellen
              </p>
              <p className="mt-3 font-display text-3xl text-stone-50">
                Direkt fuer {machine.name} anfragen
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-stone-100">Name</span>
                  <input
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-white/12 bg-black/20 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-stone-100">Firmenname</span>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-white/12 bg-black/20 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-stone-100">E-Mail</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-white/12 bg-black/20 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-stone-100">Nummer</span>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-white/12 bg-black/20 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                Anfrage stellen
              </button>

              {submitted && (
                <div className="mt-5 rounded-[22px] border border-emerald-500/20 bg-emerald-500/10 px-4 py-4 text-sm text-emerald-100">
                  Die Anfrage wurde an dein E-Mail-Programm uebergeben.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
