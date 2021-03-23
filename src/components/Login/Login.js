import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import "./login.css";

export default function Login() {
  const [userAccount, setUserAccount] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginUser", JSON.stringify(userAccount));
    setIsLogin(true);
  };

  return (
    <div className="login__container">
      <form className="login" onSubmit={(e) => handleOnSubmit(e)}>
        <h1>Chào mừng bạn đến với phòng IT</h1>
        <p>Vui lòng đăng nhập để tiếp tục</p>
        <input
          type="email"
          placeholder="email"
          required
          name="email"
          onChange={(e) =>
            setUserAccount({ ...userAccount, [e.target.name]: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="mật khẩu"
          required
          name="password"
          onChange={(e) =>
            setUserAccount({ ...userAccount, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">Đăng Nhập</button>
      </form>
      {isLogin ? <Redirect to="/home" /> : ""}
    </div>
  );
}
