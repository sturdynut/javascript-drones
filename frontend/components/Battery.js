import styled from 'styled-components';

const BatteryStyles = styled.div`
  width: 100%;
  --color: ${props => (props.level > 20 ? '#2ecc71' : '#c0392b')};
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: 0 0 10px var(--color);
  background: #eee;
  max-width: 300px;

  .batteryLevel {
    transition: all 0.5s;
    width: ${props => props.level}%;
    text-align: center;
    color: white;
    display: block;
    background: var(--color);
  }
`;

const Battery = props => (
  <BatteryStyles level={props.battery}>
    <span className="batteryLevel">{props.battery}%</span>
  </BatteryStyles>
);

Battery.defaultProps = {
  // battery: 'LOADING',
  battery: 60,
};

export default Battery;
