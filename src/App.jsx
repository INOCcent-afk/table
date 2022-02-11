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
  height: 100vh;
`;
