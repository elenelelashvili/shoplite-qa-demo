import { test } from 'node:test';
import assert from 'node:assert';
import { addToCart, calculateTotal } from '../src/cart.js';

test('should add a product to cart', () => {
    const cart = [];
    const product = { name: 'Pink Bag', price: 25 };

    const result = addToCart(cart, product);

    assert.equal(result.length, 1);
    assert.equal(result[0].name, 'Pink Bag');
});

test('should calculate cart total', () => {
    const cart = [
        { name: 'Pink Bag', price: 25 },
        { name: 'Hair Clip', price: 5 }
    ];

    assert.equal(calculateTotal(cart), 30);
});

test('should reject invalid products', () => {
    const cart = [];
    const product = { name: 'Broken Product', price: -5 };

    assert.throws(() => addToCart(cart, product));
});
