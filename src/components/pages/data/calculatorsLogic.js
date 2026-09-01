export function calculatePercentage(number, percentage) {
  return number * (percentage / 100);
}

export function calculateDiscount(price, discount) {
  const saved = price * (discount / 100);
  const finalPrice = price - saved;

  return {
    saved,
    finalPrice
  };
}

export function calculateVAT(amount, rate = 23) {
  const vat = amount * (rate / 100);
  const total = amount + vat;

  return {
    vat,
    total
  };
}

export function calculateRentPercentage(rent, income) {
  if (!income) return 0;

  return (rent / income) * 100;
}

export function calculateWorkingHours(hoursPerDay, numberOfDays) {
  return hoursPerDay * numberOfDays;
}

export function calculateBudget(income, expenses) {
  return income - expenses;
}

export function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference =
    today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function calculateEUR(amount, exchangeRate) {
  return amount * exchangeRate;
}

export function calculateSalary(grossSalary) {
  return Number(grossSalary);
}

export function calculateHolidayDays(days) {
  return Number(days);
}
