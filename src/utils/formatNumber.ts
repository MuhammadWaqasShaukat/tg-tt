export function formatCompactNumber(figure: number, locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: figure < 100_000 ? 1 : 2,
  }).format(figure);
}

export function formatCompactNumberHome(number:number, locale = 'en-US', maxFractionDigits = 1) {
  return number.toLocaleString(locale, {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: maxFractionDigits
  });
}