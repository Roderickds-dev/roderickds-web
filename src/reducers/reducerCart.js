"use client";
import { TYPES } from "@/actions/actionsCart";
export const shoppingInitialState = {
  products: [
    {
      id: 1,
      precio: 59000,
      nombre: "Amd Athlon 3000g c/Radeon Vega 3 (Am4)",
      nucleos: 2,
      zocalo: "AM4",
      generacion: "3th Gen",
      frecuencia: "3.5 Ghz",
      imagen: "imagesCart/athlon3000g.webp",
      tipo: "procesador",
    },
    {
      id: 2,
      precio: 174600,
      nombre: "Amd (AM4) Ryzen 5 5600GT",
      nucleos: 6,
      zocalo: "AM4",
      generacion: "5th Gen",
      frecuencia: "4 Ghz",
      imagen: "imagesCart/Ryzen_5_5600GT.webp",
      tipo: "procesador",
    },
    {
      id: 3,
      precio: 113000,
      nombre: "AMD Ryzen 5 4500",
      nucleos: 6,
      zocalo: "AM4",
      generacion: "4th Gen",
      frecuencia: "4.1 Ghz",
      imagen: "imagesCart/Ryzen_5_4500.webp",
      tipo: "procesador",
    },

    {
      id: 4,
      precio: 203800,
      nombre: "VGA SAPPHIRE PULSE RX 6500 XT OC 4GB GDDR6 RADEON",
      memoria: "4GB GDDR6",
      imagen: "imagesCart/RX_6500_XT_OC_4GB.webp",
      tipo: "videoCard",
    },
    {
      id: 5,
      precio: 420500,
      nombre: "Placa de Video RX 6600 Gaming Sapphire Pulse 8GB",
      memoria: "8GB GDDR6",
      imagen: "imagesCart/RX_6600_Pulse_8GB.jpg",
      tipo: "videoCard",
    },
    {
      id: 6,
      precio: 471500,
      nombre: "Placa De Video Asrock Amd Radeon Rx 7600 Steel Legend 8gb",
      memoria: "8GB GDDR6",
      imagen: "imagesCart/RX_7600_Steel.webp",
      tipo: "videoCard",
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((el) => el.id === action.payload);
      let itemInCart = state.cart.find((el) => el.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((el) =>
              el.id === newItem.id ? { ...el, quantity: el.quantity + 1 } : el
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((el) => el.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((el) =>
              el.id === action.payload
                ? { ...el, quantity: el.quantity - 1 }
                : el
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((el) => el.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    case TYPES.SEARCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }  
    default:
      return state;
  }
}
