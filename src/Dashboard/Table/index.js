import React, { useState } from "react";
import "./table.css";
const Table = () => {
  const [input, setInput] = useState([]);
  const header = [
    {
      id: "S.No",
      no: "01",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      id: "Given Name",
      no: "02",
      name: "Morsel",
      petName: "Hamitionstovare",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      id: "Pet name",
      no: "03",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      id: "Prise",
      no: "04",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      id: "Status",
      no: "05",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      id: "Actions",
      no: "06",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      no: "07",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      no: "08",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      no: "09",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    },
    {
      no: "10",
      name: "Ice",
      petName: "Barbet",
      price: "$1,250.08",
      status: "Adopted",
      Actions: "d"
    }
  ];
  return (
    <div>
      <div className="petName"> Pet details</div>

      <div className="con">
        <table>
          {header.map((item) => (
            <th className="tableData">{item.id}</th>
          ))}
          {header.map((item) => (
            <tr className="tableRow">
              <td className="tableRowdata">{item.no} </td>
              <td className="tableRowdata"> {item.name}</td>
              <td className="tableRowdata"> {item.petName} </td>
              <td className="tableRowdata"> {item.price} </td>
              <td className="tableRowdata"> {item.status} </td>
              <td className="tableRowdata"> {item.Actions} </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
