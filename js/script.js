{

    const calculateResult = (currencyUnit, inputAmount) => {
        const plnEur = 4.6853;
        const plnFunt = 5.3046;
        const plnUsa = 4.4167;

        switch (currencyUnit) {
            case "EUR":
                return inputAmount / plnEur;

            case "GBP":
                return inputAmount / plnFunt;

            case "USD":
                return inputAmount / plnUsa;
        }
    };

    const updateResultText = (currencyUnit, result, inputAmount,) => {
        const conversionResultElement = document.querySelector(".js-conversionResult");
        conversionResultElement.innerHTML = `${inputAmount.toFixed(2)} PLN = ${result.toFixed(2)} ${currencyUnit}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputAmountElement = document.querySelector(".js-inputAmount");
        const currencyUnitElement = document.querySelector(".js-currencyUnit");

        const inputAmount = +inputAmountElement.value;
        const currencyUnit = currencyUnitElement.value;

        const result = calculateResult(currencyUnit, inputAmount);

        updateResultText(currencyUnit, result, inputAmount);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();

};


