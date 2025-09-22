import https from 'https';
import readline  from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const apikey = 'efe898db5303b2aec5560faa';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}

https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;

        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) => {
                const rate = rates[currency.toUpperCase()];
                if (rate) {
                    console.log(chalk.green(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency.toUpperCase()}`));
                } else {
                    console.log(chalk.red(`Invalid Currency Code`));
                }
                rl.close()
            });
        });
    });
});