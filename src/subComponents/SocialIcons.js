import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";

const Icons = styled.div`
display: : flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink to="/">
          <Github width={25} height={25} fill="currentColor"></Github>
        </NavLink>
        <NavLink to="/">
          <Twitter width={25} height={25} fill="currentColor"></Twitter>
        </NavLink>
        <NavLink to="/">
          <Facebook width={25} height={25} fill="currentColor"></Facebook>
        </NavLink>
        <NavLink to="/">
          <YouTube width={25} height={25} fill="currentColor"></YouTube>
        </NavLink>
      </div>
    </Icons>
  );
};

export default SocialIcons;
