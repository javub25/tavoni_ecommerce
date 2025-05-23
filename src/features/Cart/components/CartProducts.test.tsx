/*I would like to know if total price matches the sum of all products in the cart.*/

import {render, screen} from "@testing-library/react";
import {CartProducts} from "@/features/Cart/components/CartProducts.tsx";
import "@testing-library/jest-dom";

const getFakeFunction = () => jest.fn();

const getFakeConfirmation = () => 
{
    const mockConfirmation = getFakeFunction();
    return {mockConfirmation};
}

const getFakeCart = () => 
{
    const mockCart = getFakeFunction();
    return {mockCart};
}


const getTotalPrice = () => 
{
    const priceValue = screen.getByTestId("totalPrice");
    return {priceValue}
}

const getFakeProducts = () => 
{
    const mockProducts = [{
        id: 200,
        title: "Nike Shoes",
        price: 100,
        description: "A pair of nice shoes",
        category: "shoes",
        images: ["fake-image1.jpg"],
        quantity: 1
    },
    {
        id: 120,
        title: "Computer",
        price: 200,
        description: "A powerful computer",
        category: "technology",
        images: ["fake-image2.jpg"],
        quantity: 1
    }]
    return {mockProducts}
}

const showCartProducts = () => 
{
    const {mockCart} = getFakeCart();
    const {mockProducts} = getFakeProducts();
    const {mockConfirmation} = getFakeConfirmation();

    
    render (
        <CartProducts cart={mockProducts} setCart={mockCart} 
            setOrderConfirmation={mockConfirmation} 
        />
    )
}


test("it should to be the total price 300 euros", () => 
{
    showCartProducts();

    const {priceValue} = getTotalPrice();

    expect(priceValue).toHaveTextContent("300.00€");
})

