import { Mail, MessageCircleMore, PhoneCall } from "lucide-react";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { contactOptions, slotMachines } from "@/data/siteContent";
import { useSelectionStore } from "@/store/useSelectionStore";
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

export function InquirySection() {
  const { selectedIds, clearSelection } = useSelectionStore();
  const [formData, setFormData] = useState(defaultFormData);
  const [submitted, setSubmitted] = useState(false);

  const selectedMachines = useMemo(
    () => slotMachines.filter((machine) => selectedIds.includes(machine.id)),
    [selectedIds],
  );

  const inquiryMessage = buildInquiryMessage(formData, selectedMachines);

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
    <section id="anfrage" className="container py-24">
      <SectionHeading
        eyebrow="Mietanfrage"
        title="Sende die Anfrage direkt mit deiner Auswahl."
        description="Die Formulardaten werden zusammen mit den vorgemerkten Automaten in eine fertig strukturierte Anfrage uebernommen."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs uppercase tracking-[0.34em] text-amber-200/80">
            Ausgewaehlte Automaten
          </p>
          <div className="mt-6 space-y-3">
            {selectedMachines.length > 0 ? (
              selectedMachines.map((machine) => (
                <div
                  key={machine.id}
                  className="rounded-[24px] border border-white/10 bg-black/25 px-4 py-4"
                >
                  <p className="font-medium text-stone-50">{machine.name}</p>
                  <p className="mt-2 text-sm text-stone-300/76">{machine.tagline}</p>
                </div>
              ))
            ) : (
              <div className="rounded-[24px] border border-dashed border-white/12 px-4 py-5 text-sm leading-7 text-stone-300/72">
                Noch keine Auswahl getroffen. Du kannst trotzdem eine Anfrage senden oder vorher im
                Bereich Automaten passende Modelle markieren.
              </div>
            )}
          </div>

          <div className="mt-8 space-y-3">
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
                  className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-black/25 px-4 py-4 transition hover:border-white/20 hover:bg-black/35"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-200">
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
          </div>

          {submitted && (
            <div className="mt-8 rounded-[24px] border border-emerald-500/20 bg-emerald-500/10 px-4 py-4 text-sm leading-7 text-emerald-100">
              Die Anfrage wurde an dein E-Mail-Programm uebergeben. Wenn du moechtest, kannst du die
              Auswahl jetzt leeren und eine neue Konstellation anfragen.
              <button
                type="button"
                onClick={clearSelection}
                className="mt-4 block rounded-full bg-emerald-400 px-4 py-2 font-medium text-neutral-950"
              >
                Auswahl leeren
              </button>
            </div>
          )}
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
                placeholder="z. B. 3 Monate oder Event am 12.09."
                className="h-14 w-full rounded-2xl border border-white/12 bg-white/5 px-4 text-stone-50 outline-none transition placeholder:text-stone-500 focus:border-amber-300/40"
              />
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-sm text-stone-200">Nachricht</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Beschreibe hier kurz, wie viele Automaten du brauchst oder welche Anforderungen dein Standort hat."
              className="w-full rounded-[24px] border border-white/12 bg-white/5 px-4 py-4 text-stone-50 outline-none transition placeholder:text-stone-500 focus:border-amber-300/40"
            />
          </label>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-stone-300/76">
              Beim Absenden wird eine fertig formulierte Mietanfrage in deinem E-Mail-Programm
              geoeffnet. Fuer schnelle Direktanfragen steht zusaetzlich WhatsApp bereit.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              Mietanfrage senden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
