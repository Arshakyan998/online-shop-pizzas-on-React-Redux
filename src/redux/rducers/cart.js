const initalState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

function getItemPrice(arr) {
  let sum = null;
  sum += arr.reduce((aggr, value) => value.price + aggr, 0);
  return sum;
}

function getTotalPrice(obj) {
  let sum = null;

  for (let key in obj) {
    sum += obj[key].item.reduce((aggr, value) => value.price + aggr, 0);
  }

  return sum;
}

function getTotalCount(obj) {
  let sum = null;
  for (let key in obj) {
    sum += obj[key].item.length;
  }
  return sum;
}

export const cart = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const newItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].item, action.payload]; //verjum vochte state.item ayl action.payload

      const obj = {
        ...state.items,
        [action.payload.id]: {
          item: newItem,
          itemPrice: getItemPrice(newItem),
        },
      };

      return {
        ...state,
        items: obj,
        totalCount: getTotalCount(obj),
        totalPrice: getTotalPrice(obj),
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }

    case "REMOVE_CART_ITEM": {
      let newObj = {
        ...state.items,
      };

      delete newObj[action.payload];

      return {
        ...state,
        items: newObj,
        totalCount: getTotalCount(newObj),
        totalPrice: getTotalPrice(newObj),
      };
    }

    case "ADD_PIZZA_TO_CART": {
      let addNewItem = [
        ...state.items[action.payload].item,
        state.items[action.payload].item[0],
      ];

      let newItem = {
        ...state.items,
        [action.payload]: {
          item: addNewItem,
          itemPrice: getItemPrice(addNewItem),
        },
      };

      return {
        ...state,
        items: newItem,
        totalCount: getTotalCount(newItem),
        totalPrice: getTotalPrice(newItem),
      };
    }

    case "MINUS_ITEM": {
      let newItem =
        state.items[action.payload].item.length > 1
          ? state.items[action.payload].item.slice(1)
          : state.items[action.payload].item;

      let newObj = {
        ...state.items,
        [action.payload]: {
          item: newItem,
          itemPrice: getItemPrice(newItem),
        },
      };

      return {
        ...state,
        items: newObj,
        totalCount: getTotalCount(newObj),
        totalPrice: getTotalPrice(newObj),
      };
    }

    default:
      return state;
  }
};
