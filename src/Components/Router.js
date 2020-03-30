import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import List from "./View/ListPage";
import Detail from "./View/DetailPage";
import Basket from "./View/BasketPage";
import { LangContext } from "../Context";
import Header from "./Header";
import Buy from "./View/BuyPage/Buy";
import Address from "./View/AddressPage";
import Category from "./View/CategoryPage";

export default () => {
  const { languageSetting, korean } = useContext(LangContext);
  useEffect(() => {
    languageSetting();
  }, [korean, languageSetting]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/:type/:name" exact component={List} />
        <Route path="/category" component={Category} />
        <Route path="/detail/:type/:id" component={Detail} />
        <Route path="/basket" component={Basket} />
        <Route path="/buy" component={Buy} />
        <Route path="/address" component={Address} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
