import { useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../socket';
import Battery from './Battery';
import Tilt from './Tilt';

function useDroneState() {
  const [droneState, updateDroneState] = useState({});
  useEffect(() => {
    socket.on('dronestate', updateDroneState);
    return () => socket.removeListener('dronestate');
  }, []);
  return droneState;
}

function useSocket() {
  const [status, updateStatus] = useState('DISCONNECTED');
  useEffect(() => {
    socket.on('status', updateStatus);
    return () => socket.removeListener('status');
  }, []);
  return status;
}

const DroneStateStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 1rem;
`;

const Status = styled.p`
  text-align: right;
`;

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  return (
    <DroneStateStyles>
      <Header>
        <Status>Status: {status}</Status>
        <Battery battery={droneState.bat} />
      </Header>
      <Tilt
        pitch={droneState.pitch}
        roll={droneState.roll}
        yaw={droneState.yaw}
        height={droneState.h}
      />
    </DroneStateStyles>
  );
};

export default DroneState;
