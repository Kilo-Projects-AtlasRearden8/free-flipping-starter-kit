/**
 * Flipping profit calculator logic.
 * Pure JavaScript, no dependencies. Runs entirely in the browser.
 *
 * All money values are in dollars. feePercent and paymentFeePercent are
 * percentages of the sale price (e.g. 13.25 means 13.25%).
 */

export function calculateProfit(inputs) {
  const {
    salePrice = 0,
    purchaseCost = 0,
    shippingCost = 0,
    suppliesCost = 0,
    feePercent = 0,
    paymentFeePercent = 0,
    shippingPaidBySeller = false,
  } = inputs;

  const sale = Number(salePrice) || 0;
  const purchase = Number(purchaseCost) || 0;
  const shipping = Number(shippingCost) || 0;
  const supplies = Number(suppliesCost) || 0;
  const feePct = Number(feePercent) || 0;
  const paymentPct = Number(paymentFeePercent) || 0;

  const fee = sale * (feePct / 100);
  const paymentFee = sale * (paymentPct / 100);
  const sellerShipping = shippingPaidBySeller ? shipping : 0;

  const totalCost = purchase + supplies + sellerShipping;
  const netProfit = sale - fee - paymentFee - totalCost;
  const margin = sale ? (netProfit / sale) * 100 : 0;
  const roi = totalCost ? (netProfit / totalCost) * 100 : 0;

  return {
    fee,
    paymentFee,
    sellerShipping,
    totalCost,
    netProfit,
    margin,
    roi,
  };
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(value) || 0);
}
