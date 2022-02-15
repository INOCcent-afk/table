import TableComponent from "./ui/ViewTable/TableComponent";
import InventoryMockData from "./utils/InventoryMockData.json";
import ConsignmentMockData from "./utils/ConsignmentMockData.json";
import styled from "styled-components";
import {
  getTableHeadsDesktop,
  getTableHeadsMobile,
} from "./utils/helpers/GetTableHeads";

function App() {
  return (
    <StyledApp>
      <TableComponent
        headsDesktop={getTableHeadsDesktop(InventoryMockData)}
        headsMobile={getTableHeadsMobile(InventoryMockData)}
        mockData={InventoryMockData}
        InventoryScreen
      />
      <TableComponent
        headsDesktop={getTableHeadsDesktop(ConsignmentMockData)}
        headsMobile={getTableHeadsMobile(ConsignmentMockData)}
        mockData={ConsignmentMockData}
        ConsignmentScreen
      />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  padding: 20px;
  height: 100vh;
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  gap: 20px;
`;
