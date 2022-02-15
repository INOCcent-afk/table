import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../inputs/CheckBox";
import TableRowOptionsComponent from "./TableRowOptionsComponent";

const TableRowComponent = ({ props, InventoryScreen, ConsignmentScreen }) => {
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
        {InventoryScreen && (
          <>
            <StyledTD>{props.name}</StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.styleID}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.size}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.desiredReturn}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.condition}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.buyDate}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.buyPrice}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.status}</span>
            </StyledTD>
          </>
        )}
        {ConsignmentScreen && (
          <>
            <StyledTD>
              <span>{props.item}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.store}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.price}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props.payout}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg" success>
              <span>{props.status}</span>
            </StyledTD>
            <StyledTD className="hidden-xs cell-lg">
              <span>{props["Payout Info"]}</span>
            </StyledTD>
          </>
        )}
      </StyledTR>

      <TableRowOptionsComponent toggle={options} />
    </>
  );
};

export default TableRowComponent;

const StyledTR = styled.tr`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

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
  color: ${(props) => props.theme.colors.primary};

  span {
    background-color: ${(props) =>
      props.success
        ? "green"
        : props.warn
        ? "yellow"
        : props.error
        ? "red"
        : ""};
    padding: 10px 20px;
    color: ${(props) =>
      (props.success || props.warn || props.error) && "white"};
    border-radius: 8px;
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    white-space: nowrap;
  }
`;
