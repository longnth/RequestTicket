import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function Auth({ path, Component }) {
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (localStorage.getItem("loginUser"))
          return <Component {...routeProps} />;

        alert("Vui lòng đăng nhập!");
        return <Redirect to="/dang-nhap" />;
      }}
    />
  );
}
