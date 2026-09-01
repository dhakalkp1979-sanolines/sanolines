import { useState } from "react";

function CalculatorBox({ title, children }) {
  return (
    <article className="calculator-box">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

function Calculators() {
  const [salary, setSalary] = useState("");
  const [salaryResult, setSalaryResult] = useState("");

  const [vat, setVat] = useState("");
  const [vatRate, setVatRate] = useState("23");
  const [vatResult, setVatResult] = useState("");

  const [rent, setRent] = useState("");
  const [income, setIncome] = useState("");
  const [rentResult, setRentResult] = useState("");

  const [birthDate, setBirthDate] = useState("");
  const [ageResult, setAgeResult] = useState("");

  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const [hoursResult, setHoursResult] = useState("");

  const [holidayDays, setHolidayDays] = useState("");
  const [holidayResult, setHolidayResult] = useState("");

  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [percentageResult, setPercentageResult] = useState("");

  const [originalPrice, setOriginalPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountResult, setDiscountResult] = useState("");

  const [eur, setEur] = useState("");
  const [eurRate, setEurRate] = useState("");
  const [eurResult, setEurResult] = useState("");

  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [budgetResult, setBudgetResult] = useState("");

  function calculateSalary() {
    const value = Number(salary);

    if (!value) {
      setSalaryResult("");
      return;
    }

    setSalaryResult(`€${value.toFixed(2)} gross salary`);
  }

  function calculateVAT() {
    const value = Number(vat);
    const rate = Number(vatRate);

    if (!value || !rate) {
      setVatResult("");
      return;
    }

    const tax = value * (rate / 100);
    const total = value + tax;

    setVatResult(
      `VAT: €${tax.toFixed(2)} | Total: €${total.toFixed(2)}`
    );
  }

  function calculateRent() {
    const rentValue = Number(rent);
    const incomeValue = Number(income);

    if (!rentValue || !incomeValue) {
      setRentResult("");
      return;
    }

    const percentageValue = (rentValue / incomeValue) * 100;

    setRentResult(
      `Rent is ${percentageValue.toFixed(1)}% of your monthly income.`
    );
  }

  function calculateAge() {
    if (!birthDate) {
      setAgeResult("");
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const monthDifference =
      today.getMonth() - birth.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 &&
        today.getDate() < birth.getDate())
    ) {
      age--;
    }

    setAgeResult(`Age: ${age} years`);
  }

  function calculateWorkingHours() {
    const h = Number(hours);
    const d = Number(days);

    if (!h || !d) {
      setHoursResult("");
      return;
    }

    setHoursResult(`Total: ${(h * d).toFixed(2)} hours`);
  }

  function calculateHoliday() {
    const daysValue = Number(holidayDays);

    if (!daysValue) {
      setHolidayResult("");
      return;
    }

    setHolidayResult(`Holiday days: ${daysValue}`);
  }

  function calculatePercentage() {
    const n = Number(number);
    const p = Number(percentage);

    if (!n || !p) {
      setPercentageResult("");
      return;
    }

    const result = n * (p / 100);

    setPercentageResult(`${p}% of ${n} = ${result.toFixed(2)}`);
  }

  function calculateDiscount() {
    const price = Number(originalPrice);
    const discountValue = Number(discount);

    if (!price || !discountValue) {
      setDiscountResult("");
      return;
    }

    const saved = price * (discountValue / 100);
    const finalPrice = price - saved;

    setDiscountResult(
      `You save €${saved.toFixed(2)} | Final price: €${finalPrice.toFixed(2)}`
    );
  }

  function calculateEUR() {
    const amount = Number(eur);
    const rate = Number(eurRate);

    if (!amount || !rate) {
      setEurResult("");
      return;
    }

    setEurResult(`Result: ${(amount * rate).toFixed(2)}`);
  }

  function calculateBudget() {
    const inc = Number(monthlyIncome);
    const exp = Number(monthlyExpenses);

    if (!inc || !exp) {
      setBudgetResult("");
      return;
    }

    const remaining = inc - exp;

    setBudgetResult(
      remaining >= 0
        ? `Remaining: €${remaining.toFixed(2)}`
        : `Shortfall: €${Math.abs(remaining).toFixed(2)}`
    );
  }

  return (
    <section id="calculators">
      <h2>Calculators</h2>

      <p>
        Simple calculators for everyday use. Results are estimates
        and should be checked when official calculations are required.
      </p>

      <div className="calculators-grid">

        <CalculatorBox title="Salary Calculator">
          <input
            type="number"
            placeholder="Gross salary (€)"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <button onClick={calculateSalary}>Calculate</button>
          <p>{salaryResult}</p>
        </CalculatorBox>

        <CalculatorBox title="VAT Calculator">
          <input
            type="number"
            placeholder="Amount (€)"
            value={vat}
            onChange={(e) => setVat(e.target.value)}
          />
          <input
            type="number"
            placeholder="VAT %"
            value={vatRate}
            onChange={(e) => setVatRate(e.target.value)}
          />
          <button onClick={calculateVAT}>Calculate</button>
          <p>{vatResult}</p>
        </CalculatorBox>

        <CalculatorBox title="Rent Calculator">
          <input
            type="number"
            placeholder="Monthly rent (€)"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          />
          <input
            type="number"
            placeholder="Monthly income (€)"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
          <button onClick={calculateRent}>Calculate</button>
          <p>{rentResult}</p>
        </CalculatorBox>

        <CalculatorBox title="Age Calculator">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <button onClick={calculateAge}>Calculate</button>
          <p>{ageResult}</p>
        </CalculatorBox>

        <CalculatorBox title="Working Hours">
          <input
            type="number"
            placeholder="Hours per day"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
          <button onClick={calculateWorkingHours}>Calculate</button>
          <p>{hoursResult}</p>
        </CalculatorBox>

        <CalculatorBox title="Holiday Days">
          <input
            type="number"
            placeholder="Number of holiday days"
            value={holidayDays}
            onChange={(e) => setHolidayDays(e.target.value)}
          />
          <button onClick={calculateHoliday}>Calculate</button>
          <p>{holidayResult}</p>
        </CalculatorBox>

        <CalculatorBox title="Percentage Calculator">
          <input
            type="number"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="number"
            placeholder="Percentage %"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
          <button onClick={calculatePercentage}>Calculate</button>
          <p>{percentageResult}</p>
        </CalculatorBox>

        <CalculatorBox title="Discount Calculator">
          <input
            type="number"
            placeholder="Original price (€)"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Discount %"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <button onClick={calculateDiscount}>Calculate</button>
          <p>{discountResult}</p>
        </CalculatorBox>

        <CalculatorBox title="EUR Currency Calculator">
          <input
            type="number"
            placeholder="EUR amount"
            value={eur}
            onChange={(e) => setEur(e.target.value)}
          />
          <input
            type="number"
            placeholder="Exchange rate"
            value={eurRate}
            onChange={(e) => setEurRate(e.target.value)}
          />
          <button onClick={calculateEUR}>Calculate</button>
          <p>{eurResult}</p>
          <small>
            Enter the current exchange rate manually.
          </small>
        </CalculatorBox>

        <CalculatorBox title="Monthly Budget">
          <input
            type="number"
            placeholder="Monthly income (€)"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
          <input
            type="number"
            placeholder="Monthly expenses (€)"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
          />
          <button onClick={calculateBudget}>Calculate</button>
          <p>{budgetResult}</p>
        </CalculatorBox>

      </div>
    </section>
  );
}

export default Calculators;
