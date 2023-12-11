const toCurrency = document.getElementById('toCurrency');
const inputNumber = document.getElementById('input');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const selectedCurrency = toCurrency.value;
  const inputValue = inputNumber.value;

  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const rate = data.rates[selectedCurrency];
      const convertedValue = inputValue * rate;
      result.textContent = `${inputValue} USD is equal to ${convertedValue.toFixed(2)} ${selectedCurrency}`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      result.textContent = 'Error fetching data. Please try again later.';
    });
});
