import { createSlice } from '@reduxjs/toolkit';

const searchBoxInitialData = { openSearch: false };
const SearchBoxSlice = createSlice({
      name: 'searchBox'
      , initialState: searchBoxInitialData
      , reducers: {
            exitSearchBox(state) {
                  state.openSearch = false;
            },
            openSearchBox(state) {
                  state.openSearch = true;
            },
      },
});


export default SearchBoxSlice.reducer;
export const { exitSearchBox, openSearchBox } = SearchBoxSlice.actions;