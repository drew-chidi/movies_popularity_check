import { HeaderContainer } from "./App.Styled";
import Chart from "./components/Chart";

function App() {
  return (
    <div>
      <HeaderContainer className='App'>Popularity </HeaderContainer>
      <div>
        <Chart />
      </div>
    </div>
  );
}

export default App;
