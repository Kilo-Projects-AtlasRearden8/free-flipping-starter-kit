import assert from 'node:assert/strict';
import { calculateProfit, formatCurrency } from '../profit-calculator.js';

const CLOSE = 1e-9;
function close(actual, expected, label) {
  assert.ok(Math.abs(actual - expected) <= CLOSE, `${label}: expected ${expected}, got ${actual}`);
}

// eBay-style inputs
let result = calculateProfit({
  salePrice: 20.00,
  purchaseCost: 5.00,
  shippingCost: 0.00,
  suppliesCost: 1.00,
  feePercent: 13.25, // approx eBay final value + payment processing
  paymentFeePercent: 0,
  shippingPaidBySeller: false,
});

close(result.fee, 2.65, 'fee');
close(result.totalCost, 6.00, 'totalCost');
close(result.netProfit, 11.35, 'netProfit');
close(result.margin, 56.75, 'margin');
close(result.roi, 189.16666666666666, 'roi');

// Amazon-style: seller pays shipping out of sale proceeds
result = calculateProfit({
  salePrice: 30.00,
  purchaseCost: 10.00,
  shippingCost: 5.00,
  suppliesCost: 1.00,
  feePercent: 15.00,
  paymentFeePercent: 0,
  shippingPaidBySeller: true,
});

close(result.fee, 4.50, 'fee');
close(result.totalCost, 16.00, 'totalCost');
close(result.netProfit, 9.50, 'netProfit');
close(result.margin, 31.666666666666668, 'margin');
close(result.roi, 59.375, 'roi');

// Zero sale price edge case
result = calculateProfit({
  salePrice: 0,
  purchaseCost: 0,
  shippingCost: 0,
  suppliesCost: 0,
  feePercent: 0,
  paymentFeePercent: 0,
  shippingPaidBySeller: false,
});

close(result.netProfit, 0, 'netProfit zero');
close(result.margin, 0, 'margin zero');

// Currency formatting
assert.strictEqual(formatCurrency(11.35), '$11.35');
assert.strictEqual(formatCurrency(2), '$2.00');
assert.strictEqual(formatCurrency(0.5), '$0.50');

console.log('All profit calculator tests passed.');
