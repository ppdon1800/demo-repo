import React from "react";
import QrCode from "react-qr-code";

function Qrcode() {
    const [value, setValue] = React.useState("https://google.com");
  return (
    <div>
      <h1>Qrcode</h1>
      <div>
        <input onChange={(e)=> setValue(e.target.value)} type="text" placeholder="Enter your text" />
        <button>Generate</button>
      </div>
      <div>
        <QrCode id="qrcode" value={value} />
      </div>
    </div>
  );
}

export default Qrcode;
