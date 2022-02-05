import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ClickEvent } from "tsparticles/Options/Classes/Interactivity/Events/ClickEvent";

import music from "../../src/assets/audio/u-said-it-v13-1167.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 15rem;
  top: 2.6rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.6s;
  }
  & > *:nth-child(6) {
    animation-delay: 0.7s;
  }
`;

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const play = keyframes`
  0%{
    transform: scaleY(1);
  }50%{
    transform: scaleY(2);
  }100%{
    transform: scaleY(1);
  }
`;

  const Line = styled.span`
    background: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};

    animation: ${play} 1s ease infinite;
    animation-play-state: ${(props) => (props.click ? "runnning" : "paused")};
    height: 2rem;
    width: 2.5px;
    margin: 0 0.1rem;
    border-radius: 0 50px 0 50px;
  `;

  return (
    <Box onClick={() => handleClick()}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src={music} ref={ref}></audio>
    </Box>
  );
};

export default SoundBar;
