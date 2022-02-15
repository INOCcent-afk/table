import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "../inputs/SearchInput";
import { white } from "../../styles/colors";
import FilterIcon from "../../Icons/FilterIcon";
import MenuIcon from "../../Icons/MenuIcon";
import DownloadIcon from "../../Icons/DownloadIcon";
import RefreshIcon from "../../Icons/RefreshIcon";
import Button from "../Button";
import DropdownMenu from "../DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../../redux/TableViewSlice";

const headerMenuDropdown = [
  {
    text: "Refresh Inventory",
    icon: <RefreshIcon height={20} width={20} />,
  },
  {
    text: "Import Inventory",
    icon: <DownloadIcon height={20} width={20} />,
  },
  {
    text: "Filter",
    icon: <FilterIcon height={20} width={20} />,
  },
  {
    text: "List All",
  },
];

const TableHeaderComponent = ({ consignmentScreen }) => {
  const [dropdown, setDropdown] = useState(false);
  const search = useSelector((state) => state.tableView.search);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(handleSearch(e.currentTarget.value));
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <div className="relative" onClick={handleDropdown}>
          <MenuIcon color={white} width={40} height={40} />
          {dropdown && <DropdownMenu items={headerMenuDropdown} left={0} />}
        </div>
        {consignmentScreen && (
          <StyledAdditionalItems>
            <StyledCol>
              <h3>Total Sales</h3>
              <span>0.01</span>
            </StyledCol>
            <StyledCol>
              <h3>Total Sales</h3>
              <span>0.01</span>
            </StyledCol>
          </StyledAdditionalItems>
        )}
        <StyledHeaderRightNav>
          <RefreshIcon className="hidden-xs block-lg" fill={white} />
          <DownloadIcon className="hidden-xs block-lg" fill={white} />
          <FilterIcon className="hidden-xs block-lg" fill={white} />
          <SearchInput
            placeholder="Search..."
            onChange={(e) => handleInput(e)}
            value={search}
          />
          <Button className="hidden-xs block-lg" text="List All" />
        </StyledHeaderRightNav>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default TableHeaderComponent;

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  svg {
    cursor: pointer;
  }
`;

const StyledHeaderContent = styled.div`
  flex-wrap: wrap;
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    flex-wrap: unset;
  }
`;

const StyledAdditionalItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;

  h3 {
    margin: 0;
    white-space: nowrap;
  }
`;

const StyledHeaderRightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
`;
