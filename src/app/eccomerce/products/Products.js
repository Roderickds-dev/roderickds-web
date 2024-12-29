"use client";
import Image from "next/image";
import React, { useState } from "react";

const Products = ({ addToCart, products }) => {
  const [modal, setModal] = useState({});

  const openModal = (id) => {
    setModal(id);
  };
  return (
    <>
      {products.map((el, index) => (
        <div
          key={index}
          className="border-mediumBlue rounded-md bg-reactBlue p-4 grid min-h-full [grid-template-rows:auto_minmax(60px,_1fr)_auto] justify-items-center shadow-sm shadow-reactBlack"
        >
          <Image
            src={`/${el.imagen}`}
            width={500}
            height={500}
            alt={`Este es el nombre de la imagen de los productos${el.nombre}`}
            priority
            className="h-auto w-auto"
            quality={100}
          />
          <h4 id="cart-text" className="flex items-end text-center">
            {el.nombre}
          </h4>
          <h5 id="cart-text" className="flex justify-center">
            ${el.precio}.00
          </h5>
          <div className="flex gap-1">
            <button
              id="btn"
              onClick={() => addToCart(el.id)}
              className="bg-clearBlue"
            >
              Añadir al carrito
            </button>
            <div id="modal">
              <button
                id="btn"
                onClick={() => {
                  document.getElementById("my_modal_2").showModal(),
                    openModal(el);
                }}
              >
                Ver Descripción
              </button>
              <ul className="gap-1">
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="text-3xl text-white font-light">
                      Descripción
                    </h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div>
                              <p className="my-4">
                                <Image
                                  src={`/${modal.imagen}`}
                                  width={500}
                                  height={500}
                                  alt={`Este es el nombre del producto /${modal.imagen}`}
                                  priority
                                  className="h-auto w-auto"
                                  quality={100}
                                />
                              </p>
                              <h3 className="text-xl text-white">
                                Precio: ${modal.precio}.00
                              </h3>
                            </div>
                          </td>
                          <td>
                            <div
                              id="modal-products"
                              className="flex flex-col gap-1 mx-4"
                            >
                              <h3 id="description-p">{modal.nombre}</h3>

                              {modal.nucleos && (
                                <p id="description-p">
                                  Cantidad de Núcleos: {modal.nucleos}
                                </p>
                              )}

                              {modal.zocalo && (
                                <p id="description-p">Zócalo: {modal.zocalo}</p>
                              )}
                              {modal.generacion && (
                                <p id="description-p">
                                  Generación: {modal.generacion}
                                </p>
                              )}
                              {modal.frecuencia && (
                                <p id="description-p">
                                  Frecuencia: {modal.frecuencia}
                                </p>
                              )}
                              {modal.memoria && (
                                <p id="description-p">
                                  Memoria: {modal.memoria}
                                </p>
                              )}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-white text-xl">
                          ✕
                        </button>
                        <button
                          id="btn"
                          onClick={() => addToCart(modal.id)}
                          className="bg-clearBlue"
                        >
                          Añadir al carrito
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
