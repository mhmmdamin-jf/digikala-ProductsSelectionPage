import { useEffect, useState } from 'react';
import styles from './Menu.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Menu() {
      const show = useSelector(store => store.menu.show);
      const [menuData, setMenuData] = useState();
      const [categoryId, setCategoryId] = useState(2);
      const [menuCategory, setMenuCategory] = useState();
      useEffect(
            function () {
                  const getMenuCategory = async () => {
                        try {
                              const res = await fetch('http://localhost:9000/subCategorise');
                              if (!res.ok) {
                                    throw new Error('connection error.')
                              }
                              const data = await res.json();
                              setMenuCategory(data);
                        }
                        catch (err) {
                              console.log(err.message)
                        }
                  }
                  const getMenuData = async () => {
                        try {
                              const res = await fetch('http://localhost:9000/menu');
                              if (!res.ok) {
                                    throw new Error('connection error.')
                              }
                              const data = await res.json();
                              setMenuData(data);
                        }
                        catch (err) {
                              console.log(err.message)
                        }
                  }
                  getMenuData();
                  getMenuCategory();
            }
            , [setMenuData, setMenuCategory])
      return (
            <>
                  {show &&
                        <div className={styles.menuContainer}>
                              <div className={styles.primaryCategories}>

                                    {menuData && menuData.map(category => {
                                          return (
                                                <p className={`${styles.categoryButton} ${categoryId === category.id ? 'menuActive' : ''}`} onMouseEnter={() => setCategoryId(category.id)}>{category.name}</p>
                                          )
                                    })}
                              </div>

                              {menuCategory && menuCategory.map(Category => (
                                    <div className={styles.secondaryCategories}>
                                          {Category.catId === categoryId && (<>
                                                <h5>{Category.name}</h5>
                                                {Category.subCategory && Category.subCategory.map(el => <p>{el.name}</p>)}
                                          </>)
                                          }
                                    </div>
                              )
                              )}
                        </div>
                  }
            </>

      )
}

export default Menu