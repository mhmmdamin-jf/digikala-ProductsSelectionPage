import { useDispatch } from "react-redux";

export function Sort({ OnClickHandler, sort_name }) {
      const dispatcher = useDispatch();
      return (
            <div className='pointer text-no-wrap nav-font txt-sort-op txt-underline-op '>
                  <button onClick={() => dispatcher(OnClickHandler())}>
                        <span>{sort_name}</span>
                  </button>
            </div>
      );
}
