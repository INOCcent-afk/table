import React from "react";
import styled from "styled-components";

const DropdownMenu = ({ items, top, left, bottom, right }) => {
  return (
    <StyledDropdownMenu top={top} left={left} bottom={bottom} right={right}>
      {items.map((item) => (
        <StyledDropdownMenuItem key={item.text}>
          <p>{item.text}</p>
          {item.icon}
        </StyledDropdownMenuItem>
      ))}
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;

const StyledDropdownMenu = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 8px;
  box-shadow: 1px -2px 45px -21px rgba(0, 0, 0, 0.75);
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  bottom: ${(props) => props.bottom}px;
  right: ${(props) => props.right}px;
  z-index: 1;
`;

const StyledDropdownMenuItem = styled.div`
  cursor: pointer;
  padding: 0px 30px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.mildGray};
  }
`;
