import styled from 'styled-components';
import socket from '../socket';

const CommandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  background-color: #000;
  border-top: 3px solid #000;
  grid-gap: 3px;
  max-height: 300px;
`;

const Init = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 1fr 1fr;

  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    border: 4px solid transparent;
    color: #fff;
    font-size: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      padding-bottom: 0.5rem;
      font-size: 2rem;
    }

    &:focus {
      outline: 0;
      border-color: #EAB543;
    }
    &.takeoff {
      background: #2ecc71;
    }
    &.land {
      background: #e67e22;
    }
    &.emergency {
      background: #e74c3c;
      text-transform: uppercase;
    }

    &:last-child {
      grid-column: span 2;
    }
  }
`;

const Main = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    background: #3498db;
    border: 4px solid transparent;
    color: white;
    font-size: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      padding-bottom: 0.5rem;
      font-size: 2rem;
    }

    &:focus {
      outline: 0;
      border-color: #EAB543;
    }
    &.drone {
      background: transparent;
      color: #fff;
    }
    &.rotate {
      background: #2980b9;
      color: #fff;
    }
    &.height {
      background: #2980b9;
      color: #fff;
    }
    &.trick {
      background: #9b59b6;
      color: #fff;
    }
    span.symbol {
      display: block;
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;

const Tricks = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    background: #9b59b6;
    border: 4px solid transparent;
    color: #fff;
    font-size: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      padding-bottom: 0.5rem;
      font-size: 2rem;
    }

    &:focus {
      outline: 0;
      border-color: #EAB543;
    }
  }
`;

function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
}

const amount = 100;
const Commands = () => (
  <CommandGrid>
    <Init>
      <button className="takeoff" onClick={sendCommand('takeoff')}>
        <i class="fas fa-rocket"></i>
        Take Off
      </button>
      <button className="land" onClick={sendCommand('land')}>
        <i class="fas fa-plane-arrival"></i>
        Land
      </button>
      <button className="emergency" onClick={sendCommand('emergency')}>
        <i class="fas fa-skull-crossbones"></i>
        Emergency
      </button>
    </Init>
    <Main>
      <button className="rotate" onClick={sendCommand('ccw 90')}>
        <i class="fas fa-undo-alt"></i>
        90°
      </button>
      <button onClick={sendCommand(`forward ${amount}`)}>
        <i class="fas fa-long-arrow-alt-up"></i>
        forward {amount}cm
      </button>
      <button className="rotate" onClick={sendCommand('cw 15')}>
        <i class="fas fa-redo-alt"></i>
        15°
      </button>
      <button onClick={sendCommand(`left ${amount}`)}>
        <i class="fas fa-long-arrow-alt-left"></i>
        left {amount}cm
      </button>
      <button className="drone" onClick={() => null}>
        <i class="fas fa-gamepad"></i>
        DRONE CONTROLS
      </button>
      <button onClick={sendCommand(`right ${amount}`)}>
        <i class="fas fa-long-arrow-alt-right"></i>
        right {amount}cm
      </button>
      <button className="height" onClick={sendCommand(`up ${amount}`)}>
        <i class="fas fa-caret-square-up"></i>
        {amount}cm
      </button>
      <button onClick={sendCommand(`back ${amount}`)}>
        <i class="fas fa-long-arrow-alt-down"></i>
        back {amount}cm
      </button>
      <button className="height" onClick={sendCommand(`down ${amount}`)}>
        <i class="fas fa-caret-square-down"></i>
        {amount}cm
      </button>
    </Main>
    <Tricks>
      <button onClick={sendCommand('flip l')}>
        <i class="fas fa-fighter-jet"></i>
        Flip Left
      </button>
      <button onClick={sendCommand('flip r')}>
        <i class="fas fa-fighter-jet"></i>
        Flip Right
      </button>
      <button onClick={sendCommand('flip b')}>
        <i class="fas fa-fighter-jet"></i>
        Flip Back
      </button>
      <button onClick={sendCommand('flip f')}>
        <i class="fas fa-fighter-jet"></i>
        Flip Forward
      </button>
      <button onClick={sendCommand('go 25 25 25 25')}>
        <i class="fas fa-fighter-jet"></i>
        Go 25 25 25 25
      </button>
      <button onClick={sendCommand('curve 100 100 100 150 250 350 50')}>
        <i class="fas fa-fighter-jet"></i>
        Curve!
      </button>
    </Tricks>
  </CommandGrid>
);

export default Commands;
