import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../Icons/MenuIcon";
import DropdownMenu from "../DropdownMenu";
import CheckBox from "../inputs/CheckBox";

const menuDropdownItems = [
  {
    text: "No Sort",
  },
  {
    text: "Sort Ascending",
  },
  {
    text: "Sort Descending",
  },
];

const TableHeadComponent = ({
  title,
  menu,
  checkbox,
  additionalClassNames,
}) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleDropdown = () => {
    setDropdownMenu(!dropdownMenu);
  };

  return (
    <StyledTH className={additionalClassNames} onClick={handleDropdown}>
      <StyledTHContent
        className={`tabledHeadContent ${
          checkbox && "justify-center-important"
        }`}
      >
        {title && <p>{title}</p>}
        {menu && <MenuIcon />}
        {checkbox && <CheckBox />}
      </StyledTHContent>
      {menu && dropdownMenu && (
        <DropdownMenu items={menuDropdownItems} right={30} />
      )}
    </StyledTH>
  );
};

export default TableHeadComponent;

const StyledTH = styled.th`
  padding: 10px 40px;
  color: ${(props) => props.theme.colors.darkVioletRed};
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary}90;
  }
`;

const StyledTHContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  svg {
    margin-top: 3px;
  }
`;
