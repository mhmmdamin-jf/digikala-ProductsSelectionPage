import { configureStore } from "@reduxjs/toolkit";
import SearchBoxSlice from "./Components/Header/SearchBox/SeachBoxSlice";
import FilterSlice from "./Components/Products/Filter/FilterSlice";
import SortSlice from "./Components/Products/Sort/SortSlice";


const store = configureStore({
      reducer: {
            searchBox: SearchBoxSlice,
            filter: FilterSlice,
            sort: SortSlice
      },
});
export default store;