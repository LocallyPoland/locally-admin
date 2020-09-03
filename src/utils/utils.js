export const getAdminToken = () => {
  return document.cookie.includes("aToken")
    ? document.cookie
        .split("; ")
        .filter((value) => value.startsWith("aToken"))[0]
        .split("=")[1]
    : null;
};

export const polishMonths = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];
