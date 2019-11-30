import React, { useState } from "react";

import "./App.css";

function App() {
  const [instanceId, setInstanceId] = useState("");
  const [checkError, setCheckError] = useState("");
  const checkInstance = async () => {
    const response = await fetch("/v1/AWSInstanceCheck", {
      method: "POST",
      body: JSON.stringify({ instance_id: instanceId })
    });
    if (!response.ok) {
      return setCheckError("Something went wrong");
    }
    window.location.href = "/";
  };

  return (
    <div className="instance-id-form">
      <div>
        <p>
          Please provide the Amazon Instance ID (AMI ID) from the AWS Console.
          <br />
          It uses the format of i-abc123def
        </p>
        <p className={"form-wrapper"}>
          <p className={"input-field-wrapper"}>
            <input
              onChange={e => setInstanceId(e.target.value)}
              type="text"
              placeholder={"Instance ID"}
              className={"instance-id-input-field"}
            />
            <button
              type={"button"}
              className={"instance-id-submit-button"}
              onClick={checkInstance}
            >
              Submit
            </button>
          </p>
          <span className={'check-error'}>{checkError}</span>
          <a href="/">Where should i get my instance ID</a>
        </p>
      </div>
    </div>
  );
}

export default App;
