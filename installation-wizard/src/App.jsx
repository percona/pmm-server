import React, { useState } from 'react';
import axios from 'axios';
import { LoadingIcon, NavBar, Notification } from './components';

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
      <NavBar />

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
                onChange={(e) => {
                  setInstanceId(e.target.value);
                }}
                type="text"
                placeholder="Instance ID"
                className="instance-id-input-field"
              />
              <button
                type="button"
                className="btn button-submit button-primary"
                disabled={loading || !instanceId}
                onClick={checkInstance}
              >
                {loading && <LoadingIcon />}
                Submit
              </button>
            </p>
            <a
              href="https://www.percona.com/doc/percona-monitoring-and-management/2.x/setting-up/client/aws.html#pmm-server-aws-running-instance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Where can I get my instance ID?
            </a>
          </div>
        </div>
      </div>

      {showNotification && <Notification closing={closing} onClose={onClose} message={message} />}
    </>
  );
};

export default App;
