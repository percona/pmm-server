import React, { useState } from 'react';
import axios from 'axios';

import logo from './assets/pmm-logo.png';

const App = () => {
  const [instanceId, setInstanceId] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [closing, setClosing] = useState(false);
  const [message, setMessage] = useState(false);
  const onClose = (e) => {
    e.preventDefault();
    setClosing(true);
  };
  const checkInstance = async () => {
    setLoading(true);

    try {
      await axios.post('/v1/AWSInstanceCheck', {
        instance_id: instanceId.trim(),
      });
      // eslint-disable-next-line no-undef
      window.location.href = '/';
    } catch (error) {
      setMessage(error.response.data.message ? error.response.data.message : error.message);
      setShowNotification(true);
      setClosing(false);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="nav-wrapper header">
        <div className="nav row">
          <img src={logo} className="header-logo" alt="pmm-logo" />
          <p
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              fontSize: '20px',
            }}
          >
            Percona Monitoring and Management
          </p>
        </div>
      </div>

      <div className="instance-id-form">
        <h2 className="instance-id-header">Amazon Instance ID verification</h2>
        <div className="instance-id-pane">
          <p>
            Please provide the Amazon Instance ID (AMI ID) from the AWS Console.
            <br />
            It should be in the format of
            {' '}
            <i className="ami-id">i-abc123def</i>
          </p>
          <div className="form-wrapper">
            <p className="input-field-wrapper">
              <input
                onChange={(e) => setInstanceId(e.target.value)}
                type="text"
                placeholder="Instance ID"
                className="instance-id-input-field"
              />
              <button
                onClick={checkInstance}
                type="button"
                disabled={loading}
                className="btn button-submit button-primary"
              >
                {loading && (
                  <span className="btn-loading-icon">
                    <span role="img" aria-label="loading" className="anticon anticon-loading">
                      <svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
                      </svg>
                    </span>
                  </span>
                )}
                Submit
              </button>
            </p>
            <a
              href="http://www.percona.com/doc/percona-monitoring-and-management/2.x/install/aws.html#pmm-server-aws-running-instance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Where can I get my instance ID?
            </a>
          </div>
        </div>
      </div>
      {showNotification && (
        <div>
          <div className={`notification-wrapper ${closing ? 'slide-up' : 'slide-down'}`}>
            <div
              className="notification-notice"
            >
              <div className="notification-notice-content">
                <div className="notification-notice-message">
                  {message}
                </div>
              </div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a tabIndex="0" href="#" className="notification-notice-close" onClick={onClose}>
                <span className="notification-close-x">
                  <span
                    role="img"
                    aria-label="close"
                    className="anticon anticon-close notification-close-icon"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="close"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
