import React from "react";
import PropTypes from "prop-types";


import "./pizzas.scss";

function RenderPizzas({ name, imageUrl, sizes, types, price,addPizzaToCart,id ,cart}) {
  const size = [26, 30, 40];
  const type = ["тонкое", "традиционное"];

  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const [activeTypes, setActiveTypes] = React.useState(types[0]);

  const changeActiveSize = (element) => {
    setActiveSize(() => element);
  };

  const changeActiveTypes = (i) => {
    setActiveTypes(i);
  };
 

  const addPizzaCart = () => {

    let result = {
      id,
      name,
      price,
      image: imageUrl,
      type: type[activeTypes],
      size: activeSize,
    };

    addPizzaToCart(result)
    };


 const itemslength=cart[id]?cart[id].item.length:0

  return (
    <div className="main_pizzas">
      <div className="image__block">
        <img src={imageUrl} alt="" />
        <div className="name__block"><h2> {name}</h2></div>
      </div>
      <div className="sizes__block">
        {size.map((element, i) => {
          return (
            <span
              key={i}
              className={
                !sizes.includes(element)
                  ? "noActive"
                  : "" || activeSize === element
                  ? "active"
                  : ""
              }
              onClick={() => changeActiveSize(element)}
            >
              {element}
            </span>
          );
        })}
      </div>

      <div className="type">
        {type.map((element, i) => (
          <span
            key={i}
            className={
              !types.includes(i)
                ? "noActive"
                : "" || activeTypes === i
                ? "active"
                : ""
            }
            onClick={() => changeActiveTypes(i)}
          >
            {element}
          </span>
        ))}
      </div>
      <div className="price__addBtn">
        <button onClick={addPizzaCart}
        className="btn btn-warning"
        
        >
         <span>Добавить</span>   <span>{itemslength}</span>
        </button>
        <span>{price}руб</span>
      </div>
      <div className="rating">
      
     


      </div>

    </div>
  );
}

RenderPizzas.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
  cart:PropTypes.object.isRequired,
  id:PropTypes.number.isRequired
};
RenderPizzas.defaultProps = {
  name: "name",
  imageUrl: "alt",
  sizes: [],
  types: [],
  price: 0,
  cart:{}
};

export default RenderPizzas;
