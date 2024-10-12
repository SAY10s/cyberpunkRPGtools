// Funkcja do zamiany na małe litery, usuwania polskich znaków i zamiany spacji na myślniki
export const toLowercaseRemovePolishAndReplaceSpaces = (
  text: string,
): string => {
  const polishCharsMap: { [key: string]: string } = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ż: "z",
    ź: "z",
    Ą: "A",
    Ć: "C",
    Ę: "E",
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ż: "Z",
    Ź: "Z",
  };

  return text
    .toLowerCase() // Zamiana na małe litery
    .replace(/[ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]/g, (char) => polishCharsMap[char] || char) // Zamiana polskich znaków
    .replace(/\s+/g, "-"); // Zamiana spacji na myślniki
};
