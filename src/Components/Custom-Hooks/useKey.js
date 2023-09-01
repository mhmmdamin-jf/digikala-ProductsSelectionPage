import { useEffect } from "react";

export function useKey(key, action, usingCtrl) {

      function handleKey(e) {
            console.log(e)
            if (usingCtrl) {
                  if (e.key.toLowerCase() === key.toLowerCase() && e.ctrlKey) {
                        action();
                  }
            }
            else {
                  if (e.key.toLowerCase() === key.toLowerCase()) {
                        action();
                  }
            }

      }
      useEffect(() => {
            document.addEventListener('keyup', (e) => {
                  e.preventDefault();
                  handleKey(e);
            });

            return () => {
                  document.removeEventListener('keyup', (e) => handleKey(e));
            };
      }, [action, key]);
}