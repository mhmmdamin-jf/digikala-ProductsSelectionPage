import { useSelector } from "react-redux";

export function Properties() {
      const itemData = useSelector(store => store.item.itemData);
      const peroperties = itemData && itemData[0].peroperties;
      return (
            <ul>
                  {peroperties && peroperties.map(property => <li className='mt-3'>
                        <div className='row justify-content-between'>
                              <div className='col-6 txt-gray'>{property.property}</div>
                              <div className='col-6'>{property.value}</div>
                        </div>
                  </li>)}
            </ul>
      );

}
