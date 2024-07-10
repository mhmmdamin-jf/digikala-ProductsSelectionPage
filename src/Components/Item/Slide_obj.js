export function Slide_obj({ img, name, price }) {
      return (

            <div className='d-flex flex-column border-end border-start  align-items-center '>
                  <img src={img} className='w-75'></img>
                  <h3 className='text-smaller px-3'>{name}</h3>
                  <div className='d-flex flex-row '>
                        <span>{price}</span>
                        <img src='/images/svgexport-34.svg' className='h-75 mt-1 mx-1'></img>
                  </div>
            </div>

      );
}
