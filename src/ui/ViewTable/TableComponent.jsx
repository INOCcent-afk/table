import React from "react";
import styled from "styled-components";
import TableHeadComponent from "./TableHeadComponent";
import TableRowComponent from "./TableRowComponent";
import MockDataJson from "../../utils/MockData.json";
import TableHeaderComponent from "./TableHeaderComponent";
import RippleLoader from "../loaders/RippleLoader";
import { useSelector } from "react-redux";

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

const headsMobile = ["NAME"];

const TableComponent = () => {
  const search = useSelector((state) => state.tableView.search);
  return (
    <div className="relative">
      <TableHeaderComponent />
      <StyledTableContainer>
        <StyledTable cellSpacing={0}>
          <StyledTableHeadContainer>
            <tr>
              <TableHeadComponent checkbox />
              {headsDesktop.map((e) => (
                <TableHeadComponent
                  additionalClassNames="hidden-xs cell-lg"
                  key={e}
                  title={e}
                  menu
                />
              ))}
              {headsMobile.map((e) => (
                <TableHeadComponent
                  additionalClassNames="cell-xs hidden-lg"
                  key={e}
                  title={e}
                  menu
                />
              ))}
            </tr>
          </StyledTableHeadContainer>
          <tbody>
            {MockDataJson.data.map((data) => (
              <TableRowComponent key={data.id} props={data} />
            ))}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
      {search && (
        <StyledLoader>
          <RippleLoader />
        </StyledLoader>
      )}
    </div>
  );
};

export default TableComponent;

const StyledLoader = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 86px);
  background: rgba(0, 0, 0, 0.25);
  top: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const StyledTableContainer = styled.div`
  box-shadow: 0px 14px 40px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  margin: auto;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    overflow: auto;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledTableHeadContainer = styled.thead`
  white-space: nowrap;
  cursor: pointer;

  p {
    font-weight: bold;
  }
`;
