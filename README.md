# 🛍️ Tavoni - Ecommerce 

This projects simulates an ecommerce website allows the user add their product items to the cart
and buy them.

![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-✓-blue)
![Vite](https://img.shields.io/badge/Vite-6.1.1-brightgreen)

<img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1747131285/tavoni_screens_iqqqcd.png" style="width:80%; height:auto" alt="Tavoni website">


<br/>
Try it out here 👉 [Demo](https://tavoni-ecommerce.vercel.app/)

<br/>


## How to install 🛠️

1️⃣ &nbsp;Clone repository <br />
```git
git clone "https://github.com/javub25/tavoni_ecommerce.git"
```

2️⃣ &nbsp;Install all dependencies from package.json <br />
```npm
npm install
```

3️⃣ &nbsp; Run project development mode<br/>
```npm
npm run dev
```

4️⃣ &nbsp; Run project production mode (optional)<br/>
```npm
npm run build
npm run preview
```

<br/>

## Dessign Pattern ♻️

Adapter pattern to extract only properties needed from products store.


## Lazy loading 📉


To improve performance I implemented:


1) Carrousel images using <b>loading="lazy"</b> attribute.

    - The first image in the carousel is loaded with <b>loading="eager" and fetchPriority="high"</b> to make sure is rendered immediately. <br/>

    - The next two images are loaded as eager. <br/>

    - Remaining images use <b>loading="lazy"</b> to optimize resource usage.

    <br/>

2) Store and Cart routes


## 🧪 Testing Section ##


## 1 ) 🛒 Integration Test: Store ↔ Cart

<br/>

## 📁 File

@features/Store/components/Store.test.tsx

<br/>

## 🎯 Goal

To verify that a product displayed in the Store component can be successfully added to the Cart.

<br/>

## 🧪 Test Scenario Overview

Store ↔ Displays each product.

ProductInfo ↔ Renders product details and includes 'Add to Cart' button.

CartContext ↔ Shared state between Store and Cart items.

Cart ↔ Displays updated cart items.



<br/>


## 🔧 Implementation Details

We simulate a product being rendered inside the Store component. 
This allows us to test the integration without relying on real API calls.

<br/>

```tsx
// Store.tsx
export const Store = () => {
    const { setCart } = useCartContext();

    const productInfo = {
        id: 1,
        title: "Product Title",
        description: "Product Description",
        category: "Category",
        price: 100,
        images: ["https://via.placeholder.com/150 "]
    };

    return (
        <>
            <ProductInfo setCart={setCart} product={productInfo} />
        </>
    );
};
```

## 📸 Visual Reference

![alt text](/src/assets/img/store--test.webp)

<br/>


## 2 ) 🛒 Integration Test: Store ↔ Cart

## 🎯 Goal

To make sure a certain product can't be added to the cart twice.

<br/>

## Our test

``` ts
test("it shouldn't add the product to cart twice", async() => {

    showCartContext();

    const {cartButton} = findCartButton();
    
    await userEvent.dblClick(cartButton);

    const {productTitle} = await findProductTitle();

    expect(productTitle).not.toHaveLength(3);
  });
```

· <b>userEvent.dblClick</b> --> We simulate two clicks to try to add our product twice. <br/>
· <b>expect(productTitle).not.toHaveLength(3)</b> --> We make sure that there are only two products (Store -- 1) and (Cart -- 1).


## 📸 Visual Reference


![alt text](https://res.cloudinary.com/dye4ylysz/image/upload/v1747234442/duplicatedProductTwice_fhc4dq.png)




## 3 ) 🛒 Unit Test: CartProducts


## 📁 File

@features/Cart/components/CartProducts.test.tsx

## 🎯 Goal

To make sure the total price of two products are 300 €

## Our test

```ts
test("it should to be the total price 300 euros", () => 
{
    showCartProducts();

    const {priceValue} = getTotalPrice();

    expect(priceValue).toHaveTextContent("300.00€");
})
```

## 📸 Visual Reference

![alt text](https://res.cloudinary.com/dye4ylysz/image/upload/v1747304673/totalPrice_arqnmx.png)


## 🌍 Wiki ##

[Products](https://dummyjson.com/docs/products) <br/>

[Carousel](https://www.embla-carousel.com/)