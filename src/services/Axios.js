import axios from "axios";

const HOST_URL = "put_your_url_in_this_field";

export const getTicketList = (email) => {
  axios({ method: "POST", url: HOST_URL, data: email })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      alert(`Vui lòng kiểm tra lại email! /n ${err}`);
    });
};

export const createTicket = (ticket) => {
  axios({ method: "POST", url: HOST_URL, data: ticket })
    .then((res) => {
      alert("Yêu cầu của bạn đã được tạo thành công!");
      return ticket;
    })
    .catch((err) => {
      alert(`Vui lòng kiểm tra lại yêu cầu! /n ${err}`);
    });
};
