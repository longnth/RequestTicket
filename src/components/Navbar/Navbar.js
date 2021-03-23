import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">EVN</label>
      <ul>
        <li>
          <Link to="#">Trang Chủ</Link>
        </li>
        <li>
          <Link to="#">Thông Tin</Link>
        </li>
        <li>
          <Link to="#">Dịch Vụ</Link>
        </li>
        <li>
          <Link to="#">Liên Hệ</Link>
        </li>
        <li>
          <Link to="#">Phản Hồi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
