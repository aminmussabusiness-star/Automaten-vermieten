const customImageBySlug: Record<string, string> = {
  "royal-lounge-8": "/Ballyd.png",
  "city-play-compact": "/luxt.png",
  "event-star-deluxe": "/M-Box1.png",
  "max-profit-pro": "/luxs.png",
  "golden-vegas-x": "/Mboxslim.png",
  "smart-line-mini": "/merkurmulti.png",
  "night-flash-event": "/ballytwin.png",
  "power-tower-max": "/ballywide.png",
};

const customBadgeBySlug: Record<string, string> = {
  "royal-lounge-8": "Bally Wulff",
  "city-play-compact": "Bally Wulff",
  "event-star-deluxe": "Merkur",
  "max-profit-pro": "Bally Wulff",
  "golden-vegas-x": "Merkur",
};

export function getMachinePreviewImage(slug: string, fallbackImage: string) {
  return customImageBySlug[slug] ?? fallbackImage;
}

export function getMachinePreviewBadge(slug: string, fallbackBadge: string) {
  return customBadgeBySlug[slug] ?? fallbackBadge;
}
