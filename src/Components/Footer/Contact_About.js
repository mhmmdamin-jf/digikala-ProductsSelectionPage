import { About } from "./About";

export function Contact_About() {
      const About_txts = [
            { header: "با دیجیکالا", links: ['اتاق خبر دیجی‌کالا', 'فروش در دیجی‌کالا', 'فرصت‌های شغلی', 'گزارش تخلف در دیجی‌کالا', 'تماس با دیجی‌کالا', 'درباره دیجی‌کالا'] },
            { header: "خدمات مشتریان", links: ['پاسخ به پرسش‌های متداول', 'رویه‌های بازگرداندن کالا', 'شرایط استفاده', 'حریم خصوصی', 'گزارش باگ'] },
            { header: "راهنمای خرید از دیجی‌کالا", links: ['نحوه ثبت سفارش', 'رویه ارسال سفارش', 'شیوه‌های پرداخت'] }
      ];
      return (
            <div className='row justify-content-between mx-4 mt-4'>
                  {About_txts.map(txt => <About About_txt={txt} key={txt.header} />)}
                  <div className='col-sm-5 col-md-3 mb-4 '>
                        <div>
                              <p>
                                    همراه ما باشید!
                              </p>
                        </div>
                        <div className='d-flex flex-row flex-nowrap gap-3 mb-4'>
                              <div className='d-flex'>
                                    <a>
                                          <img src='/images/svgexport-41.svg'></img>
                                    </a>
                              </div>
                              <div className='d-flex'>
                                    <a>
                                          <img src='/images/svgexport-42.svg'></img>
                                    </a>
                              </div>
                              <div className='d-flex'>
                                    <a>
                                          <img src='/images/svgexport-43.svg'></img>
                                    </a>
                              </div>
                              <div className='d-flex'>
                                    <a>
                                          <img src='/images/svgexport-44.svg'></img>
                                    </a>
                              </div>
                        </div>
                        <div>
                              <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
                        </div>
                        <div className='d-flex flex-row ai-center'>
                              <div className='px-2 px-4-lg py-2 bg-search w-75'>

                                    <a>
                                          <input className="w-full ms-auto me-auto search-text bg-transparent border-0" placeholder="ایمیل شما" />
                                    </a>

                              </div>
                              <div>
                                    <button className='btn-email ai-center h-100 mx-1 text-white px-3'>ثبت</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
