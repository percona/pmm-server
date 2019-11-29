import React from "react";
import "./App.css";

function App() {
  return (
    <div className="instance-id-form">
      <div>
        <p>
          Please provide the Amazon Instance ID (AMI ID) from the AWS Console.
          It uses the format of i-abc123def
        </p>
        <p>
          <input
            type="text"
            placeholder={"Instance ID"}
            className={"instance-id-input-field"}
          />
          <a href="/">Where should i get my instance ID</a>
        </p>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
