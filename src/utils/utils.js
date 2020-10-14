import addNotification from "react-push-notification";

export const getAdminToken = () => {
    return document.cookie.includes("aToken")
        ? document.cookie
              .split("; ")
              .filter((value) => value.startsWith("aToken"))[0]
              .split("=")[1]
        : null;
};

export const showNotification = (data) => {
    console.log(data);
    addNotification({
        title: "Locally",
        subtitle: "Nowe zamówienie",
        message: "Paczka 10kg z ul.Marszalkowska 1/20 do ul.Maryniarska 53",
        theme: "darkblue",
        duration: 10000,
        native: true,
        // icon: Logo,
    });
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
