import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProducts, validateQuoteForm, getProductsForIndustry } from './catalogue';
import { productsData } from '../data/products';

test('filterProducts returns all products when no filters applied', () => {
  const result = filterProducts(productsData, {});
  assert.equal(result.length, productsData.length);
});

test('filterProducts filters correctly by category', () => {
  const plugCords = filterProducts(productsData, { category: 'Plug Cords' });
  assert.ok(plugCords.length > 0);
  plugCords.forEach((p) => {
    assert.equal(p.category, 'Plug Cords');
  });
});

test('filterProducts filters correctly by wire gauge', () => {
  const gaugeMatch = filterProducts(productsData, { wireGauge: '2.5 sq.mm' });
  assert.ok(gaugeMatch.length > 0);
  gaugeMatch.forEach((p) => {
    assert.ok(p.wireGauges.includes('2.5 sq.mm'));
  });
});

test('filterProducts filters by query string', () => {
  const queryMatch = filterProducts(productsData, { query: 'angled' });
  assert.equal(queryMatch.length, 1);
  assert.equal(queryMatch[0].slug, 'speedo-angled-3pin-plug-cord');
});

test('filterProducts filters correctly by new categories (IEC & Appliance Cords and Twin Flat)', () => {
  const iecCords = filterProducts(productsData, { category: 'IEC & Appliance Cords' });
  assert.ok(iecCords.length >= 2);
  iecCords.forEach((p) => assert.equal(p.category, 'IEC & Appliance Cords'));

  const twinFlat = filterProducts(productsData, { category: 'Twin Flat & Insulated Wires' });
  assert.ok(twinFlat.length >= 2);
  twinFlat.forEach((p) => assert.equal(p.category, 'Twin Flat & Insulated Wires'));
});

test('filterProducts handles sorting', () => {
  const asc = filterProducts(productsData, { sortBy: 'name-asc' });
  for (let i = 0; i < asc.length - 1; i++) {
    assert.ok(asc[i].name.localeCompare(asc[i + 1].name) <= 0);
  }
});

test('validateQuoteForm catches invalid / empty submissions', () => {
  const invalid = validateQuoteForm({
    name: '',
    companyName: '',
    emailOrPhone: '',
    productCategory: 'Plug Cords',
    requirementDescription: ''
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.companyName);
  assert.ok(invalid.errors.emailOrPhone);
  assert.ok(invalid.errors.requirementDescription);
});

test('validateQuoteForm accepts valid email or phone and requirements', () => {
  const valid = validateQuoteForm({
    name: 'Rajesh Sharma',
    companyName: 'Precision Fans Ltd',
    emailOrPhone: 'rajesh@precisionfans.com',
    productCategory: 'Plug Cords',
    requirementDescription: 'Need 50,000 units of 2-pin white plug cords 1.5m for fan assembly'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('getProductsForIndustry returns matching products', () => {
  const fanProducts = getProductsForIndustry(productsData, 'Fans');
  assert.ok(fanProducts.length > 0);
  fanProducts.forEach((p) => {
    assert.ok(p.applications.includes('Fans'));
  });
});

test('company contact details have verified phone 8500000077', async () => {
  const { DISPLAY_PHONE, RAW_PHONE, companyData } = await import('../data/companyData');
  assert.equal(RAW_PHONE, '8500000077');
  assert.equal(DISPLAY_PHONE, '+91 85000 00077');
  assert.equal(companyData.phone, '+91 85000 00077');
  assert.equal(companyData.isPhoneVerified, true);
});
