import { useState, useEffect, useRef } from 'react';
import { Item } from "./Item/Item-v2";
import { Filter } from "./Filter/Filter-v3";
import { Sort } from "./Sort/Sort-v3";
import { setRelevant, setTopViews, setNewest, setTopSellers, setCheapest, setMostExpense, setShortestTime, setMostStar } from './Sort/SortSlice';
import { useDispatch, useSelector } from 'react-redux';
let filter_sellexp = [];
let filter_avl = [];
let filter_avldg = [];
let filter_value2 = [];
let filter_dgplus_exp = [];
export function Products({ items_filtered, filter, dispatch, sortby1, items1 }) {
      const dispatcher = useDispatch();
      const items_sorted = useSelector(store => store.sort.items_sorted1);
      const { sellerexpress1, limitvalue, available1, availableInDgkala, dgplusexpress } = useSelector(store => store.filter);
      const num_items1 = useRef(0);
      num_items1.current = items_filtered.length;
      useEffect(function () {
            dispatcher(setRelevant())
      }, [])
      useEffect(function () {
            filter_sellexp = (sellerexpress1 === false) ? items_sorted : items_sorted.filter(item => item.post_by_seller === true);
            filter_avl = (available1 === true) ? filter_sellexp.filter(item => item.value !== null) : filter_sellexp;
            filter_avldg = (availableInDgkala === true) ? filter_avl.filter(item => item.availeabledgkala === true) : filter_avl;
            filter_dgplus_exp = (dgplusexpress === true) ? filter_avldg.filter(item => item.post_long === 1) : filter_avldg;
            filter_value2 = filter_dgplus_exp.filter(item => (item.value > limitvalue.min && item.value < limitvalue.max) || item.value === null);
            dispatch({ type: 'filter', payload: filter_value2 });
            items_filtered = filter_value2;
            num_items1.current = items_filtered.length;
      }, [sellerexpress1, limitvalue, available1, availableInDgkala, dgplusexpress, items_sorted]);
      return (
            <div className='container-fluid'>
                  <div className='row mx-3 justify-content-between'>
                        <div className='col-2 filter d-sm-none d-md-none d-lg-inline  h-100 '>
                              <Filter />
                        </div>
                        <div className='col-sm-12 col-lg-10 '>
                              <div className='d-flex flex-row ai-center'>
                                    <div className=' text-no-wrap'>
                                          <img src='images/svgexport-31.svg'></img>
                                          <span className='nav-font'>مرتب سازی</span>
                                    </div>
                                    <Sort OnClickHandler={setRelevant} sort_name={'مرتبط‌ترین'} ></Sort>
                                    <Sort OnClickHandler={setTopViews} sort_name={'پربازدیدترین'} ></Sort>
                                    <Sort OnClickHandler={setNewest} sort_name={'جدیدترین'} ></Sort>
                                    <Sort OnClickHandler={setTopSellers} sort_name={'پرفروش‌ترین‌'} ></Sort>
                                    <Sort OnClickHandler={setCheapest} sort_name={'ارزان‌ترین'} ></Sort>
                                    <Sort OnClickHandler={setMostExpense} sort_name={'گران‌ترین'} ></Sort>
                                    <Sort OnClickHandler={setShortestTime} sort_name={'سریع‌ترین ارسال'} ></Sort>
                                    <Sort OnClickHandler={setMostStar} sort_name={'پیشنهاد خریداران'} ></Sort>
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
            </div>
      );
}
