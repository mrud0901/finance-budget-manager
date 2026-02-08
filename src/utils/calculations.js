export function calculateTotalExpenses(expenses) {
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
}

export function calculateTotalAssets(assets) {
  return assets.reduce((total, asset) => total + asset.value, 0);
}