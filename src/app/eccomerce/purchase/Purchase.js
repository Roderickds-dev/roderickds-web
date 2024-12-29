import Image from "next/image";
import React, { useState } from "react";

const Purchase = ({ carProducts, totalPrice }) => {
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Tu presupuesto se ha enviado con exito");
      window.location.reload();
    }, 3000);
  };
  return (
    <div className="flex flex-col">
      {loading ? (
        <div className="flex item-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-white font-light">Su Pedido</h1>
          <div className="flex flex-col my-4">
            <table className="text-white">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {carProducts.map((el, index) => (
                  <tr key={index}>
                    <td className="flex">
                      <div id="products-cart">
                        <Image
                          src={`/${el.imagen}`}
                          width={500}
                          height={500}
                          alt={el.nombre}
                          priority
                          className="h-12 w-12"
                        />
                        <p id="purchase-p">
                          {el.nombre.length > 30
                            ? `${el.nombre.slice(0, 30)}... `
                            : el.nombre}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div id="products-cart">
                        <p id="purchase-p">{el.quantity}</p>
                      </div>
                    </td>
                    <td>
                      <div id="products-cart">
                        <p id="purchase-p">${el.quantity * el.precio},00</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col my-6 gap-3">
              <h1 className="text-2xl text-white font-light">
                Detalles de Facturación
              </h1>
              <p className="text-2xl text-white font-light">
                Total: ${totalPrice}
              </p>
              <form className="flex flex-col  gap-2" onSubmit={handleForm}>
                <input
                  required
                  type="mail"
                  name="mail"
                  placeholder="Dirección de correo Electrónico"
                  className="input text-lg border-2 bg-white text-reactBlack placeholder:text-reactBlack outline-none focus:outline-none focus:border-mediumBlue w-full max-w-xs"
                />
                <input
                  required
                  type="text"
                  name="nombre"
                  placeholder="Nombre(s)"
                  className="input text-lg border-2 bg-white text-reactBlack placeholder:text-reactBlack outline-none focus:outline-none focus:border-mediumBlue w-full max-w-xs"
                />
                <input
                  required
                  type="text"
                  name="apellido"
                  placeholder="Apellido(s)"
                  className="input text-lg border-2 bg-white text-reactBlack placeholder:text-reactBlack outline-none focus:outline-none focus:border-mediumBlue w-full max-w-xs"
                />
                <input
                  required
                  type="number"
                  name="telefono"
                  placeholder="Telefóno"
                  className="input text-lg border-2 bg-white text-reactBlack placeholder:text-reactBlack outline-none focus:outline-none focus:border-mediumBlue w-full max-w-xs"
                />
                <input
                  required
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  className="input text-lg border-2 bg-white text-reactBlack placeholder:text-reactBlack outline-none focus:outline-none focus:border-mediumBlue w-full max-w-xs"
                />

                <button type="submit" id="btn">
                  REALIZAR EL PEDIDO
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;
