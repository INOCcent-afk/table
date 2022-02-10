import TableComponent from "./ui/ViewTable/TableComponent";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <TableComponent />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.secondary}
  height: 100vh;
`;
