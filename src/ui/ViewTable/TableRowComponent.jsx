import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../inputs/CheckBox";
import TableRowOptionsComponent from "./TableRowOptionsComponent";

const TableRowComponent = ({ props }) => {
  const [options, setOptions] = useState(false);

  const handleOptions = () => {
    setOptions(!options);
  };

  return (
    <>
      <StyledTR onClick={handleOptions}>
        <StyledTD>
          <CheckBox
            className="mx-auto block"
            onClick={(e) => e.stopPropagation()}
          />
        </StyledTD>
        <StyledTD>{props.name}</StyledTD>
        <StyledTD className="hidden-xs cell-lg">{props.styleID}</StyledTD>
        <StyledTD className="hidden-xs cell-lg">{props.size}</StyledTD>
        <StyledTD className="hidden-xs cell-lg">{props.desiredReturn}</StyledTD>
        <StyledTD className="hidden-xs cell-lg">{props.condition}</StyledTD>
        <StyledTD className="hidden-xs cell-lg">{props.buyDate}</StyledTD>
        <StyledTD className="hidden-xs cell-lg">{props.buyPrice}</StyledTD>
        <StyledTD className="hidden-xs cell-lg">{props.status}</StyledTD>
      </StyledTR>

      <TableRowOptionsComponent toggle={options} />
    </>
  );
};

export default TableRowComponent;

const StyledTR = styled.tr`
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.mildGray};
  }
`;

const StyledTD = styled.td`
  padding: 20px;
  font-weight: bold;
  border-right: 1px solid ${(props) => props.theme.colors.lightGray};
  white-space: unset;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    white-space: nowrap;
  }
`;
