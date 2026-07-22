export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-stone-50">Automaten Vermietung</p>
          <p className="mt-2 text-sm text-stone-400">
            Hochwertige Vermietungswebsite fuer Geldspielautomaten mit direkter Anfragefuehrung.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-stone-400">
          <a href="tel:+491701234567" className="transition hover:text-stone-100">
            Telefon
          </a>
          <a href="mailto:anfrage@automaten-miete.de" className="transition hover:text-stone-100">
            E-Mail
          </a>
          <a href="https://wa.me/491701234567" className="transition hover:text-stone-100">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
