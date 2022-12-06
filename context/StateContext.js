import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  // logica cart
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantitites, setTotalQuantitites] = useState(0);
  const [qty, setQty] = useState(1);

  const [cep, setCep] = useState("");
  const [local, setLocal] = useState([]);
  const [message, setMessage] = useState(true);

  // campo busca de produtos
  const [searchItem, setSearchItem] = useState("");
  const [info, setInfo] = useState([]);
  const [serchParams] = useState(["name", "price", "image"]);

  let foundProduct;
  let index;

  // Adicionar produto no carrinho
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

  // remover produto
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
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        addToCart,
        incQty,
        decQty,
        qty,
        totalQuantitites,
        totalPrice,
        onRemove,
        toggleCartItemQuantity,
        cep,
        setCep,
        local,
        setLocal,
        message,
        setMessage,
        searchItem,
        setSearchItem,
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
