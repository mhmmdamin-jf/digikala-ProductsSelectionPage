import { useState } from 'react';
import { Item } from "./Item";
import { Filter } from "./Filter";
import { Sort } from "./Sort";

export function Products({ items, setItems }) {
  const [sortby, setSortby] = useState('relevant');
  const [dgplusexpress, setDigiplusexpress] = useState(false);
  const [sellerexpress, setsellerexpress] = useState(false);
  const [limitvalue, setLimitvalue] = useState({ min: 0, max: 99999999 });
  const [available, setAvailable] = useState(false);
  const [availabledgkala, setAvailabledgkala] = useState(false);
  let items_sorted = [];
  if (sortby === 'top_views') { items_sorted = items.slice().sort((a, b) => b.views - a.views); }
  if (sortby === 'relevant') { items_sorted = items.slice(); }
  if (sortby === 'newest') { items_sorted = items.slice().sort((a, b) => b.date - a.date); }
  if (sortby === 'top_sells') { items_sorted = items.slice().sort((a, b) => b.sells - a.sells); }
  if (sortby === 'cheapest') { items_sorted = items.slice().sort((a, b) => a.value - b.value); }
  if (sortby === 'most_expens') { items_sorted = items.slice().sort((a, b) => b.value - a.value); }
  if (sortby === 'shortest-time') { items_sorted = items.slice().sort((a, b) => a.post_long - b.post_long); }
  if (sortby === 'most_star') { items_sorted = items.slice().sort((a, b) => b.star - a.star); }
  let filter_sellexp = (sellerexpress === false) ? items_sorted : items_sorted.filter(item => item.post_by_seller === true);
  let filter_avl = (available === true) ? filter_sellexp.filter(item => item.value !== null) : filter_sellexp;
  let filter_avldg = (availabledgkala === true) ? filter_avl.filter(item => item.availeabledgkala === true) : filter_avl;
  let filter_dgplus_exp = (dgplusexpress === true) ? filter_avldg.filter(item => item.post_long === 1) : filter_avldg;
  let filter_value = filter_dgplus_exp.filter(item => (item.value > limitvalue.min && item.value < limitvalue.max) || item.value === null);
  const num_items = filter_value.length;
  return (
    <div className='container-fluid'>
      <div className='row mx-3 justify-content-between'>
        <div className='col-2 filter d-sm-none d-md-none d-lg-inline  h-100 '>
          <Filter dgplusexpress={dgplusexpress} setDigiplusexpress={setDigiplusexpress} sellerexpress={sellerexpress} setsellerexpress={setsellerexpress} limitvalue={limitvalue}
            setLimitvalue={setLimitvalue} available={available} setAvailable={setAvailable} availabledgkala={availabledgkala}
            setAvailabledgkala={setAvailabledgkala} />
        </div>
        <div className='col-sm-12 col-lg-10 '>
          <div className='d-flex flex-row ai-center'>
            <div className=' text-no-wrap'>
              <img src='images/svgexport-31.svg'></img>
              <span className='nav-font'>مرتب سازی</span>
            </div>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'relevant'} sort_name={'مرتبط‌ترین'}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'top_views'} sort_name={'پربازدیدترین'}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'newest'} sort_name={'جدیدترین'}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'top_sells'} sort_name={'پرفروش‌ترین‌'}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'cheapest'} sort_name={'ارزان‌ترین'}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'most_expens'} sort_name={'گران‌ترین'}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'shortest-time'} sort_name={'سریع‌ترین ارسال'}></Sort>
            <Sort setSortby={setSortby} sortby={sortby} sort_type={'most_star'} sort_name={'پیشنهاد خریداران'}></Sort>
            <div className='me-auto text-no-wrap nav-font txt-sort-op'>{num_items} کالا</div>
          </div>
          <div className='row '>
            {(
              filter_value
            )
              .map(item => <Item item={item} key={item.key} />)}
          </div>
        </div>
      </div>
    </div>);
}
