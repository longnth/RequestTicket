import React from "react";

export default function Ticket(props) {
  const renderStyle = (status) => {
    let sTcolor = "";
    let sTbackgroundColor = "";
    let sTstatus = "";
    switch (status) {
      case "open":
        sTcolor = "red";
        sTbackgroundColor = "rgba(255,0,0,0.1)";
        sTstatus = "Mở";
        break;
      case "progress":
        sTcolor = "blue";
        sTbackgroundColor = "rgba(0,0,255,0.1)";
        sTstatus = "Đang xử lý";
        break;
      case "close":
        sTcolor = "green";
        sTbackgroundColor = "rgba(0,255,0,0.1)";
        sTstatus = "Đóng";
        break;
      default:
        break;
    }
    return (
      <td style={{ color: sTcolor, backgroundColor: sTbackgroundColor }}>
        {sTstatus}
      </td>
    );
  };

  return (
    <tr key={props.Key} className="ticket">
      <td>{props.Tic.id}</td>
      <td>{props.Tic.description}</td>
      {/* <td>{props.Tic.status}</td> */}
      {renderStyle(props.Tic.status)}
      <td>{props.Tic.note}</td>
      <td>
        <button>Sửa</button>
        <button>Xóa</button>
      </td>
    </tr>
  );
}
