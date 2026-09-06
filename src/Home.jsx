<section className="home-section tools-section" id="tools">
  <div className="tools-hero">
    <div className="tools-hero-content">
      <span className="section-label">TOOLS</span>

      <h2>
        Simple tools.
        <br />
        Useful every day.
      </h2>

      <p>
        Practical calculators and converters designed to make everyday
        decisions faster and easier.
      </p>

      <button
        type="button"
        className="tools-hero-button"
        onClick={handleExploreTools}
      >
        Explore all tools
        <span>↓</span>
      </button>
    </div>

    <div className="tools-hero-image">
      <img
        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=85"
        alt="Professional financial and everyday planning workspace"
      />
    </div>
  </div>

  <div className="tools-grid">

    {/* Percentage Calculator */}
    <div className="tool-card">
      <div className="tool-card-number">01</div>

      <div className="tool-icon">%</div>

      <h3>Percentage Calculator</h3>

      <p>
        Quickly calculate percentages for prices, discounts,
        increases and everyday calculations.
      </p>

      <div className="percentage-calculator">
        <div className="percentage-calculator-header">
          <span>Calculate percentage</span>
        </div>

        <div className="percentage-calculator-body">
          <div className="percentage-input-group">
            <label>Amount</label>

            <div className="percentage-input-wrapper">
              <input
                type="number"
                value={percentageAmount}
                onChange={(e) =>
                  setPercentageAmount(e.target.value)
                }
                placeholder="1000"
              />
            </div>
          </div>

          <div className="percentage-input-group">
            <label>Percentage</label>

            <div className="percentage-input-wrapper">
              <input
                type="number"
                value={percentageValue}
                onChange={(e) =>
                  setPercentageValue(e.target.value)
                }
                placeholder="20"
              />

              <span className="percentage-symbol">%</span>
            </div>
          </div>

          <div className="percentage-actions">
            <button
              type="button"
              className="percentage-calculate-button"
              onClick={() =>
                setPercentageResult(
                  calculatePercentage(
                    percentageAmount,
                    percentageValue
                  )
                )
              }
            >
              Calculate
            </button>

            <button
              type="button"
              className="percentage-reset-button"
              onClick={() => {
                setPercentageAmount("");
                setPercentageValue("");
                setPercentageResult(null);
              }}
            >
              Reset
            </button>
          </div>

          {percentageResult !== null && (
            <div className="percentage-result">
              <span>Result</span>
              <strong>{percentageResult.toFixed(2)}</strong>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Salary Calculator */}
    <div className="tool-card">
      <div className="tool-card-number">02</div>

      <div className="tool-icon">€</div>

      <h3>Salary Calculator</h3>

      <p>
        Estimate annual, weekly and hourly income from a
        monthly salary.
      </p>

      <div className="tool-form">
        <label>Monthly salary</label>

        <input
          type="number"
          value={salaryMonthly}
          onChange={(e) => setSalaryMonthly(e.target.value)}
          placeholder="1500"
        />

        <label>Hours per week</label>

        <input
          type="number"
          value={salaryHours}
          onChange={(e) => setSalaryHours(e.target.value)}
          placeholder="40"
        />

        <label>Weeks per year</label>

        <input
          type="number"
          value={salaryWeeks}
          onChange={(e) => setSalaryWeeks(e.target.value)}
          placeholder="52"
        />

        <button
          type="button"
          className="tool-primary-button"
          onClick={() => {
            const monthly = Number(salaryMonthly);
            const hours = Number(salaryHours);
            const weeks = Number(salaryWeeks);

            if (monthly > 0 && hours > 0 && weeks > 0) {
              const annual = monthly * 12;
              const weekly = annual / weeks;
              const hourly = weekly / hours;

              setSalaryResult({
                annual,
                weekly,
                hourly,
              });
            }
          }}
        >
          Calculate salary
        </button>

        {salaryResult && (
          <div className="tool-result-list">
            <div>
              <span>Annual</span>
              <strong>€{salaryResult.annual.toFixed(2)}</strong>
            </div>

            <div>
              <span>Weekly</span>
              <strong>€{salaryResult.weekly.toFixed(2)}</strong>
            </div>

            <div>
              <span>Hourly</span>
              <strong>€{salaryResult.hourly.toFixed(2)}</strong>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Currency Converter */}
    <div className="tool-card">
      <div className="tool-card-number">03</div>

      <div className="tool-icon">↔</div>

      <h3>Currency Converter</h3>

      <p>
        Convert money using your own exchange rate.
        Live rates can be added later.
      </p>

      <div className="tool-form">
        <label>Amount</label>

        <input
          type="number"
          value={currencyAmount}
          onChange={(e) => setCurrencyAmount(e.target.value)}
          placeholder="100"
        />

        <label>Exchange rate</label>

        <input
          type="number"
          value={currencyRate}
          onChange={(e) => setCurrencyRate(e.target.value)}
          placeholder="1.08"
          step="0.0001"
        />

        <button
          type="button"
          className="tool-primary-button"
          onClick={() => {
            const amount = Number(currencyAmount);
            const rate = Number(currencyRate);

            if (amount > 0 && rate > 0) {
              setCurrencyResult(amount * rate);
            }
          }}
        >
          Convert
        </button>

        {currencyResult !== null && (
          <div className="single-tool-result">
            <span>Converted amount</span>
            <strong>{currencyResult.toFixed(2)}</strong>
          </div>
        )}
      </div>
    </div>

    {/* Age Calculator */}
    <div className="tool-card">
      <div className="tool-card-number">04</div>

      <div className="tool-icon">◷</div>

      <h3>Age Calculator</h3>

      <p>
        Calculate your exact age from your date of birth.
      </p>

      <div className="tool-form">
        <label>Date of birth</label>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <button
          type="button"
          className="tool-primary-button"
          onClick={() => {
            if (!birthDate) return;

            const birth = new Date(birthDate);
            const today = new Date();

            let years =
              today.getFullYear() - birth.getFullYear();

            let months =
              today.getMonth() - birth.getMonth();

            if (
              today.getDate() < birth.getDate()
            ) {
              months--;
            }

            if (months < 0) {
              years--;
              months += 12;
            }

            setAgeResult({
              years,
              months,
            });
          }}
        >
          Calculate age
        </button>

        {ageResult && (
          <div className="age-result">
            <strong>{ageResult.years}</strong>
            <span>years</span>

            <strong>{ageResult.months}</strong>
            <span>months</span>
          </div>
        )}
      </div>
    </div>

    {/* Date Calculator */}
    <div className="tool-card">
      <div className="tool-card-number">05</div>

      <div className="tool-icon">▣</div>

      <h3>Date Calculator</h3>

      <p>
        Find the number of days between two dates.
      </p>

      <div className="tool-form">
        <label>Start date</label>

        <input
          type="date"
          value={dateStart}
          onChange={(e) => setDateStart(e.target.value)}
        />

        <label>End date</label>

        <input
          type="date"
          value={dateEnd}
          onChange={(e) => setDateEnd(e.target.value)}
        />

        <button
          type="button"
          className="tool-primary-button"
          onClick={() => {
            if (!dateStart || !dateEnd) return;

            const start = new Date(dateStart);
            const end = new Date(dateEnd);

            const difference = Math.abs(
              end.getTime() - start.getTime()
            );

            const days = Math.ceil(
              difference / (1000 * 60 * 60 * 24)
            );

            setDateResult(days);
          }}
        >
          Calculate days
        </button>

        {dateResult !== null && (
          <div className="single-tool-result">
            <span>Difference</span>
            <strong>{dateResult} days</strong>
          </div>
        )}
      </div>
    </div>

    {/* Unit Converter */}
    <div className="tool-card">
      <div className="tool-card-number">06</div>

      <div className="tool-icon">↗</div>

      <h3>Unit Converter</h3>

      <p>
        Convert distance, weight and temperature quickly.
      </p>

      <div className="tool-form">
        <label>Value</label>

        <input
          type="number"
          value={unitValue}
          onChange={(e) => setUnitValue(e.target.value)}
          placeholder="10"
        />

        <label>Conversion</label>

        <select
          value={unitType}
          onChange={(e) => setUnitType(e.target.value)}
        >
          <option value="km-miles">Kilometres → Miles</option>
          <option value="miles-km">Miles → Kilometres</option>
          <option value="kg-pounds">Kilograms → Pounds</option>
          <option value="pounds-kg">Pounds → Kilograms</option>
          <option value="celsius-fahrenheit">
            Celsius → Fahrenheit
          </option>
          <option value="fahrenheit-celsius">
            Fahrenheit → Celsius
          </option>
        </select>

        <button
          type="button"
          className="tool-primary-button"
          onClick={() => {
            const value = Number(unitValue);

            if (Number.isNaN(value)) return;

            let result = 0;

            if (unitType === "km-miles") {
              result = value * 0.621371;
            }

            if (unitType === "miles-km") {
              result = value * 1.60934;
            }

            if (unitType === "kg-pounds") {
              result = value * 2.20462;
            }

            if (unitType === "pounds-kg") {
              result = value * 0.453592;
            }

            if (unitType === "celsius-fahrenheit") {
              result = (value * 9) / 5 + 32;
            }

            if (unitType === "fahrenheit-celsius") {
              result = ((value - 32) * 5) / 9;
            }

            setUnitResult(result);
          }}
        >
          Convert
        </button>

        {unitResult !== null && (
          <div className="single-tool-result">
            <span>Result</span>
            <strong>{unitResult.toFixed(2)}</strong>
          </div>
        )}
      </div>
    </div>

  </div>
</section>
