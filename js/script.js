console.log("Witam, zadanie 4, Pozdrawiam hUps;) ");

let formElement = document.querySelector(".js-form");
let inputAmountElement = document.querySelector(".js-inputAmount");
let currencyUnitElement = document.querySelector(".js-currencyUnit");
let conversionResultElement = document.querySelector(".js-conversionResult");
let kursElement = document.querySelector("js-kurs");

let plnEur = 4.6853;
let plnFunt = 5.3046;
let plnUsa = 4.4167;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputAmount = +inputAmountElement.value;
    let currencyUnit = currencyUnitElement.value;
    let result;
    let exchange;

    switch (currencyUnit) {
        case "EUR":
            result = inputAmount / plnEur;
            exchange = plnEur;
            break;
        case "GBP":
            result = inputAmount / plnFunt;
            exchange = plnFunt;
            break;
        case "USD":
            result = inputAmount / plnUsa;
            exchange = plnUsa;
    }

    conversionResultElement.innerHTML = `${result.toFixed(2)} ${currencyUnit}  -> Kurs:${exchange.toFixed(2)} PLN`;
});

