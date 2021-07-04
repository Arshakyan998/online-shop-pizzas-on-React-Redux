import React from 'react'
import { Route, Switch } from 'react-router'


import Header from './components/header/Header'
import GetPizzasItem from './components/main/pizzaBlock/GetPizzasItem'
import Other from './Other'
import Cart from './components/main/cart/Cart'


 



function App() {


  

  return (
    <div className="App">
      <Header/>
<Switch>
  
        <Route path="/" component={GetPizzasItem} exact/>
        <Route path="/cart" component={Cart} exact/>

        <Route  component={Other} exact/>
        </Switch>
    
 </div>
  );
}

export default App;
