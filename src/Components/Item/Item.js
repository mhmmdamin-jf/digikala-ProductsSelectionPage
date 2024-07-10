import { Item_view } from './Item_view';
import { Item_selection } from './Item_selection-V2';
import { useEffect } from 'react';
import { Seller } from './Seller';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DGkala_op } from './DGkala_op';
import { Properties } from './Properties';
import { Slide_obj } from './Slide_obj';
import { fetchItem, insuranceToggle } from './ItemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { s_colorSetter, item_sellersSetter, insuranceCalc, item_sellersFilter } from './ItemSlice'
import '@vidstack/react/player/styles/default/theme.css';
import { getItemData } from '../../services/apiItem';
import { delItem, addToCart } from '../Cart/cartSlice';
import { TextColorConverter } from '../../helpers/convertSelectedColor';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
export function Item() {
      const { id: itemId } = useParams();
      const dispatcher = useDispatch();
      const item = useSelector(store => store.item);
      const itemData = useSelector(store => store.item.itemData);
      const seller = useSelector(store => store.item.seller)
      const { Insurance, s_color } = useSelector(store => store.item);
      const item_sellers = item && item.item_sellers;
      const { relatedItems, images: itemImages, name: itemName } = itemData !== null ? itemData[0] : [];
      // const related_items = [{ name: 'گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت', img: '/product-s-images/related_items/1.svg', price: 14000000 },
      // { name: 'گوشی موبایل سامسونگ مدل Galaxy A54 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت', img: '/product-s-images/related_items/2.svg', price: 14000000 },
      // { name: 'گوشی موبایل سامسونگ مدل GALAXY A53 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت - ویتنام', img: '/product-s-images/related_items/3.svg', price: 14000000 },
      // { name: 'گوشی موبایل سامسونگ مدل Galaxy A33 5G SM-A336 دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت', img: '/product-s-images/related_items/4.svg', price: 9000000 },
      // { name: 'گوشی موبایل شیائومی مدل Poco X4 GT 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت     ', img: '/product-s-images/related_items/5.svg', price: 14000000 },
      // { name: 'گوشی موبایل وان پلاس مدل Ace دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - پک چین ', img: '/product-s-images/related_items/6.svg', price: 10000000 },
      // { name: 'گوشی موبایل سامسونگ مدل Galaxy M33 5G SM-M336B/DS دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت - اکتیو', img: '/product-s-images/related_items/7.svg', price: 14000000 },
      // { name: 'گوشی موبایل هوآوی مدل Mate 50 Pro دو سیم کارت ظرفیت 512 گیگابایت و رم 8 گیگابایت', img: '/product-s-images/related_items/8.svg', price: 14000000 },
      // { name: 'گوشی موبایل شیائومی مدل Redmi Note 10 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت', img: '/product-s-images/related_items/9.svg', price: 14000000 },];
      // const sellers = [{ name: 'کیان ارتباط فردا', chosen: true, satis: 0, proceed: 'best', postby: 'dgkala', postfast: 0, garanty: 'گارانتی ۱۸ ماهه پویا همراه آرمان', price: 19555555, color: ['p', 'w'] }
      //       , { name: 'دیجی‌کالا', chosen: false, proceed: 'best', satis: 80, postby: 'dgkala', postfast: 1, garanty: 'گارانتی ۱۸ ماهه عمران تل(نیک مهر عمرانی)', price: 20555555, color: ['g', 'p'] },
      // { name: 'طرح اندیشان سمت نو', chosen: false, proceed: 'good', satis: 0, postby: 'seller', postfast: 2, garanty: 'گارانتی ۱۸ ماهه آرتین تجارت آریا تدبیر', price: 19000000, color: ['p'] },];
      // const properties = [{ property: 'ابعاد', value: '۷.۹×۷۴.۵×۱۵۵.۷ ' },
      // { property: 'توضیحات کارت حافظه جانبی', value: 'عدم پشتیبانی از کارت حافظه جانبی ' },
      // { property: 'وزن', value: '۱۷۷ گرم' },
      // { property: 'فناوری صفحه‌نمایش', value: 'Dynamic AMOLED ۲X ' },
      // { property: 'بازه‌ی اندازه صفحه نمایش', value: '۶.۰ اینچ و بزرگتر ' },
      // ];
      // const [item_sellers, dispatcher(item_sellersSetter] = useState(sellers.filter(item => item.color.includes(s_color)));
      // const [seller, setSeller] = useState(item_sellers[0]);
      // const isPaused = useMediaPlayer('paused');
      function handle_insurance(e) {
            dispatcher(insuranceToggle());
            if (Insurance === true) {
                  dispatcher(item_sellersSetter())
                  dispatcher(item_sellersSetter(insuranceCalc(seller)));
            }
      }
      function handle_sellers(color) {
            dispatcher(s_colorSetter(color));
            const filterdData = item.itemData && item_sellersFilter({ state: item, selectedColor: color });
            item && dispatcher(item_sellersSetter(filterdData));
      }
      useEffect(function () {
            dispatcher(fetchItem(itemId))
      }, []);
      function handleAddToCart({ sellerName, garanty, price }) {
            const SelectedBefore = Boolean(getItemData(itemId));
            if (SelectedBefore) dispatcher(delItem(itemId));
            const newItem = { sellerName, garanty, price, color: TextColorConverter(s_color), image: itemImages[0], name: itemName.nameFa, delivered: false, id: itemId }
            dispatcher(addToCart(newItem));
      }
      return (
            <div>
                  <div className='row mx-3'>
                        <div className='col-sm-12 col-lg-3'>
                              <Item_view />
                        </div>
                        <div className='col-sm-12 col-lg-8 m-4'>
                              <Item_selection handle_insurance={handle_insurance} handle_sellers={handle_sellers} handleAddToCart={handleAddToCart} />
                        </div>
                        <div className='row  mt-2 mb-2 justify-content-around py-4 border-bottom border-4'>
                              <DGkala_op img={'/product-s-images/امکان تحویل اکسپرس.svg'} txt={'امکان تحویل اکسپرس'} />
                              <DGkala_op img={'/product-s-images/۲۴ ساعته، ۷ روز هفته.svg'} txt={'۷ روز هفته ۲۴ ساعته'} />
                              <DGkala_op img={'/product-s-images/امکان پرداخت در محل.svg'} txt={'امکان پرداخت در محل'} />
                              <DGkala_op img={'/product-s-images/هفت روز ضمانت بازگشت کالا.svg'} txt={'هفت روز ضمانت بازگشت کالا'} />
                              <DGkala_op img={'/product-s-images/ضمانت اصل بودن کالا.svg'} txt={'ضمانت اصل بودن کالا'} />
                        </div>
                        <div className='py-4'>
                              <h3>فروشندگان این کالا</h3>
                              <div className='d-flex flex-column'>
                                    {item_sellers && item_sellers.map(seller => <Seller seller={seller} key={seller.name} handleAddToCart={handleAddToCart} />)}
                              </div>
                        </div>
                        <div className=' m-5 w-95 justify-content-center'>
                              <h4>کالاهای مشابه</h4>
                              <div className='row justify-content-center'>
                                    <div className='col-11'>
                                          <Swiper
                                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                navigation={{ clickable: true }}
                                                spaceBetween={0}
                                                slidesPerView={6}
                                                onSlideChange={() => console.log('slide change')}
                                                onSwiper={(swiper) => console.log(swiper)}
                                          >
                                                {relatedItems && relatedItems.map(item => <SwiperSlide><Slide_obj name={item.name} img={item.img} price={item.price} key={item.img} /></SwiperSlide>)}
                                          </Swiper>
                                    </div>
                              </div>
                        </div>
                        <div className='border-1-2 d-flex flex-row'>
                              <div className='m-3'>
                                    <button className='btn-play play-ico'><img src='/product-s-images/play-button-28257.svg' className='play-ico h-50 '></img></button>
                                    <video className='w-50' poster='/product-s-images/video-1.jpg'>
                                    </video>
                                    {/* <MediaPlayer title='xxx' src={'https://ltgxycogvlycfencuqdj.supabase.co/storage/v1/object/public/video/video1.mp4'}>
                                          <MediaProvider />
                                          <VideoLayout />
                                    </MediaPlayer> */}

                                    <p className='mt-2'>بررسی گوشی Redmi Note 12 Pro 4g</p>
                              </div>
                        </div>
                        <div className='mt-3 text-center'>
                              <img className='rounded-4 img-fluid' src='/product-s-images/a8ec1bb32317f8f3d393ea6a0cee382772f9102a_1688480325.jpg' />
                        </div>
                        <div className='d-flex flex-column m-3'>
                              <div className='d-flex flex-row border-bottom mt-4 mx-3'>
                                    <p className='txt-smaller mx-3'>معرفی</p>
                                    <p className='txt-smaller mx-3'>مشخصات</p>
                                    <p className='txt-smaller mx-3'>دیدگاه ها</p>
                                    <p className='txt-smaller mx-3'>پرسش ها</p>
                              </div>
                              <div className='d-flex flex-column border-1-2 p-3'>
                                    <div>
                                          <h4>معرفی</h4>
                                    </div>
                                    <div>
                                          <p>
                                                شیائومی Redmi Note 12 Pro 4G یکی از گوشی‌های هوشمند میان‌رده قدرتمند این شرکت است که در برخی از مشخصات فنی در نظر گرفته شده، هیچ چیزی کم از یک گوشی هوشمند پرچمدار و گران‌قیمت ندارد. این گوشی به صفحه‌نمایش با ابعاد 6.67 اینچ و رزولوشن 1080×2400 پیکسل از نوع امولد مجهز شده است. صفحه‌نمایشی بسیار با‌کیفیت که با ارائه نرخ بروزرسانی 120 هرتز و روشنایی 1100 نیت (nits)، کیفیتی در حد و اندازه گوشی‌های پرچمدار ارائه می‌کند. دوربین اصلی 108 مگاپیکسل هم به‌خوبی تمام توقعات شما را برای عکاسی در نور روز و نور شب بر‌آورده می‌کند. سنسور 8 مگاپیکسل فوق عریض برای ثبت تصاویر با زاویه دید گسترده، سنسور 2 مگاپیکسل ماکرو برای ثبت تصاویر از فاصله نزدیک و سنسور 2 مگاپیکسل سنجش عمق هم این گوشی هوشمند را همراهی می‌کنند. دوربین سلفی 16 مگاپیکسل هم در نور روز و نور شب عملکرد کاملا مطلوبی دارد. بهره بردن از پردازنده اسنپدراگون 732G هم سبب شده تا شیائومی Redmi Note 12 Pro 4G به‌خوبی از پس اجرای بازی‌های سنگین و برنامه‌های کاربردی بربیاید. باتری 5000 میلی‌آمپر‌ساعت هم به ازای هر بار شارژ صد درصدی، طول عمر مفید (زمان آماده به‌کار) دو روز را در حالت استفاده معمولی ارائه می‌کند. در مجموع این گوشی با صفحه‌نمایش قدرتمند، دوربین اصلی 108 مگاپیکسل، پردازنده‌ و باتری مناسب، می‌تواند گزینه بسیار خوبی در بین گوشی‌های میان‌رده این بازه قیمتی باشد.
                                          </p>
                                    </div>
                              </div>
                              <div className='d-flex flex-column border-1-2 mt-4'>
                                    <div>
                                          <h4 className='mt-3 mx-3'>
                                                مشخصات
                                          </h4>
                                    </div>
                                    <div className='row align-items-center mt-4 mx-3'>
                                          <div className='col-4'>
                                                {<Properties />}
                                          </div>
                                    </div>

                              </div>
                              <div className='d-flex flex-column '>
                                    <div className='row'>
                                          <div className='col-sm-12 col-lg-3 '>
                                                <div className='d-flex flex-column border-1-2 mt-4 p-3'>
                                                      <div className='d-flex flex-column '>
                                                            <div className='m-3'>
                                                                  <h4>دیدگاه ها</h4>
                                                            </div>
                                                            <div className='m-3'>
                                                                  <h4>امتیاز و دیدگاه کاربران</h4>
                                                            </div>
                                                            <div className='row m-3'>
                                                                  <div>
                                                                        <div className='d-flex flex-column'>
                                                                              <div className='d-flex flex-row'>
                                                                                    <h4>4.3</h4>
                                                                                    <span className='text-smaller'>از ۵ امتیاز</span>
                                                                              </div>
                                                                              <div className=''>
                                                                                    <img className='w-6' src='/product-s-images/star-yellow.png'></img>
                                                                                    <img className='w-6' src='/product-s-images/star-yellow.png'></img>
                                                                                    <img className='w-6' src='/product-s-images/star-yellow.png'></img>
                                                                                    <img className='w-6' src='/product-s-images/star-yellow.png'></img>
                                                                                    <img className='w-6' src='/product-s-images/star.png'></img>
                                                                                    <span className='mx-2'>از مجموع ۱۴۴ امتیاز</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className='m-3'>
                                                                  <p>
                                                                        موضوع دیدگاه ها‍
                                                                  </p>
                                                            </div>
                                                            <div className='border m-3 py-2 w-75 rounded-4'>
                                                                  <div className='d-flex border-1  flex-row p-2 justify-content-between w-95'>
                                                                        <div className=''>
                                                                              <span>کیفیت و کارایی</span>
                                                                        </div>
                                                                        <div className=''>
                                                                              <span>160 دیدگاه</span>
                                                                        </div>
                                                                  </div>

                                                                  <div className='d-flex flex-row justify-content-center mb-2'>
                                                                        <div className='d-flex flex-row w-95 bg-gray rounded-4'>
                                                                              <div className='w-87 bg-green rng-g'></div>
                                                                              <div className='w-6 bg-red rng-r'></div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className='mx-3 mb-2 w-75 border-bottom'>
                                                                  <p>
                                                                        این جداسازی به صورت آزمایشی انجام شده است و ممکن است دقیق نباشد.
                                                                  </p>
                                                            </div>
                                                            <div className='m-3 w-75 '>
                                                                  <p>
                                                                        شما هم درباره این کالا دیدگاه ثبت کنید
                                                                  </p>
                                                            </div>
                                                            <div className='add-faq w-95 '>
                                                                  <button className='py-2 w-100'>
                                                                        ثبت دیدگاه
                                                                  </button>
                                                            </div>
                                                            <div>
                                                                  <div className='d-flex d-row m-2'>
                                                                        <img src='/product-s-images/svgexport-30.svg'></img>
                                                                        <span>۵ امتیاز دیجی‌کلاب</span>
                                                                  </div>
                                                                  <p className='m-3 w-75'>پس از تایید شدن دیدگاه، با رفتن به صفحه ماموریت‌های دیجی‌کلاب امتیازتان را دریافت کنید.</p>
                                                            </div>
                                                      </div>
                                                </div>

                                          </div>
                                          <div className='col-7 mt-5 mx-3'>
                                                <div className='d-flex flex-column'>
                                                      <div className='d-flex flex-row text-smaller border-bottom py-3'>
                                                            <img src='/product-s-images/svgexport-32.svg'></img>
                                                            <span className='m-1 '>۸۸% (۱۱۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند</span>
                                                            <img src='/product-s-images/svgexport-30.svg'></img>
                                                      </div>

                                                      <div className='d-flex flex-row p-2'>
                                                            <div className='d-flex flex-row m-2'>
                                                                  <img src='/product-s-images/svgexport-70.svg'></img>
                                                                  <span>مرتب سازی</span>
                                                            </div>
                                                            <div className='m-2'>جدیدترین</div>
                                                            <div className='m-2'>دیدگاه خریداران،</div>
                                                            <div className='m-2'>مفیدترین</div>
                                                      </div>
                                                      <div className='mt-3'>
                                                            <div className='d-flex flex-row '>
                                                                  <div className='div-star px-2 py-1'>
                                                                        <span className='text-smaller text-white '>۵.۰</span>
                                                                  </div>
                                                                  <div className='mx-1 mt-1'>
                                                                        <h4>
                                                                              پیشنهاد میکنم
                                                                        </h4>
                                                                  </div>
                                                            </div>
                                                            <div className='d-flex flex-row m-3 border-bottom'>
                                                                  <span className='text-smaller px-3'>۲۵ تیر ۱۴۰۲</span>
                                                                  <span className='text-smaller px-3'>علی اسماعیلی</span>
                                                                  <span className='text-smaller px-3 mb-3 txt-customer'>خریدار</span>
                                                            </div>
                                                            <div className='d-flex flex-row mx-3'>
                                                                  <img src='/product-s-images/svgexport-32.svg'></img>
                                                                  <span className='text-smaller txt-green mx-2 mt-1'>پیشنهاد میکنم</span>
                                                            </div>
                                                            <div className='m-3 '>
                                                                  <p>گوشی خوب با شارژ دهی متوسط </p>
                                                            </div>
                                                            <div className='d-flex flex-row '>
                                                                  <div>
                                                                        <img className='mx-1' src='/product-s-images/svgexport-72.svg'></img>
                                                                        <span className='mx-1 text-smaller'>دیجی‌کالا</span>
                                                                  </div>
                                                                  <div className='d-flex flex-row mx-3 align-items-center'>
                                                                        <div className='color-faq bg-gray mx-3'></div>
                                                                        <span className='text-smaller'>خاکستری</span>
                                                                  </div>
                                                            </div>
                                                            <div className='d-flex flex-row justify-content-end border-bottom'>
                                                                  <div className='d-flex flex-row align-items-center mb-4'>
                                                                        <span className='text-smaller mx-2'>
                                                                              آیا این دیدگاه مفید بود؟
                                                                        </span>
                                                                        <div className='mx-2'>
                                                                              <span className='text-smaller'>0</span>
                                                                              <img src='/product-s-images/svgexport-74.svg' />
                                                                        </div>
                                                                        <div className='mx-2'>
                                                                              <span className='text-smaller'>0</span>
                                                                              <img src='/product-s-images/svgexport-73.svg' />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className='mt-5'>
                                                            <div className='d-flex flex-row '>
                                                                  <div className='div-star px-2 py-1'>
                                                                        <span className='text-smaller text-white '>۵.۰</span>
                                                                  </div>
                                                                  <div className='mx-1 mt-1'>
                                                                        <h4>
                                                                              پیشنهاد میکنم
                                                                        </h4>
                                                                  </div>
                                                            </div>
                                                            <div className='d-flex flex-row m-3 border-bottom'>
                                                                  <span className='text-smaller px-3'>۲۵ تیر ۱۴۰۲</span>
                                                                  <span className='text-smaller px-3'>علی اسماعیلی</span>
                                                                  <span className='text-smaller px-3 mb-3 txt-customer'>خریدار</span>
                                                            </div>
                                                            <div className='d-flex flex-row mx-3'>
                                                                  <img src='/product-s-images/svgexport-32.svg'></img>
                                                                  <span className='text-smaller txt-green mx-2 mt-1'>پیشنهاد میکنم</span>
                                                            </div>
                                                            <div className='m-3 '>
                                                                  <p>
                                                                        اگر عرضه گوشی بهمراه اندروید ۱۱ را در نظر نگیریم، بنظرم در قیمت خودش ارزش خرید بالاتری نسبت ب رقبا داره.
                                                                  </p>
                                                            </div>
                                                            <div className='d-flex flex-row '>
                                                                  <div>
                                                                        <img className='mx-1' src='/product-s-images/svgexport-72.svg'></img>
                                                                        <span className='mx-1 text-smaller'>دیجی‌کالا</span>
                                                                  </div>
                                                                  <div className='d-flex flex-row mx-3 align-items-center'>
                                                                        <div className='color-faq bg-gray mx-3'></div>
                                                                        <span className='text-smaller'>خاکستری</span>
                                                                  </div>
                                                            </div>
                                                            <div className='d-flex flex-row justify-content-end border-bottom border-1'>
                                                                  <div className='d-flex flex-row align-items-center mb-4'>
                                                                        <span className='text-smaller mx-2'>
                                                                              آیا این دیدگاه مفید بود؟
                                                                        </span>
                                                                        <div className='mx-2'>
                                                                              <span className='text-smaller'>0</span>
                                                                              <img src='/product-s-images/svgexport-74.svg' />
                                                                        </div>
                                                                        <div className='mx-2'>
                                                                              <span className='text-smaller'>0</span>
                                                                              <img src='/product-s-images/svgexport-73.svg' />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='row'>
                                          <div className='col-sm-12 col-lg-3 '>
                                                <div className='d-flex flex-column border-1-2 mt-4 p-3'>
                                                      <div className='m-3'>
                                                            <h4>پرسش ها</h4>
                                                      </div>
                                                      <div>
                                                            <div className='m-3 w-75 '>
                                                                  <p>
                                                                        شما هم درباره این کالا پرسش ثبت کنید
                                                                  </p>
                                                            </div>
                                                            <div className='add-faq w-95 '>
                                                                  <button className='py-2 w-100'>
                                                                        ثبت پرسش
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className='col-7 mt-5 mx-3'>
                                                <div className='d-flex flex-column'>
                                                      <div className='m-2'>
                                                            <div className='d-flex flex-row '>
                                                                  <img className='m-2' src='/product-s-images/svgexport-79.svg' />
                                                                  <span className='m-2'>سلام.برای آپدیت اندروید باید وی پی ان باشه یا نباشه؟ممنون میشم جواب بدید</span>
                                                            </div>
                                                            <div>
                                                                  <div className='d-flex flex-row border-bottom py-3'>
                                                                        <span className='m-2 text-blue-small'>ثبت پاسخ</span>
                                                                        <img src='/product-s-images/svgexport-80.svg' className='h-25 mt-2' />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className='m-2'>
                                                            <div className='d-flex flex-row '>
                                                                  <img className='m-2' src='/product-s-images/svgexport-79.svg' />
                                                                  <span className='m-2'>
                                                                        خواستم بدونم این رنج قیمت ویتنام هست؟ یا هند؟                                                                        </span>
                                                            </div>
                                                            <div>
                                                                  <div className='d-flex flex-row border-bottom py-3'>
                                                                        <span className='m-2 text-blue-small'>ثبت پاسخ</span>
                                                                        <img src='/product-s-images/svgexport-80.svg' className='h-25 mt-2' />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>


            </div>
      );
}



