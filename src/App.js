import React from "react";
import { Table } from "react-bootstrap";
import "./App.css";

function App() {
  const students = [
    {
      name: "Moein",
      email: "MohdMoeinRazvi@gmail.com",
      address: [
        { Hn: "03", city: "Mumbai", country: "india" },
        { Hn: "13", city: "Lucknow", country: "india" },
        { Hn: "05", city: "Hyderabad", country: "india" },
        { Hn: "01", city: "Gurgoan", country: "india" },
      ],
    },
    {
      name: "Avesh",
      email: "Avesh@gmail.com",
      address: [
        { Hn: "03", city: "Mumbai", country: "india" },
        { Hn: "13", city: "Lucknow", country: "india" },
        { Hn: "05", city: "Hyderabad", country: "india" },
        { Hn: "01", city: "Gurgoan", country: "india" },
      ],
    },
    {
      name: "Ali",
      email: "Ali@gmail.com",
      address: [
        { Hn: "03", city: "Mumbai", country: "india" },
        { Hn: "13", city: "Lucknow", country: "india" },
        { Hn: "05", city: "Hyderabad", country: "india" },
        { Hn: "01", city: "Gurgoan", country: "india" },
      ],
    },
    {
      name: "Ahmad",
      email: "Ahmad@gmail.com",
      address: [
        { Hn: "03", city: "Mumbai", country: "india" },
        { Hn: "13", city: "Lucknow", country: "india" },
        { Hn: "05", city: "Hyderabad", country: "india" },
        { Hn: "01", city: "Gurgoan", country: "india" },
      ],
    },
  ];

  return (
    <div className="App">
      <h1
        style={{
          color: "#fff",
          marginBottom: "20px",
          background: "blue",
          opacity: ".5",
          display: "inline-block",
          padding: "5px 10px",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px black",
        }}
      >
        React Array Table
      </h1>
      <Table variant="dark" bordered hover size="sm" responsive>
        <tbody>
          <tr style={{ fontSize: "30px", lineHeight: "50px" }}>
            <th style={{ color: "aqua", textShadow: "4px 3px 3px orange" }}>
              Sr.No
            </th>
            <th style={{ color: "aqua", textShadow: "4px 3px 3px orange" }}>
              Name
            </th>
            <th style={{ color: "aqua", textShadow: "4px 3px 3px orange" }}>
              Email
            </th>
            <th style={{ color: "aqua", textShadow: "4px 3px 3px orange" }}>
              Address
            </th>
          </tr>
          {students.map((data, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Table variant="dark" striped hover border>
                  <tbody>
                    {data.address.map((item, a) => (
                      <tr key={a}>
                        <td>{item.Hn}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
