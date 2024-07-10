import { createSlice } from "@reduxjs/toolkit"

const FilterInitialData = {
      dgplusexpress: false, sellerexpress1: false, limitvalue: { min: 0, max: 99999999 }
      , available1: false, availableInDgkala: false
};
const FilterReducer = createSlice({
      name: 'filter',
      initialState: FilterInitialData,
      reducers: {
            reset(state) {
                  state.filter = FilterInitialData.filter;
            },
            setavailableInDgkala(state) {
                  state.availableInDgkala = !state.availableInDgkala;
            },
            setDgPlusExpress(state) {
                  state.dgplusexpress = !state.dgplusexpress;
            },
            setSetSellerExpress(state) {
                  state.sellerexpress1 = !state.sellerexpress1;
            },
            setLimitValue(state, action) {
                  state.limitvalue = action.payload;
            },
            setAvailable(state) {
                  state.available1 = !state.available1;
            },
            setValuemin(state, action) {
                  state.limitvalue = { ...state.limitvalue, min: action.payload };
            },
            setValuemax(state, action) {
                  state.limitvalue = { ...state.limitvalue, max: action.payload };
            },
      }
})


export default FilterReducer.reducer;
export const { reset, setavailableInDgkala, setAvailable, setDgPlusExpress, setLimitValue, setSetSellerExpress, setValuemax, setValuemin } = FilterReducer.actions;