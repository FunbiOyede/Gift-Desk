import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Wishlists from "./containers/wishlists/Wishlists";
import Setting from "./containers/setting/Setting";
import ShoppingLists from "./containers/shoppingLists/ShoppingLists";
import ideas from "./containers/ideas/ideas";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/wishlists" exact component={Wishlists} />
        <Route path="/settings" exact component={Setting} />
        <Route path="/lists" exact component={ShoppingLists} />
        <Route path="/ideas" exact component={ideas} />
      </Switch>
    </div>
  );
}

export default App;
