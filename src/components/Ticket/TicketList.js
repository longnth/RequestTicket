import React, { useContext, useState } from "react";
import TicketContext from "../../context/TicketContext";
import CreateTicket from "../CreateTicket/CreateTicket";
import Ticket from "./Ticket";

import "./ticketList.css";

export default function TicketList() {
  const ticketGetFromServer = useContext(TicketContext);
  console.log(ticketGetFromServer.tickets);

  const [filter, setFilter] = useState("all");

  const renderTicket = () => {
    let listTicket = [];
    switch (filter) {
      case "all":
        listTicket = ticketGetFromServer.tickets;
        break;
      case "open":
        listTicket = ticketGetFromServer.tickets.filter(
          (tic) => tic.status === "open"
        );
        break;
      case "progress":
        listTicket = ticketGetFromServer.tickets.filter(
          (tic) => tic.status === "progress"
        );
        break;
      case "close":
        listTicket = ticketGetFromServer.tickets.filter(
          (tic) => tic.status === "close"
        );
        break;
      default:
        break;
    }

    return ticketGetFromServer.tickets ? (
      listTicket.map((tic, idx) => {
        return <Ticket key={idx} Key={idx} Tic={tic} />;
      })
    ) : (
      <tr aria-colspan="1-5">Bạn chưa tạo yêu cầu nào</tr>
    );
  };

  return (
    <div className="ticket-list">
      <div className="ticket-list__header">
        <input className="header__search" placeholder="Tìm Kiếm" />
        <input
          type="radio"
          id="open"
          name="status"
          value="open"
          onClick={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="open">Mở</label>
        <input
          type="radio"
          id="progress"
          name="status"
          value="progress"
          onClick={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="progress">Đang tiến hành</label>
        <input
          type="radio"
          id="close"
          name="status"
          value="close"
          onClick={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="close">Đóng</label>
        <input
          type="radio"
          id="all"
          name="status"
          value="all"
          onClick={(e) => setFilter(e.target.value)}
        />
        <label htmlFor="all">Tất cả</label>
        <CreateTicket />
      </div>
      <div className="ticket-list__body">
        <table>
          <thead>
            <tr>
              <th width="50px">Mã</th>
              <th>Mô Tả Yêu Cầu</th>
              <th width="200px">Trạng Thái</th>
              <th>Ghi Chú</th>
              <th width="200px">Quản lý</th>
            </tr>
          </thead>
          <tbody>
            {/* {ticketGetFromServer.tickets ? (
              ticketGetFromServer.tickets.map((tic, idx) => {
                console.log(tic);
                return <Ticket key={idx} Key={idx} Tic={tic} />;
              })
            ) : (
              <tr aria-colspan="1-5">Bạn chưa tạo yêu cầu nào</tr>
            )} */}
            {renderTicket()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
