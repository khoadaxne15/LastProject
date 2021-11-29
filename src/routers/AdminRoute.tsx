import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { Footer, Navigation, Basket } from "../components";
import { AdminNavigation, AdminSideBar } from "../components";
import { AppState } from "../redux";
import * as ROUTES from "../constants/routes";
import { ClientRoute } from "./ClientRoute";
import { PublicRoute } from "./PublicRoute";
import { createBrowserHistory } from "history";

import {
  CheckOutStep1,
  CheckOutStep2,
  CheckOutStep3,
  EditAccount,
  AddProduct,
  Dashboard,
  EditProduct,
  FeaturedProducts,
  ForgotPassword,
  Home,
  PageNotFound,
  Products,
  RecommendedProducts,
  Search,
  Shop,
  SignIn,
  SignUp,
  UserAccount,
  ViewProduct,
} from "../views";

const _AdminRoute: React.FC<AdminRouteProps> = ({ isAuth, role, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props: JSX.IntrinsicAttributes) =>
      isAuth && role === "ADMIN" ? (
        <>
          <AdminNavigation />
          <main className="content-admin">
            <AdminSideBar />
            <div className="content-admin-wrapper">
              <Component {...props} />
            </div>
          </main>
        </>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = ({ auth }: AppState) => ({
  isAuth: !!auth,
  role: auth?.role || "",
});

_AdminRoute.defaultProps = {
  isAuth: false,
  role: "USER",
};

type AdminRouteProps = {
  isAuth: boolean;
  role: string;
  component: any;
  exact?: boolean;
  path: string;
};

export const history = createBrowserHistory();
export const AppRouter: React.FC = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Basket />
      <Switch>
        <Route component={Search} exact path={ROUTES.SEARCH} />
        <Route component={Home} exact path={ROUTES.HOME} />
        <Route component={Shop} exact path={ROUTES.SHOP} />
        <Route component={FeaturedProducts} exact path={ROUTES.FEATURED_PRODUCTS} />
        <Route component={RecommendedProducts} exact path={ROUTES.RECOMMENDED_PRODUCTS} />
        <PublicRoute component={SignUp} path={ROUTES.SIGNUP} />
        <PublicRoute component={SignIn} exact path={ROUTES.SIGNIN} />
        <PublicRoute component={ForgotPassword} path={ROUTES.FORGOT_PASSWORD} />
        <Route component={ViewProduct} path={ROUTES.VIEW_PRODUCT} />
        <ClientRoute component={UserAccount} exact path={ROUTES.ACCOUNT} />
        <ClientRoute component={EditAccount} exact path={ROUTES.ACCOUNT_EDIT} />
        <ClientRoute component={CheckOutStep1} path={ROUTES.CHECKOUT_STEP_1} />
        <ClientRoute component={CheckOutStep2} path={ROUTES.CHECKOUT_STEP_2} />
        <ClientRoute component={CheckOutStep3} path={ROUTES.CHECKOUT_STEP_3} />
        <AdminRoute component={Dashboard} exact path={ROUTES.ADMIN_DASHBOARD} />
        <AdminRoute component={Products} path={ROUTES.ADMIN_PRODUCTS} />
        <AdminRoute component={AddProduct} path={ROUTES.ADD_PRODUCT} />
        <AdminRoute component={EditProduct} path={`${ROUTES.EDIT_PRODUCT}/:id`} />
        <PublicRoute component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export const AdminRoute = connect(mapStateToProps)(_AdminRoute);
