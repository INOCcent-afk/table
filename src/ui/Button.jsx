import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border-radius: 4px;
  padding: 10px 30px;
  background: ${(props) => props.theme.colors.white};
  border: none;
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
