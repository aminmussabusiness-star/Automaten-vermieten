import { ArrowRight } from "lucide-react";
import { type KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import type { SlotMachine } from "@/data/siteContent";
import { getMachinePreviewBadge, getMachinePreviewImage } from "@/utils/machinePreview";
interface MachinePreviewCardProps {
  machine: SlotMachine;
}

export function MachinePreviewCard({ machine }: MachinePreviewCardProps) {
  const navigate = useNavigate();
  const previewImage = getMachinePreviewImage(machine.slug, machine.image);
  const previewBadge = getMachinePreviewBadge(machine.slug, machine.category);
  const isContainedImage = previewImage === "/M-Box1.png";
  const isMerkurMultiImage = previewImage === "/merkurmulti.png";
  const isBallyDImage = previewImage === "/Ballyd.png";
  const isBallyTwinImage = previewImage === "/ballytwin.png";
  const isBallyWideImage = previewImage === "/ballywide.png";
  const isMediumContainedImage =
    previewImage === "/Ballyd.png" ||
    previewImage === "/merkurmulti.png" ||
    previewImage === "/ballytwin.png" ||
    previewImage === "/ballywide.png";
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
    <article className="group flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#101010] transition duration-300 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:h-full md:rounded-[32px]">
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
              ? "h-48 w-full bg-[#0f0f0f] object-contain p-3 transition duration-700 group-hover:scale-[1.01] md:h-72 md:p-5"
              : isMediumContainedImage
                ? isMerkurMultiImage
                  ? "h-48 w-full translate-y-6 scale-[1.03] bg-[#0f0f0f] object-contain p-0 transition duration-700 group-hover:scale-[1.05] md:h-72 md:translate-y-9 md:scale-[1.06] md:group-hover:scale-[1.08]"
                  : isBallyDImage
                    ? "h-44 w-full bg-[#0f0f0f] object-contain p-2 transition duration-700 group-hover:scale-[1.02] md:h-72"
                  : isBallyTwinImage
                    ? "h-48 w-full translate-y-2 bg-[#0f0f0f] object-contain p-3 transition duration-700 group-hover:scale-[1.02] md:h-72 md:translate-y-4 md:p-4"
                    : isBallyWideImage
                      ? "h-48 w-full translate-y-2 scale-[1.04] bg-[#0f0f0f] object-contain p-1 transition duration-700 group-hover:scale-[1.06] md:h-72 md:translate-y-4 md:scale-[1.07] md:group-hover:scale-[1.09]"
                      : "h-48 w-full bg-[#0f0f0f] object-contain p-2 transition duration-700 group-hover:scale-[1.02] md:h-72"
                : isSmallContainedImage
                  ? "h-48 w-full bg-[#0f0f0f] object-contain p-3 transition duration-700 group-hover:scale-[1.02] md:h-72"
                  : isSlimContainedImage
                    ? "h-48 w-full bg-[#0f0f0f] object-contain p-3 transition duration-700 group-hover:scale-[1.02] md:h-72 md:p-4"
                  : isLargeSmallContainedImage
                    ? "h-48 w-full scale-[1.04] bg-[#0f0f0f] object-contain p-0 transition duration-700 group-hover:scale-[1.06] md:h-72 md:scale-[1.08] md:group-hover:scale-[1.1]"
                  : "h-36 w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-72"
          }
        />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1.5 md:left-5 md:top-5">
          <span className="hidden rounded-full border border-white/12 bg-black/40 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-stone-100 md:inline-flex md:px-3 md:text-[11px] md:tracking-[0.28em]">
            {previewBadge}
          </span>
        </div>
      </div>

      <div
        className="flex flex-1 cursor-pointer flex-col p-1.5 md:p-6"
        onClick={navigateToMachine}
        onKeyDown={handleKeyDown}
        role="link"
        tabIndex={0}
      >
        <div className="flex min-h-[28px] items-start justify-center text-center md:min-h-[72px]">
          <h3 className="font-display text-[0.95rem] leading-[0.95] text-stone-50 md:text-3xl">
            {machine.name}
          </h3>
        </div>

        <div className="mt-0.5 flex flex-col gap-0.5 md:mt-4 md:gap-4">
          <div className="flex h-5 items-center justify-center md:h-9">
            <span className="inline-flex h-5 min-w-[78px] items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/8 px-2 text-center text-[7px] font-semibold leading-none text-amber-200 md:h-8 md:min-w-[126px] md:px-3 md:text-[11px]">
              {machine.monthlyPriceFrom}
            </span>
          </div>

          <Link
            to={machineLink}
            onClick={(event) => event.stopPropagation()}
            className="inline-flex h-7 w-full items-center justify-center gap-1 rounded-full bg-amber-300 px-2 text-[9px] font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-amber-200 md:h-12 md:gap-2 md:px-4 md:text-sm"
          >
            Mehr zum Automaten
            <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
