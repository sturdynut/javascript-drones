import styled from 'styled-components';

const TiltWrap = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  text-align: center;
  flex: 1;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    flex-direction: column;
    font-size: 2rem;
    font-weight: bold;

    label { font-size: 1rem; font-weight: normal; padding-bottom: 1rem; }
  }
`;
const TiltStyles = styled.div`
  background-image: url('/static/drone.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 340px;
  transition: all 0.2s;
  color: white;
  transform: rotateX(${props => props.pitch}deg)
    rotate(${props => props.yaw * -1}deg)
    rotateY(${props => props.roll * -1}deg);
  position: relative;
  grid-column: 1 / -1;
`;

const Tilt = ({ pitch, roll, yaw, height }) => (
  <TiltWrap>
    <TiltStyles pitch={pitch} roll={roll} yaw={yaw} />
    <span><label>Pitch:</label>{pitch}</span>
    <span><label>Roll:</label>{roll}</span>
    <span><label>Yaw:</label>{yaw}</span>
    <span><label>Height:</label>{height / 100}M</span>
  </TiltWrap>
);

Tilt.defaultProps = {
  pitch: 0,
  roll: 0,
  yaw: 0,
  height: 0,
};

export default Tilt;
