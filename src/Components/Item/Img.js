export function Img({ setMainimg, img }) {
      return (<div onClick={() => setMainimg(img)} className='border rounded-1'>
            <img src={img} className='img-fluid'></img>
      </div>);
}
