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

const TableHeaderComponent = () => {
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
      <StyledDesktopView>
        <RefreshIcon fill={white} />
        <DownloadIcon fill={white} />
        <FilterIcon fill={white} />
        <SearchInput
          placeholder="Search..."
          onChange={(e) => handleInput(e)}
          value={search}
        />
        <Button text="List All" />
      </StyledDesktopView>
      <StyledMobileView>
        <StyledMenuContainer onClick={handleDropdown}>
          <MenuIcon color={white} width={40} height={40} />
          {dropdown && <DropdownMenu items={headerMenuDropdown} left={0} />}
        </StyledMenuContainer>
        <SearchInput
          placeholder="Search..."
          onChange={(e) => handleInput(e)}
          value={search}
        />
      </StyledMobileView>
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

const StyledDesktopView = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  }
`;

const StyledMobileView = styled(StyledDesktopView)`
  justify-content: space-between;
  display: flex;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: none;
  }
`;

const StyledMenuContainer = styled.div`
  position: relative;
`;
