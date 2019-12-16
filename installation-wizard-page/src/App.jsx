import React, { useState } from "react";
import { message, Row, Col } from "antd";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import Button from "antd/es/button";
import logo from "./assets/pmm-logo.png";

function App() {
  const [instanceId, setInstanceId] = useState("");
  const [loading, setLoading] = useState(false);
  const checkInstance = async () => {
    setLoading(true);

    try {
      await axios.post("/v1/AWSInstanceCheck", { instance_id: instanceId });
      // eslint-disable-next-line no-undef
      window.location.href = "/";
    } catch (error) {
      message.error(
        error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
    setLoading(false);
  };

  return (
    <div className={"instance-id-form"}>
      <div className={"container-fluid header"}>
        <Row>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px"
            }}
          >
            <img src={logo} className={"header-logo"} alt={"pmm-logo"} />
            <p
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                fontSize: "20px"
              }}
            >
              Percona Monitoring and Management
            </p>
          </Col>
        </Row>
      </div>
      <div className={"instance-id-pane"}>
        <h2 className={"instance-id-header"}>Instance Id verification</h2>
        <p>
          Please provide the Amazon Instance ID (AMI ID) from the AWS Console.
          <br />
          It uses the format of i-abc123def
        </p>
        <p className={"form-wrapper"}>
          <p className={"input-field-wrapper"}>
            <input
              onChange={e => setInstanceId(e.target.value)}
              type={"text"}
              placeholder={"Instance ID"}
              className={"instance-id-input-field"}
            />
            <Button
              onClick={checkInstance}
              type={"primary"}
              loading={loading}
              disabled={loading}
              className={"instance-id-submit-button"}
            >
              Submit
            </Button>
          </p>
          <a href="/">Where should I get my instance ID?</a>
        </p>
      </div>
    </div>
  );
}

export default App;