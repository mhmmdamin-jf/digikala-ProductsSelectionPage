import { useState, useEffect, useRef } from 'react';
import { Item } from "./Item-v2";
import { Filter } from "./Filter-v2";
import { Sort } from "./Sort-v2";

export function Products({ items_filtered, filter, items_sorted, dispatch, sortby1, loading }) {
  const [sortby, setSortby] = useState('relevant');
  const num_items1 = useRef(0);
  const [filterState, setFilterState] = useState(0);
  let filter_sellexp = [];
  let filter_avl = [];
  let filter_avldg = [];
  let filter_value2 = [];
  let filter_dgplus_exp = [];
  num_items1.current = items_filtered.length;
  useEffect(function () {
    switch (sortby1) {
      case 'top-views':
        dispatch({ type: 'sortTopViews' });
      case 'relevant':
        dispatch({ type: 'relevant' });
      case 'newest':
        dispatch({ type: 'newest' });
      case 'topSellers':
        dispatch({ type: 'topSellers' });
      case 'cheapest':
        dispatch({ type: 'cheapest' });
      case 'mostExpense':
        dispatch({ type: 'mostExpense' });
      case 'ShortestTime':
        dispatch({ type: 'ShortestTime' });
      case 'mostStar':
        dispatch({ type: 'mostStar' });
      default:
        dispatch({ type: 'relevant' });
    }
    filter_sellexp = (filter.sellerexpress1 === false) ? items_sorted : items_sorted.filter(item => item.post_by_seller === true);
    filter_avl = (filter.available1 === true) ? filter_sellexp.filter(item => item.value !== null) : filter_sellexp;
    filter_avldg = (filter.availableInDgkala === true) ? filter_avl.filter(item => item.availeabledgkala === true) : filter_avl;
    filter_dgplus_exp = (filter.dgplusexpress === true) ? filter_avldg.filter(item => item.post_long === 1) : filter_avldg;
    filter_value2 = filter_dgplus_exp.filter(item => (item.value > filter.limitvalue.min && item.value < filter.limitvalue.max) || item.value === null);
    dispatch({ type: 'filter', payload: filter_value2 });
    num_items1.current = items_filtered.length;
  }, [filter, sortby1, filterState, num_items1]);
  return (
    <div className='container-fluid'>
      <div className='row mx-3 justify-content-between'>
        <div className='col-2 filter d-sm-none d-md-none d-lg-inline  h-100 '>
          <Filter setFilterState={setFilterState} filter={filter} dispatch={dispatch} />
        </div>
        <div className='col-sm-12 col-lg-10 '>
          <div className='d-flex flex-row ai-center'>
            <div className=' text-no-wrap'>
              <img src='images/svgexport-31.svg'></img>
              <span className='nav-font'>مرتب سازی</span>
            </div>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'relevant'} sort_name={'مرتبط‌ترین'} dispatch={dispatch}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'topViews'} sort_name={'پربازدیدترین'} dispatch={dispatch}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'newest'} sort_name={'جدیدترین'} dispatch={dispatch}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'topSellers'} sort_name={'پرفروش‌ترین‌'} dispatch={dispatch}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'cheapest'} sort_name={'ارزان‌ترین'} dispatch={dispatch}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'mostExpense'} sort_name={'گران‌ترین'} dispatch={dispatch}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'shortestTime'} sort_name={'سریع‌ترین ارسال'} dispatch={dispatch}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'mostStar'} sort_name={'پیشنهاد خریداران'} dispatch={dispatch}></Sort>
            <div className='me-auto text-no-wrap nav-font txt-sort-op'>{items_filtered.length === 0 ? items_sorted.length : num_items1.current} کالا</div>
          </div>
          <div className='row border-top me-1'>
            {items_filtered.length !== 0 ?
              (items_filtered)
                .map((item, i) => <Item item={item} key={i} />) :
              (items_sorted)
                .map((item, i) => <Item item={item} key={i} />)}
          </div>
        </div>
      </div>
    </div>);
}
