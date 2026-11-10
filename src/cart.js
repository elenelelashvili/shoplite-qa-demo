export function addToCart(cart, product) {
    if (!product.name || product.price <= 0) {
        throw new Error("Invalid product");
    }

    return [...cart, product];
}

export function calculateTotal(cart) {
    return cart.reduce((total, product) => {
        return total + product.price;
    }, 0);
}
