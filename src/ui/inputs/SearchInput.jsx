import React from "react";
import styled from "styled-components";
import SearchIcon from "../../Icons/SearchIcon";

const SearchInput = ({ ...props }) => {
  return (
    <StyledInputContainer>
      <StyledInput type="text" {...props} />
      <SearchIcon />
    </StyledInputContainer>
  );
};

export default SearchInput;

const StyledInputContainer = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledInput = styled.input`
  padding: 10px 20px;
  padding-right: 60px;
  border-radius: 8px;
  border: none;
  font-size: 22px;
  max-width: 100px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    max-width: 100%;
  }
`;
