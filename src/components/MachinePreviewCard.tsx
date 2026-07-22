import { ArrowRight } from "lucide-react";
import { type KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import type { SlotMachine } from "@/data/siteContent";
interface MachinePreviewCardProps {
  machine: SlotMachine;
}

export function MachinePreviewCard({ machine }: MachinePreviewCardProps) {
  const navigate = useNavigate();
  const customImageBySlug: Record<string, string> = {
    "royal-lounge-8": "/Luxb.png",
    "city-play-compact": "/luxt.png",
    "event-star-deluxe": "/M-Box1.png",
    "max-profit-pro": "/luxs.png",
    "golden-vegas-x": "/Mboxslim.png",
  };
  const customBadgeBySlug: Record<string, string> = {
    "royal-lounge-8": "Bally Wulff",
    "city-play-compact": "Bally Wulff",
    "event-star-deluxe": "Merkur",
    "max-profit-pro": "Bally Wulff",
    "golden-vegas-x": "Merkur",
  };
  const previewImage = customImageBySlug[machine.slug] ?? machine.image;
  const previewBadge = customBadgeBySlug[machine.slug] ?? machine.category;
  const isContainedImage = previewImage === "/M-Box1.png";
  const isMediumContainedImage = previewImage === "/Luxb.png";
  const isSmallContainedImage = previewImage === "/luxt.png";
  const isLargeSmallContainedImage = previewImage === "/luxs.png";
  const isSlimContainedImage = previewImage === "/Mboxslim.png";
  const machineLink = `/automaten/${machine.slug}`;

  const navigateToMachine = () => {
    navigate(machineLink);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigateToMachine();
    }
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] transition duration-300 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <div
        className="relative cursor-pointer overflow-hidden"
        onClick={navigateToMachine}
        onKeyDown={handleKeyDown}
        role="link"
        tabIndex={0}
      >
        <img
          src={previewImage}
          alt={machine.name}
          className={
            isContainedImage
              ? "h-72 w-full bg-[#0f0f0f] object-contain p-5 transition duration-700 group-hover:scale-[1.01]"
              : isMediumContainedImage
                ? "h-72 w-full bg-[#0f0f0f] object-contain p-2 transition duration-700 group-hover:scale-[1.02]"
                : isSmallContainedImage
                  ? "h-72 w-full bg-[#0f0f0f] object-contain p-3 transition duration-700 group-hover:scale-[1.02]"
                  : isSlimContainedImage
                    ? "h-72 w-full bg-[#0f0f0f] object-contain p-4 transition duration-700 group-hover:scale-[1.02]"
                  : isLargeSmallContainedImage
                    ? "h-72 w-full scale-[1.08] bg-[#0f0f0f] object-contain p-0 transition duration-700 group-hover:scale-[1.1]"
                  : "h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          }
        />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/12 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-stone-100">
            {previewBadge}
          </span>
        </div>
      </div>

      <div
        className="flex flex-1 cursor-pointer flex-col p-6"
        onClick={navigateToMachine}
        onKeyDown={handleKeyDown}
        role="link"
        tabIndex={0}
      >
        <div className="flex min-h-[72px] items-start justify-center text-center">
          <h3 className="font-display text-3xl leading-[0.95] text-stone-50">{machine.name}</h3>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <div className="flex h-9 items-center justify-center">
            <span className="inline-flex h-8 min-w-[126px] items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/8 px-3 text-center text-[11px] font-semibold leading-none text-amber-200">
              {machine.monthlyPriceFrom}
            </span>
          </div>

          <Link
            to={machineLink}
            onClick={(event) => event.stopPropagation()}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-4 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
          >
            Mehr zum Automaten
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
