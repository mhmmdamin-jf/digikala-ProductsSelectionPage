import { createSlice } from "@reduxjs/toolkit";

const initialProductsData = { loading: false, items_filtered: [] };
const ProductReducer = createSlice({
      name: 'product',
      initialState: initialProductsData,
      reducers: {
            loading(state) {
                  state.loading = true;
            },
            filter(state, action) {
                  state.items_filtered = action.payload;
            }
      }
})

export const { loading, filter } = ProductReducer.actions;
export default ProductReducer.reducer;