import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Wishlists from "./containers/wishlists/Wishlists";
import Setting from "./containers/setting/Setting";
import ShoppingLists from "./containers/shoppingLists/ShoppingLists";
import Idea from "./containers/ideas/Idea";
import create from "./containers/wishlists/createLists";
import Dashboard from "./components/dashboard/Dashboard";
import IdeasCreate from "../src/containers/ideas/IdeasCreate";
import Ideas from "./containers/ideas/Ideas";
import IdeasTwo from "../src/containers/ideas/ideasTwo";
import CreateLists from "../src/containers/wishlists/createLists";
const Error = React.lazy(() => import("./components/Error/Error"));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/wishlists" exact component={Wishlists} />
          <Route path="/settings" exact component={Setting} />
          <Route path="/lists" exact component={ShoppingLists} />
          <Route path="/idea" exact component={Idea} />
          <Route path="/ideas" exact component={Ideas} />
          <Route path="/create" exact component={create} />
          <Route path="/ideasCreate" exact component={IdeasCreate} />
          <Route path="/ideasTwo" exact component={IdeasTwo} />
          <Route path="/create" exact component={CreateLists} />
          <React.Suspense fallback={<p>loading...</p>}>
            <Route component={Error} />
          </React.Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
