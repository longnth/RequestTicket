import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import TicketList from "./components/Ticket/TicketList";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Auth path="/danh-sach-ticket" Component={TicketList} />
        <Auth path="/not-found" Component={NotFound} />
        <Auth path="/home" Component={Home} />
        <Route path="/dang-nhap" component={Login} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
