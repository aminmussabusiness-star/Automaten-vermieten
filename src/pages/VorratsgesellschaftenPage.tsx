import { useState, type ChangeEvent, type FormEvent } from "react";

import { buildMailtoLink } from "@/utils/inquiry";

export default function VorratsgesellschaftenPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Neue Anfrage zu Vorratsgesellschaften",
      "",
      `Name: ${formData.fullName}`,
      `E-Mail: ${formData.email}`,
      `Telefon: ${formData.phone}`,
      "",
      "Interesse: Vorratsgesellschaft mit bestehender Aufstellererlaubnis",
    ].join("\n");

    window.location.href = buildMailtoLink(message);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen px-5 py-8 md:px-8 md:py-10">
      <div className="rounded-[36px] border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.34em] text-amber-200/80">
          Vorratsgeselschaften
        </p>
        <h1 className="mt-4 font-display text-4xl leading-none text-stone-50 md:text-5xl">
          Vorratsgesellschaften mit bestehender Aufstellererlaubnis
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-stone-300/80">
          Hier werden Vorratsgesellschaften mit bestehender Aufstellererlaubnis angeboten. Der
          Ablauf ist einfach, klar strukturiert und auf einen schnellen Start ausgerichtet.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Schritt 1</p>
            <h2 className="mt-3 font-display text-2xl leading-none text-stone-50">
              Gesellschaft auswaehlen
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-300/80">
              Zuerst wird die passende Vorratsgesellschaft mit bestehender Aufstellererlaubnis
              ausgewaehlt.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Schritt 2</p>
            <h2 className="mt-3 font-display text-2xl leading-none text-stone-50">
              Wechsel beim Notar
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-300/80">
              Danach erfolgt der Geschaeftsfuehrerwechsel beim Notar, damit die Gesellschaft sauber
              uebernommen werden kann.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Schritt 3</p>
            <h2 className="mt-3 font-display text-2xl leading-none text-stone-50">
              Meldung beim Gewerbeamt
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-300/80">
              Im Anschluss wird der neue Gesellschafter beim Gewerbeamt gemeldet und das
              Unternehmen ist startklar.
            </p>
          </div>
        </div>

        <form
          className="mt-10 rounded-[28px] border border-amber-300/15 bg-amber-300/8 p-6"
          onSubmit={handleSubmit}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
            Anfrage stellen
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-100">
            Wenn Sie Interesse an einer Vorratsgesellschaft mit bestehender Aufstellererlaubnis
            haben, koennen Sie jetzt direkt eine Anfrage stellen.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
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
              <span className="text-sm text-stone-100">Telefonnummer</span>
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
            Anfrage abschicken
          </button>

          {submitted && (
            <div className="mt-5 rounded-[22px] border border-emerald-500/20 bg-emerald-500/10 px-4 py-4 text-sm text-emerald-100">
              Die Anfrage wurde an Ihr E-Mail-Programm uebergeben.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
