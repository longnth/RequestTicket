import React, { useRef, useState } from "react";

import "./createTicket.css";

export default function CreateTicket() {
  const userName = JSON.parse(localStorage.getItem("loginUser")).email;
  const modalRef = useRef(null);
  const initialTicket = {
    email: userName,
    department: "",
    type: "",
    description: "",
  };
  const [ticket, setTicket] = useState(initialTicket);

  const openModal = () => {
    modalRef.current.style.display = "block";
    setTicket(initialTicket);
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
  };

  const createTicket = () => {
    console.log(ticket);
    closeModal();
  };

  return (
    <div className="createTicket">
      <button onClick={() => openModal()}>Tạo yêu cầu</button>

      <div id="ticketModal" className="modal" ref={modalRef}>
        <div className="modal-content">
          <div className="modal-header">
            <h1>Thông Tin Yêu Cầu</h1>
            <span className="close" onClick={() => closeModal()}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="body-group">
              <label htmlFor="email">Email người tạo </label>
              <input name="email" value={userName} disabled />
            </div>
            <div className="body-group">
              <label htmlFor="department">Phòng ban </label>
              <select
                id="department"
                name="department"
                onChange={(e) =>
                  setTicket({ ...ticket, [e.target.name]: e.target.value })
                }
                value={ticket.department}
              >
                <option value="" defaultValue>
                  Phòng ban
                </option>
                <option value="dpt1">Phòng ban 1</option>
                <option value="dpt2">Phòng ban 2</option>
                <option value="dpt3">Phòng ban 3</option>
              </select>
            </div>
            <div className="body-group">
              <label htmlFor="department">Loại yêu cầu </label>
              <select
                id="type"
                name="type"
                onChange={(e) =>
                  setTicket({ ...ticket, [e.target.name]: e.target.value })
                }
                value={ticket.type}
              >
                <option value="" defaultValue>
                  Loại yêu cầu
                </option>
                <option value="tp1">Loại 1</option>
                <option value="tp2">Loại 2</option>
                <option value="tp3">Loại 3</option>
              </select>
            </div>
            <div className="body-group">
              <label htmlFor="description">Mô tả chi tiết </label>
              <textarea
                name="description"
                rows="3"
                onChange={(e) =>
                  setTicket({ ...ticket, [e.target.name]: e.target.value })
                }
                value={ticket.description}
              />
            </div>
            <button
              className="modal-button"
              onClick={() => createTicket()}
              disabled={
                ticket.department === "" ||
                ticket.type === "" ||
                ticket.description === ""
                  ? true
                  : false
              }
            >
              Tạo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
