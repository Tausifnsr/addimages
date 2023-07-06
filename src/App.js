import { useState } from "react";
import Modal from "./components/Modal";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button className="btn" onClick={() => setShow(!show)}>
        Open Modal
      </button>
      {show && <Modal />}
    </div>
  );
}
