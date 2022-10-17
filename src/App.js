import { useState } from "react";
import "./styles.css";
import Footer from "./Footer";

export default function App() {
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [billAmount, setBillAmount] = useState("");
  const [cashGiven, setCashGiven] = useState("");
  const [optable, setOpTable] = useState("");
  const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
  const notes = Array(7).fill(null);

  function calCash() {
    let diff = cashGiven - billAmount;
    for (let i = 0; i < 7; i++) {
      notes[i] = Math.floor(diff / availableNotes[i]);
      diff = diff - notes[i] * availableNotes[i];
      if (notes[i] === 0) {
        notes[i] = null;
      }
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (billAmount > 0) {
      if (cashGiven < 0) {
        setMessage("Invalid cash Amount");
        setIsMessage(true);
      } else if (cashGiven >= billAmount) {
        calCash();
        setIsMessage(false);
        setOpTable(
          <div className="table">
            <div className="box">Balance Cash : ₹{cashGiven - billAmount}</div>
            <h4>Denominations: </h4>
            <table>
              <tbody>
                <tr>
                  <th>No. of Notes</th>
                  {notes.map((note) => {
                    return <td>{note}</td>;
                  })}
                </tr>
                <tr>
                  <th>Note</th>
                  {availableNotes.map((i) => {
                    return <td style={{ fontWeight: "bolder" }}>{i}</td>;
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        );
      } else {
        setMessage("Do you wanna wash plates?");
        setIsMessage(true);
      }
    } else {
      setMessage("Invalid Bill Amount");
      setIsMessage(true);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div classNmae="nav">
          <h1> Cash Register </h1>
          <p>
            Enter the bill amount and cash given by the customer and know
            minimum number of notes to return.{" "}
          </p>
        </div>

        <form className="form">
          <div className="title">Bill Amount:</div>
          <input
            className="input"
            type="number"
            onChange={(event) => {
              var bill = Number(event.target.value);
              setBillAmount(bill);
            }}
          />
          <div className="title">Cash Given:</div>
          <input
            className="input"
            type="number"
            onChange={(event) => {
              var cash = Number(event.target.value);
              setCashGiven(cash);
            }}
          />

          <div>
            <button type="submit" onClick={handleOnSubmit} className="button">
              {" "}
              check{" "}
            </button>
          </div>
        </form>
        <div>
          {isMessage ? (
            <div className="message">{message}</div>
          ) : (
            <div>{optable}</div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
