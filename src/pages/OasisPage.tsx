export default function OasisPage() {
  return (
    <div className="min-h-screen px-5 py-8 md:px-8 md:py-10">
      <div className="rounded-[36px] border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.34em] text-amber-200/80">Oasis</p>
        <h1 className="mt-4 font-display text-4xl leading-none text-stone-50 md:text-5xl">
          Informationen zu Oasis
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-stone-300/80">
          Dieser Bereich ist jetzt als eigener Punkt in der Sidebar angelegt und kann als
          eigenstaendige Unterseite fuer Oasis weiter ausgebaut werden.
        </p>
      </div>
    </div>
  );
}
