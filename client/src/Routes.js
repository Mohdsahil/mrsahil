import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import About from "./core/About";
import Work from "./core/Work";
import Blog from "./core/Blog";
import SingleBlog from "./core/SingleBlog";
import Signin from "./user/Signin";
import AdminRoutes from "./auth/helper/AdminRoutes";
import AdminDashBoard from "./user/AdminDashBoard";
import NewBlog from "./admin/NewBlog";
import Blogs from "./admin/Blogs";
import UpdateBlog from "./admin/UpdateBlog";
import NoMatch from "./core/NoMatch";

//
export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/work" exact component={Work}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/blog/:blogId" exact component={SingleBlog}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        {/* <Route path="/contact" exact component={Contact}></Route> */}
        <AdminRoutes path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoutes path="/admin/create/blog" exact component={NewBlog} />
        <AdminRoutes path="/admin/blogs/" exact component={Blogs} />

        <AdminRoutes
          path="/admin/blogs/update/:blogId"
          exact
          component={UpdateBlog}
        />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
