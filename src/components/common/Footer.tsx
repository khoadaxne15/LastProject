import React from "react";
import { useLocation } from "react-router-dom";

import logo from "../../../static/MainLogo.png";
import * as Route from "../../constants";

export const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [Route.HOME, Route.SHOP, Route.RECOMMENDED_PRODUCTS, Route.FEATURED_PRODUCTS];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Developed by <a href="https://github.com/khoadaxne15">Pham Hong Khoa</a>
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            Fork this project &nbsp;
            <a href="https://github.com/jgudo/ecommerce-react">HERE</a>
          </span>
        </strong>
      </div>
    </footer>
  );
};
