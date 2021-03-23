import React, { useEffect } from "react";
import { TicketProvider } from "../../context/TicketContext";
import { getTicketList } from "../../services/Axios";
import Navbar from "../Navbar/Navbar";
import TicketList from "../Ticket/TicketList";

import "./home.css";

const Home = () => {
  const userName = JSON.parse(localStorage.getItem("loginUser")).email;

  const ticketList = {
    tickets: [
      { id: 1, description: "Yêu cầu 1", status: "open", note: "Ghi chú 1" },
      { id: 2, description: "Yêu cầu 2", status: "close", note: "Ghi chú 2" },
      { id: 3, description: "Yêu cầu 3", status: "close", note: "Ghi chú 3" },
      {
        id: 4,
        description: "Yêu cầu 4",
        status: "progress",
        note: "Ghi chú 4",
      },
      { id: 5, description: "Yêu cầu 5", status: "open", note: "Ghi chú 5" },
      { id: 6, description: "Yêu cầu 6", status: "open", note: "Ghi chú 6" },
    ],
  };

  // const ticketList = getTicketList(userName);

  useEffect(() => () => localStorage.clear(), []);

  return (
    <TicketProvider value={ticketList}>
      <div className="home">
        <Navbar />
        <TicketList />
      </div>
    </TicketProvider>
  );
};

export default Home;
