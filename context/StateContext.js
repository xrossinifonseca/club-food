import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  // CART
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantitites, setTotalQuantitites] = useState(0);
  // const [qty, setQty] = useState(1);

  // campo busca de produtos
  // const [searchItem, setSearchItem] = useState("");
  const [info, setInfo] = useState([]);
  const [serchParams] = useState(["name", "price", "image"]);

  let foundProduct;
  let index;

  // Add product cart
  const addToCart = (product, quantity) => {
    const updateCart = [...cartItems];
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    // atualizar quantidade
    setTotalQuantitites(
      (preveTotalQuantitites) => preveTotalQuantitites + quantity
    );

    if (checkProductInCart) {
      checkProductInCart.quantity += quantity;
    } else {
      product.quantity = quantity;
      const newProduct = { ...product };
      updateCart.push(newProduct);
    }

    setCartItems(updateCart);
    toast.success(` ${product.name} adicionado ao carrinho`);
  };

  // remove product
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantitites(
      (preveTotalQuantitites) => preveTotalQuantitites - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };
  // aumentar e diminuir produtos atualizando valor dentro do cart

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      foundProduct.quantity += 1;

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantitites((preveTotalQuantitites) => preveTotalQuantitites + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantitites(
          (preveTotalQuantitites) => preveTotalQuantitites - 1
        );
      }
    }
  };

  // aumentar e diminuir produtos
  // const incQty = () => {
  //   setQty((prevQty) => prevQty + 1);
  // };
  // const decQty = () => {
  //   setQty((prevQty) => {
  //     if (prevQty - 1 < 1) return 1;
  //     return prevQty - 1;
  //   });
  // };

  const searchItem = (products, category) => {
    let items = [];

    products.map((product) => {
      product.filter((item) => {
        if (item._type === category) {
          return items.push(item);
        }
      });
    });
    return items;
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        addToCart,
        totalQuantitites,
        totalPrice,
        onRemove,
        toggleCartItemQuantity,
        searchItem,
        info,
        setInfo,
        serchParams,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
