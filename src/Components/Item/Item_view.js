import { Tools } from './Tools';
import { useState } from 'react';
import { Img } from './Img';
import { useSelector } from 'react-redux';
export function Item_view() {
      const itemData = useSelector(store => store.item.itemData);
      const images = itemData && itemData[0].images;
      const [mainimg, setMainimg] = useState("/product-s-images/dc4d59b0c26271a81b689457941062016eb158a4_1654516443.webp");
      return (
            <>
                  <div className='d-flex flex-row mx-3 mt-4'>
                        <div className='d-flex'>
                              <Tools />
                        </div>
                        <div className='d-flex'>
                              <img className='img-fluid' src={mainimg} />
                        </div>
                  </div>
                  <div className='d-flex flex-row pointer'>
                        {images && images.map(img_src => <Img setMainimg={setMainimg} img={img_src} />)}
                  </div>
            </>
      );
}


