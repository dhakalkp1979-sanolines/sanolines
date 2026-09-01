import { useState } from "react";

function Calculators() {
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState("");

  const calculatePercentage = () => {
    const a = Number(amount);
    const p = Number(percentage);

    if (!a || !p) {
      setResult("Please enter both numbers.");
      return;
    }

    setResult(`${(a * p) / 100}`);
  };

  return (
    <section id="calculators">
      <h2>Calculators</h2>

      <p>
        Simple calculators for everyday use.
      </p>

      <div className="calculators-grid">
        <div className="calculator-box">
          <h3>Percentage Calculator</h3>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />

          <button onClick={calculatePercentage}>
            Calculate
          </button>

          <p>Result: {result}</p>
        </div>

        <div className="calculator-box">
          <h3>Salary Calculator</h3>
          <p>Salary calculation tools will be added here.</p>
        </div>

        <div className="calculator-box">
          <h3>Rent Calculator</h3>
          <p>Rent and monthly housing calculations will be added here.</p>
        </div>

        <div className="calculator-box">
          <h3>VAT Calculator</h3>
          <p>VAT calculation tools will be added here.</p>
        </div>

        <div className="calculator-box">
          <h3>Discount Calculator</h3>
          <p>Discount calculation tools will be added here.</p>
        </div>

        <div className="calculator-box">
          <h3>Monthly Budget</h3>
          <p>Monthly budget calculation tools will be added here.</p>
        </div>
      </div>
    </section>
  );
}

export default Calculators;
