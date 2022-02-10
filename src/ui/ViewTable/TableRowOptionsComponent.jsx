import React from "react";
import styled from "styled-components";
import CheckBox from "../inputs/CheckBox";

const headsDesktop = [
  "NAME",
  "SKU/STYLE ID",
  "SIZE",
  "DESIRED RETURN",
  "CONDITION",
  "BUY DATE",
  "BUY PRICE",
  "STATUS",
];

const TableRowOptionsComponent = ({ toggle }) => {
  return (
    <StyledTROptionsContainer>
      <td colSpan={9}>
        <StyledTROptionsWrapper maxHeight={toggle && 350}>
          <StyledTROptionsContent>
            <div className="">
              hello
              <CheckBox />
            </div>
            <div className="">
              hello
              <CheckBox />
            </div>
            <div className="">
              hello
              <CheckBox />
            </div>
            <StyledMobileCategs className="cell-xs hidden-lg">
              {headsDesktop.map((e) => (
                <div className="" key={e}>
                  {e}
                  <CheckBox />
                </div>
              ))}
            </StyledMobileCategs>
          </StyledTROptionsContent>
        </StyledTROptionsWrapper>
      </td>
    </StyledTROptionsContainer>
  );
};

export default TableRowOptionsComponent;

const StyledTROptionsContainer = styled.tr`
  borrder-collapse: unset;
  background-color: ${(props) => props.theme.colors.secondary};
  td {
    padding: 0;
  }
`;

const StyledTROptionsWrapper = styled.div`
  transition: max-height 0.4s ease-in-out;
  max-height: ${(props) =>
    props.maxHeight || 0}px; // adjust maxHeight base on content for transition
  overflow: hidden;
`;

const StyledTROptionsContent = styled.div`
  padding: 20px;
  gap: 50px;
`;

const StyledMobileCategs = styled.div`
  gap: 10px;
`;
