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
      <StyledTHContent>
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
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => props.theme.colors.blueViolet20};
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
