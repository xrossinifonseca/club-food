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
  // abri mobile menu
  const [sideMenu, setSideMenu] = useState(false);
  // cep form
  const [showCep, setShowCep] = useState(false);
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
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    // atualizar preço
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    // atualizar quantidade
    setTotalQuantitites(
      (preveTotalQuantitites) => preveTotalQuantitites + quantity
    );
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(` ${product.name} adicionado ao carrinho`); // ${qty}
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
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantitites((preveTotalQuantitites) => preveTotalQuantitites + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
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
        sideMenu,
        setSideMenu,
        showCep,
        setShowCep,
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
