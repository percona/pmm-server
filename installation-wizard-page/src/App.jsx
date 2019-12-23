import React, { useState } from 'react';
import { Col, notification, Row } from 'antd';
import axios from 'axios';
import './App.css';
import 'antd/dist/antd.css';
import Button from 'antd/es/button';
import logo from './assets/pmm-logo.png';

function App() {
  const [instanceId, setInstanceId] = useState('');
  const [loading, setLoading] = useState(false);
  const checkInstance = async () => {
    setLoading(true);

    try {
      await axios.post('/v1/AWSInstanceCheck', {
        instance_id: instanceId.trim()
      });
      // eslint-disable-next-line no-undef
      window.location.href = '/';
    } catch (error) {
      notification.open({
        message: error.response.data.message
          ? error.response.data.message
          : error.message,
        style: {
          backgroundImage: 'linear-gradient(90deg,#e02f44,#c4162a)',
          color: 'white'
        }
      });
    }
    setLoading(false);
  };

  return (
    <div className='instance-id-form'>
      <div className='container-fluid header'>
        <Row>
          <Col
            span={24}
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '20px'
            }}
          >
            <img src={logo} className='header-logo' alt='pmm-logo' />
            <p
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                fontSize: '20px'
              }}
            >
              Percona Monitoring and Management
            </p>
          </Col>
        </Row>
      </div>
      <div className='instance-id-pane'>
        <h2 className='instance-id-header'>Instance ID verification</h2>
        <p>
          Please provide the Amazon Instance ID (AMI ID) from the AWS Console.
          <br />
          It uses the format of i-abc123def
        </p>
        <p className='form-wrapper'>
          <p className='input-field-wrapper'>
            <input
              onChange={e => setInstanceId(e.target.value)}
              type='text'
              placeholder='Instance ID'
              className='instance-id-input-field'
            />
            <Button
              onClick={checkInstance}
              type='primary'
              loading={loading}
              disabled={loading}
              className='instance-id-submit-button'
            >
              Submit
            </Button>
          </p>
          <a
            href='http://www.percona.com/doc/percona-monitoring-and-management/2.x/install/aws.html#pmm-server-aws-running-instance'
            target='_blank'
            rel='noopener noreferrer'
          >
            Where should I get my instance ID?
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
