import React from "react";
import { Link } from "react-router-dom";

import "./notfound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>You has enter invalid url, please check again!</h1>
      <p>
        Or click{" "}
        <Link to="/home" className="comeback">
          here
        </Link>{" "}
        to comeback homepage
      </p>
    </div>
  );
}
