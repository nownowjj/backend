import RootRouter from './router/RootRouter';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>App Component에 존재하는 h1입니다!</h1>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
