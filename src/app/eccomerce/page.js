"use client";
import { shoppingInitialState, shoppingReducer } from "@/reducers/reducerCart";
import { useEffect, useReducer, useState } from "react";
import Products from "./products/Products";
import CartItem from "./cart/page";
import { TYPES } from "@/actions/actionsCart";
import Link from "next/link";
import Purchase from "./purchase/Purchase";

const Eccomerce = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addtoCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const cleartCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const handleChange = (e) => {
    let searchInput = e.target.value.toLowerCase();
    setSearch(searchInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let productFind = shoppingInitialState.products.filter((el) =>
      el.nombre.toLowerCase().includes(search)
    );
    dispatch({ type: TYPES.SEARCH_PRODUCTS, payload: productFind });

    if (productFind.length < 1) setNotFound(true);
  };

  const showProducts = () => {
    window.location.reload();
  };

  useEffect(() => {
    const totalProducts = cart.reduce((total, el) => {
      return total + el.precio * el.quantity;
    }, 0);
    setTotalPrice(totalProducts);
  }, [cart]);

  return (
    <div id="contain_cart">
      <header id="header_cart">
        <Link id="btn" href="/">
          ir a Inicio
        </Link>
        <button id="btn" onClick={showProducts}>
          Productos
        </button>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            id="search_input"
            placeholder="Buscar..."
            onChange={handleChange}
            className="placeholder:text-white text-white"
          />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
        {search.length > 1 && !notFound ? (
          <h2 className="text-reactBlack font-lg text-xl">Buscar: {search}</h2>
        ) : (
          search.length > 1 &&
          notFound && (
            <p className="text-reactBlack font-lg text-xl">
              No encontramos resultados para tu busqueda
            </p>
          )
        )}
      </header>
      <main id="main_cart">
        {!notFound ? (
          <article id="article_cart">
            <Products addToCart={addtoCart} products={products} />
          </article>
        ) : (
          <div id="not_found">
            <p className="text-reactBlack font-lg text-xl">
              No encontramos resultados para tu busqueda
            </p>
            <button id="btn" onClick={showProducts}>
              Ver Productos
            </button>
          </div>
        )}
      </main>
      <aside
        id="aside_cart"
        className={`${
          cart.length < 1
            ? "bg-reactBlue rounded-sm hidden"
            : "bg-reactBlue rounded-sm"
        }`}
      >
        <h1 className="text-3xl text-reactBlack font-light">
          <i className="bi bi-cart m-2"></i>Carrito de Compras
        </h1>
        <div className="flex justify-center items-center gap-4 m-2">
          <table id="table-products">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((el, index) => (
                <CartItem
                  key={index}
                  data={el}
                  delFromCart={deleteFromCart}
                  addToCart={addtoCart}
                  cleartCart={cleartCart}
                />
              ))}
            </tbody>
          </table>
        </div>
        <table className="flex flex-col justify-center items-center">
          <thead>
            <tr>
              <td className="text-2xl text-reactBlack font-light">
                Total Carrito:
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div id="products-cart">${totalPrice},00</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center gap-4 m-4">
          <button id="btn" onClick={cleartCart}>
            Vaciar Carrito
          </button>
          <button
            id="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Finalizar Compra
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog" className="gap-4">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-white text-xl">
                  ✕
                </button>
              </form>
              <Purchase carProducts={cart} totalPrice={totalPrice} />
            </div>
          </dialog>
        </div>
      </aside>
    </div>
  );
};

export default Eccomerce;
