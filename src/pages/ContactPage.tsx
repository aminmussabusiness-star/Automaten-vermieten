import { Mail, MessageCircleMore, PhoneCall } from "lucide-react";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

import { SectionHeading } from "@/components/SectionHeading";
import { contactOptions, findMachineBySlug } from "@/data/siteContent";
import {
  buildInquiryMessage,
  buildMailtoLink,
  buildWhatsAppLink,
  type InquiryFormData,
} from "@/utils/inquiry";

const defaultFormData: InquiryFormData = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  location: "",
  rentalPeriod: "",
  message: "",
};

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const calculatorSummary = {
    duration: searchParams.get("laufzeit"),
    packageName: searchParams.get("paket"),
    monthlyPrice: searchParams.get("mietpreis"),
    deposit: searchParams.get("kaution"),
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [submitted, setSubmitted] = useState(false);

  const selectedMachine = useMemo(
    () => findMachineBySlug(searchParams.get("automat") ?? undefined),
    [searchParams],
  );

  const inquiryMessage = buildInquiryMessage(
    formData,
    selectedMachine ? [selectedMachine] : [],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailtoLink(inquiryMessage);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen px-5 py-8 md:px-8 md:py-10">
      <div className="rounded-[36px] border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
        <SectionHeading
          eyebrow="Kontakt"
          title="Direkter Kontakt fuer Mietanfragen und Rueckfragen."
          description="Hier kannst du allgemein anfragen oder direkt mit Bezug auf einen bestimmten Automaten Kontakt aufnehmen."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <aside className="space-y-4">
            {selectedMachine && (
              <div className="rounded-[28px] border border-amber-300/20 bg-amber-300/10 p-5">
                <p className="text-xs uppercase tracking-[0.34em] text-amber-200/80">
                  Vorausgewaehlt
                </p>
                <p className="mt-3 font-display text-3xl text-stone-50">{selectedMachine.name}</p>
                <p className="mt-3 text-sm leading-7 text-stone-300/78">
                  Deine Anfrage bezieht sich aktuell auf dieses Modell. Du kannst das Formular
                  direkt absenden oder erst noch Rueckfragen stellen.
                </p>
                {(calculatorSummary.duration ||
                  calculatorSummary.packageName ||
                  calculatorSummary.monthlyPrice ||
                  calculatorSummary.deposit) && (
                  <div className="mt-5 grid gap-3 rounded-[22px] border border-white/10 bg-black/20 p-4">
                    {calculatorSummary.duration && (
                      <p className="text-sm text-stone-200">
                        Mietlaufzeit:{" "}
                        <span className="text-stone-50">{calculatorSummary.duration}</span>
                      </p>
                    )}
                    {calculatorSummary.packageName && (
                      <p className="text-sm text-stone-200">
                        Spielpaket:{" "}
                        <span className="text-stone-50">{calculatorSummary.packageName}</span>
                      </p>
                    )}
                    {calculatorSummary.monthlyPrice && (
                      <p className="text-sm text-stone-200">
                        Monatliche Miete:{" "}
                        <span className="text-stone-50">{calculatorSummary.monthlyPrice}</span>
                      </p>
                    )}
                    {calculatorSummary.deposit && (
                      <p className="text-sm text-stone-200">
                        Kaution: <span className="text-stone-50">{calculatorSummary.deposit}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {contactOptions.map((option) => {
              const Icon =
                option.title === "Telefon"
                  ? PhoneCall
                  : option.title === "WhatsApp"
                    ? MessageCircleMore
                    : Mail;

              return (
                <a
                  key={option.title}
                  href={option.title === "WhatsApp" ? buildWhatsAppLink(inquiryMessage) : option.href}
                  target={option.title === "WhatsApp" ? "_blank" : undefined}
                  rel={option.title === "WhatsApp" ? "noreferrer" : undefined}
                  className="flex items-start gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-200">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-stone-50">{option.title}</span>
                    <span className="mt-1 block text-sm text-stone-300/76">{option.value}</span>
                    <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-stone-500">
                      {option.description}
                    </span>
                  </span>
                </a>
              );
            })}
          </aside>

          <form
            className="rounded-[32px] border border-white/10 bg-[#101010] p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-stone-200">Name</span>
                <input
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/12 bg-white/5 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-stone-200">Firma</span>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/12 bg-white/5 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-stone-200">Telefon</span>
                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/12 bg-white/5 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-stone-200">E-Mail</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/12 bg-white/5 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-stone-200">Standort</span>
                <input
                  required
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/12 bg-white/5 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-stone-200">Wunschzeitraum</span>
                <input
                  required
                  name="rentalPeriod"
                  value={formData.rentalPeriod}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-white/12 bg-white/5 px-4 text-stone-50 outline-none transition focus:border-amber-300/40"
                />
              </label>
            </div>

            <label className="mt-5 block space-y-2">
              <span className="text-sm text-stone-200">Nachricht</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={7}
                placeholder="Beschreibe hier kurz deinen gewuenschten Automaten, Standort oder offene Fragen."
                className="w-full rounded-[24px] border border-white/12 bg-white/5 px-4 py-4 text-stone-50 outline-none transition placeholder:text-stone-500 focus:border-amber-300/40"
              />
            </label>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-sm leading-7 text-stone-300/76">
                Beim Absenden wird eine strukturierte Anfrage in deinem E-Mail-Programm geoeffnet.
                Fuer schnelle Direktanfragen kannst du auch WhatsApp nutzen.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                Anfrage senden
              </button>
            </div>

            {submitted && (
              <div className="mt-6 rounded-[24px] border border-emerald-500/20 bg-emerald-500/10 px-4 py-4 text-sm leading-7 text-emerald-100">
                Die Anfrage wurde an dein E-Mail-Programm uebergeben.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
