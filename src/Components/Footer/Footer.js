import { useState } from "react";
import { Contact_About } from "./Contact_About";
import { Download } from "./Download";
import Footer_co from "./Footer_co";
import Footer_dgItems from "./Footer_dgItems";
import { memo } from "react";

function Footer() {
  const other_co = ['/images/مجله اینترنتی دیجی‌کالا مگ.svg', '/images/مگنت - پلتفرم بررسی و انتخاب کالا.svg', '/images/مرکز نوآوری و فناوری گروه دیجی‌کالا.svg',
    '/images/مجله اینترنتی دیجی‌کالا مگ.svg', '/images/گنجه.svg', '/images/کمدا اپلیکیشنی برای خرید و فروش.svg', '/images/سیستم حمل و نقل دیجی‌کالا.svg',
    '/images/دیجیکالا مهر - زنجیره مهربانی و لبخند.svg', '/images/دیجی‌کالا سرویس.svg', '/images/دیجی‌کالا بیزینس.svg', '/images/دیجی‌فای.svg',
    '/images/دیجی کلاب باشگاه مشتریان دیجیکالا.svg', '/images/خرید آنی سوپرمارکتی از فروشگاه های نزدیک.svg', '/images/خرید آنلاین مد و لباس از فروشگاه اینترنتی دیجی‌استایل با همان تجربه از دیجی‌کالا.svg',
    '/images/خدمات ویژه دیجی‌کالا برای کاربران با اشتراک دیجی‌پلاس.svg', '/images/ثبت آگهی خرید و فروش آنلاین بدون پادرمیانی!.svg',
    '/images/اسمارتک.svg', '/images/jet.svg'];
  const [full_txt, setFull_txt] = useState(false);
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='d-flex flex-column mt-4'>
      <div className='d-flex mx-2 flex-row justify-content-between mx-4'>
        <div>
          <img src='/images/لوگوی دیجیکالا.svg'></img>
        </div>
        <div className='border rounded-4 pointer justify-content-center row py-2 btn-outline-secondary'
          onClick={() => backToTop()}>
          <div className="col-9"> بازگشت به بالا</div>
          <div className="col-3"><img src='/images/svgexport-40.svg'></img>
          </div>
        </div>
      </div>
      <div className='d-flex flex-nowrap small m-2 flex-row mx-5 mt-4'>
        <span className="">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
        <div className="px-5  d-block-md">|</div>
        <span className="">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
      </div>
      <div className='d-flex flex-row justify-content-around flex-wrap gap-3'>
        <Footer_dgItems image={'/images/اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس.svg'}>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</Footer_dgItems>
        <Footer_dgItems image={'/images/امکان پرداخت در محل.svg'}>امکان پرداخت در محل</Footer_dgItems>
        <Footer_dgItems image={'/images/۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ.svg'}>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</Footer_dgItems>
        <Footer_dgItems image={'/images/هفت روز ضمانت بازگشت کالا.svg'}>هفت روز ضمانت بازگشت کالا</Footer_dgItems>
        <Footer_dgItems image={'/images/ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ.svg'}>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</Footer_dgItems>
      </div>
      <Contact_About />
      <Download />
      <div className='row mt-5 mx-4'>
        <div className='col-8 footer2-txt'>
          <h4>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.</h4>
          <span >ک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            کدام محصولات در دیجی‌کالا قابل سفارش هستند؟
            تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی
          </span>
          {full_txt ? <><span>شبانه روز یا در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم.
            کالای دیجیتال
            انواع گوشی موبایل از برندهای مختلفی مثل آیفون،  گوشی سامسونگ، گوشی نوکیا، گوشی شیائومی،گوشی هواوی، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.
          </span><span className=" mx-2 text-blue-small pointer" onClick={() => setFull_txt(!full_txt)}>مشاهده کمتر</span> </> :
            <> <span className="mx-1">. . .</span> <span className="mx-2 text-blue-small pointer" onClick={() => setFull_txt(!full_txt)}>مشاهده بیشتر</span></>}
        </div>
        <div className='col-1 me-auto  '>
          <div className='h-auto'>
            <img src='/images/rezi.png' className='img-fluid '></img>
          </div>
        </div>
        <div className='col-1'>
          <div className=' px-3 h-auto'>
            <img src='/images/kasbokar.png' className='img-fluid '></img>
          </div>
        </div>
        <div className='px-3 col-1 ms-3 '>
          <div className=' h-auto'>
            <img src='/images/logo.png' className='img-fluid '></img>
          </div>
        </div>
      </div>
      <div className='text-center footer2-txt m-4'>
        <p>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
      </div>
      <div className='row bg-100 justify-content-center'>
        {other_co.map(co => <Footer_co image={co} />)}

      </div>
    </div>
  );
}

export default memo(Footer);