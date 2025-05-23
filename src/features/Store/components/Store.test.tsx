import { render, screen} from "@testing-library/react";
import Store from "@/features/Store/components/Store";
import Cart from "@/features/Cart/components/Cart";
import { CartProvider } from "@/contexts/Cart-context";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const showCartContext = () => 
{
  render(
      <CartProvider>
        <>
          <Store />          
          <Cart />
        </>
      </CartProvider>
    );
}

const findCartButton = () => 
{
    const cartButton = screen.getByTestId("addToCartButton");

    return {cartButton};
}

const findProductTitle = async() => {
    const productTitle = await screen.findAllByText(/Product Title/i);

    return {productTitle};
}


describe("Store test", () => 
{
  test("should add the product to cart", async() => {
    showCartContext();
     
    const emptyCartMessage = screen.getByText("Your cart is empty");

    const {cartButton} = findCartButton();
  
    await userEvent.click(cartButton);
    
    expect(emptyCartMessage).not.toBeInTheDocument();
  });

  test("it shouldn't add the product to cart twice", async() => {

    showCartContext();

    const {cartButton} = findCartButton();
    
    await userEvent.dblClick(cartButton);

    const {productTitle} = await findProductTitle();

    expect(productTitle).not.toHaveLength(3);
  });
});



