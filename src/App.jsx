import styled from "styled-components";
import { TourForm } from "./components/TourForm";
import { TourList } from "./components/TourList";
import { useTours } from "./hooks/useTours";

function App() {
  const { tours, loading, refreshTours, onDelete } = useTours();
  console.log("refreshTours in App:", refreshTours);
  return (
      <StyledWrapper>
        <h1>Tour-App</h1>
        <TourForm refreshTours={refreshTours} />
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <TourList tours={tours} onDelete={onDelete} />
        )}
      </StyledWrapper>
  );
}

export default App;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
