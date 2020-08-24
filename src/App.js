import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import Shop from "./page/shopPage/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header></Header>
      <div className='app'>
        <Switch>
          <Route
            exact
            path='/'
            component={HomePage}
          ></Route>
          <Route path='/shop' component={Shop}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
