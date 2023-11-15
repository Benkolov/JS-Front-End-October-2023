function calculateOrderPrice(product, quantity) {
    const productPrices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };

    if (productPrices.hasOwnProperty(product)) {
        const totalPrice = productPrices[product] * quantity;
        console.log(totalPrice.toFixed(2));
    } else {
        console.log("Invalid product");
    }
}

calculateOrderPrice("water", 5); // Output: 5.00
calculateOrderPrice("coffee", 2); // Output: 3.00
