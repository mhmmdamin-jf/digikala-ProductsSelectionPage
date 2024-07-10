export function TextColorConverter(color) {
      switch (color) {
            case ('w'): {
                  return 'سفید';
            }
            case ('b'): {
                  return 'آبی';
            }
            case ('p'): {
                  return 'بنفش';
            }
            case ('g'): {
                  return 'زیتونی';
            }
            default: {
                  return 'بی رنگ';
            }
      }
}

export function ColorConverter(color) {
      switch (color) {
            case ('سفید'): {
                  return 'white';
            }
            case ('آبی'): {
                  return 'blue';
            }
            case ('بنفش'): {
                  return 'purple';
            }
            case ('زیتونی'): {
                  return 'green';
            }
            default: {
                  return '#fff';
            }
      }
}