export const capitalizeWords = (value: string) =>
  value
    .split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ")
