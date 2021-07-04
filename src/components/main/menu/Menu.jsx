import React from "react";
import { useDispatch ,useSelector} from "react-redux";

import { sortPizzas, setCotegory } from "../../../redux/actions/filter";

import "./menu.scss";

function Menu() {
  const [menu, setMenu] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  const activeSortItem = useSelector(state => state.sortBy.sortBy)



  const Ref = React.useRef();

  const dispatch = useDispatch();

  const menuBlock = ["Мясные", "Вегетериянские", "Гриль", "Острые", "Закрытые",'Остальные'];

  const sortBy = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цена", type: "price", order: "desc" },
    { name: "алфовит", type: "name", order: "asc" },
  ];



  let sortType=sortBy.find(element=>element.type===activeSortItem.type).name



  const closePopUp = (e) => {
    if (!e.path.includes(Ref.current)) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", closePopUp);

    return () => {
      document.body.removeEventListener("click", closePopUp);
    };
  });

  const hendlermenu = React.useCallback((i) => {
    setMenu(i);
    dispatch(setCotegory(i));


  }, []);

  const visiblePopUp =() => {
    setVisible(!visible);
  }

  const changePopUp = (type) =>{
          dispatch(sortPizzas(type));

    }
    

  return (
    <div className="menu__block">
      <ul className="menu__main">
        <li
          onClick={() => hendlermenu(null)}
          className={menu === null ? "active" : ""}
        >
         
          Все
        </li>
        {menuBlock.map((element, i) => {
          return (
            <li
              key={i}
              onClick={() => hendlermenu(i)}
              className={menu === i ? "active" : ""}
            >
              {element}
            </li>
          );
        })}
      </ul>

      <ul onClick={visiblePopUp} className="menu__popUp" ref={Ref}>
        сортировать по
        <span className="active">{sortType}</span>
        <div className={visible ? "" : "hidden"}>
          {sortBy.map((element, i) => {
            return (
              <li
                key={i}
                onClick={() => changePopUp(element)}
                className={activeSortItem ===element.type  ? "active" : ""}
              >
                {element.name}
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default Menu;
