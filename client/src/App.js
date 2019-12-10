import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Wishlists from "./containers/wishlists/Wishlists";
import Setting from "./containers/setting/Setting";
import Idea from "./containers/ideas/Idea";
import create from "./containers/wishlists/createLists";
import Dashboard from "./components/dashboard/Dashboard";
import CreateIdeas from "./containers/ideas/CreateIdeas";
import Ideas from "./containers/ideas/Ideas";
import NonUsersIdeas from "./containers/ideas/NonUsersIdeas";
import CreateLists from "../src/containers/wishlists/createLists";
import Signout from "./components/SignOut/Signout";
import UpdateWislists from "./containers/UpdateWislists/UpdateWislists";
const Register = React.lazy(() => import("./components/Register/Register"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Home = React.lazy(() => import("../src/components/Home/Home"));
// const Error = React.lazy(() => import("./components/Error/Error"));
function App(props) {
  // let AuthGaurds;
  // AuthGaurds = (
  //   <Switch>
  //     <Route path="/" exact component={Home} />
  //     <Route path="/register" exact component={Register} />
  //     <Route path="/login" exact component={Login} />
  //     <Redirect to="/" />
  //     <Route component={Error} />
  //   </Switch>
  // );

  // if (props.isRegistered) {
  //   AuthGaurds = (
  //     <Switch>
  //       <Route path="/dashboard" exact component={Dashboard} />
  //       <Route path="/wishlists" exact component={Wishlists} />
  //       <Route path="/settings" exact component={Setting} />
  //       <Route path="/lists" exact component={ShoppingLists} />
  //       <Route path="/idea" exact component={Idea} />
  //       <Route path="/ideas" exact component={Ideas} />
  //       <Route path="/create" exact component={create} />
  //       <Route path="/CreateIdeas" exact component={CreateIdeas} />
  //       <Route path="/NonUsersIdeas" exact component={NonUsersIdeas} />
  //       <Route path="/create" exact component={CreateLists} />

  //       <Route path="/signout" exact component={Signout} />
  //     </Switch>
  //   );
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={<p>loading...</p>}>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/wishlists" exact component={Wishlists} />
            <Route
              path="/updateWishlists/:id"
              exact
              component={UpdateWislists}
            />
            <Route path="/settings" exact component={Setting} />
            <Route path="/idea" exact component={Idea} />
            <Route path="/ideas" exact component={Ideas} />
            <Route path="/create" exact component={create} />
            <Route path="/CreateIdeas" exact component={CreateIdeas} />
            <Route path="/NonUsersIdeas" exact component={NonUsersIdeas} />
            <Route path="/create" exact component={CreateLists} />
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />

            <Route path="/signout" exact component={Signout} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
