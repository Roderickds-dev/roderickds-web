import Image from "next/image";

const CartItem = ({ data, delFromCart, addToCart }) => {
  if (!data) {
    return null;
  }
  let { id, precio, nombre, quantity, imagen } = data;
  return (
    <>
      <tr>
        <td className="flex">
          <div id="products-cart">
            <button onClick={() => delFromCart(id, true)}>
              <i className="bi bi-trash"></i>
            </button>
            <Image
              src={`/${imagen}`}
              width={500}
              height={500}
              alt={nombre}
              priority
              className="h-12 w-12"
            />
            <p id="cart-text">
              {nombre.length > 15 ? `${nombre.slice(0, 15)}... ` : nombre}
            </p>
          </div>
        </td>
        <td>
          <div id="products-cart">{`$${precio},00`}</div>
        </td>
        <td>
          <div id="products-cart">
            <button onClick={() => delFromCart(id)}>
              <i className="bi bi-dash-square"></i>
            </button>
            {quantity}
            <button onClick={() => addToCart(id)}>
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        </td>
        <td>
          <div id="products-cart">${quantity * precio},00</div>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
