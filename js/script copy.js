{

    const helo = () => {
        console.log("Witam, zadanie 4, Pozdrawiam hUps;) ");
    }

    helo();

    const formElement = document.querySelector(".js-form");
    const inputAmountElement = document.querySelector(".js-inputAmount");
    const currencyUnitElement = document.querySelector(".js-currencyUnit");
    const conversionResultElement = document.querySelector(".js-conversionResult");

    const plnEur = 4.6853;
    const plnFunt = 5.3046;
    const plnUsa = 4.4167;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const inputAmount = +inputAmountElement.value;
        const currencyUnit = currencyUnitElement.value;
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

}


