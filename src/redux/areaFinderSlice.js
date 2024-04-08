import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  reviews: [],
};

export const areaFinder = createSlice({
  name: "areaFinder",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // state.cart[existingItemIndex].quantity += action.quantity;
      } else {
        // If the item is not in the cart, add it
        state.cart.push(action.payload);
      }
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    resetCart: (state) => {
      state.cart = [];
    },

    increamentQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },

    decreamentQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    // addReview: (state, action) => {
    //   state.reviews = [...state.reviews, action.payload]; // concatenate the new review to the existing reviews array
    // },    

    removeUser: (state) => {
      return {
        ...state,
        userInfo: null,
      };
    },

    // removeUser: (state) => {
    //   state.userInfo = null;
    //   console.log("Redux State after removeUser:", state);
    // },
  },
});

export const {
  addToCart,
  setSelectedProduct,
  deleteItem,
  resetCart,
  increamentQuantity,
  decreamentQuantity,
  addUser,
  addReview,
  removeUser,
} = areaFinder.actions;
export default areaFinder.reducer;