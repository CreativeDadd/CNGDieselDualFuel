const password = 'keslogbinX-45';

function login() {
    const inputPassword = document.getElementById('password').value;
    if (inputPassword === password) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('appForm').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
}

function calculateCosts() {
    const rating = document.getElementById('rating').value;
    const hours = document.getElementById('hours').value;
    const dieselPrice = document.getElementById('dieselPrice').value;
    const cngPrice = document.getElementById('cngPrice').value;
    const consumption = document.getElementById('consumption').value;
    const cngPercentage = document.getElementById('cngPercentage').value / 100;
    const dieselPercentage = document.getElementById('dieselPercentage').value / 100;
    const installationCost = document.getElementById('installationCost').value;

    // Calculate hourly consumption if not provided
    let hourlyConsumption = consumption ? consumption : (rating * 0.2);

    // 100% Diesel costs
    const dieselHourlyCost = hourlyConsumption * dieselPrice;
    const dieselDailyCost = dieselHourlyCost * hours;
    const dieselWeeklyCost = dieselDailyCost * 7;
    const dieselMonthlyCost = dieselDailyCost * 30;

    // Dual fuel costs
    const dieselCost = hourlyConsumption * dieselPercentage * dieselPrice;
    const cngCost = hourlyConsumption * cngPercentage * cngPrice;
    const dualFuelHourlyCost = dieselCost + cngCost;
    const dualFuelDailyCost = dualFuelHourlyCost * hours;
    const dualFuelWeeklyCost = dualFuelDailyCost * 7;
    const dualFuelMonthlyCost = dualFuelDailyCost * 30;

    // Savings
    const hourlySavings = dieselHourlyCost - dualFuelHourlyCost;
    const dailySavings = dieselDailyCost - dualFuelDailyCost;
    const weeklySavings = dieselWeeklyCost - dualFuelWeeklyCost;
    const monthlySavings = dieselMonthlyCost - dualFuelMonthlyCost;

    // Breakeven time
    const breakevenTimeHours = installationCost / hourlySavings;
    const breakevenTimeDays = breakevenTimeHours / hours;
    const breakevenTimeWeeks = breakevenTimeDays / 7;
    const breakevenTimeMonths = breakevenTimeDays / 30;

    // Format numbers with commas
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Display results
    document.getElementById('dieselHourlyCost').innerText = `100% Diesel Hourly Cost: ${formatNumber(dieselHourlyCost.toFixed(2))} NGN`;
    document.getElementById('dieselDailyCost').innerText = `100% Diesel Daily Cost: ${formatNumber(dieselDailyCost.toFixed(2))} NGN`;
    document.getElementById('dieselWeeklyCost').innerText = `100% Diesel Weekly Cost: ${formatNumber(dieselWeeklyCost.toFixed(2))} NGN`;
    document.getElementById('dieselMonthlyCost').innerText = `100% Diesel Monthly Cost: ${formatNumber(dieselMonthlyCost.toFixed(2))} NGN`;
    document.getElementById('dualFuelHourlyCost').innerText = `CNG-Diesel Hourly Cost: ${formatNumber(dualFuelHourlyCost.toFixed(2))} NGN`;
    document.getElementById('dualFuelDailyCost').innerText = `CNG-Diesel Daily Cost: ${formatNumber(dualFuelDailyCost.toFixed(2))} NGN`;
    document.getElementById('dualFuelWeeklyCost').innerText = `CNG-Diesel Weekly Cost: ${formatNumber(dualFuelWeeklyCost.toFixed(2))} NGN`;
    document.getElementById('dualFuelMonthlyCost').innerText = `CNG-Diesel Monthly Cost: ${formatNumber(dualFuelMonthlyCost.toFixed(2))} NGN`;
    document.getElementById('dualFuelHourlySavings').innerText = `Hourly Savings: ${formatNumber(hourlySavings.toFixed(2))} NGN`;
    document.getElementById('dualFuelDailySavings').innerText = `Daily Savings: ${formatNumber(dailySavings.toFixed(2))} NGN`;
    document.getElementById('dualFuelWeeklySavings').innerText = `Weekly Savings: ${formatNumber(weeklySavings.toFixed(2))} NGN`;
    document.getElementById('dualFuelMonthlySavings').innerText = `Monthly Savings: ${formatNumber(monthlySavings.toFixed(2))} NGN`;
    document.getElementById('breakevenTime').innerText = `Breakeven Time: ${formatNumber(breakevenTimeDays.toFixed(2))} days`;
    document.getElementById('breakevenTimeWeeks').innerText = `Breakeven Time: ${formatNumber(breakevenTimeWeeks.toFixed(2))} weeks`;
    document.getElementById('breakevenTimeMonths').innerText = `Breakeven Time: ${formatNumber(breakevenTimeMonths.toFixed(2))} months`;
}

function resetForm() {
    document.getElementById('costForm').reset();
    document.getElementById('results').querySelectorAll('p').forEach(p => p.innerText = '');
}
