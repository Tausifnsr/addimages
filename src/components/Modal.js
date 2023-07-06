import { useState } from "react";
import FirstTab from "./tab-components/FirstTab";
import SecondTab from "./tab-components/SecondTab";

export default function Modal() {
  const [activeTab, setActiveTab] = useState("upload");

  //  Functions to handle Tab Switching

  return (
    <div className="modalOuter">
      <div className="modalBox">
        <h3 className="heading">Decorica (Seller)</h3>
        <p className="instruction">ADD NEW PRODUCTS HERE</p>

        <div className="Tabs">
          <div className="pName">
            <input type="text" placeholder="Product Name"></input>
          </div>
          <div className="tArea">
            <textarea placeholder="Enter Details of the Product here."></textarea>
          </div>
          <div className="outlet">
            {activeTab === "upload" ? <FirstTab /> : <SecondTab />}
          </div>
          <button className="submitBtn">Submit</button>
        </div>
      </div>
    </div>
  );
}
