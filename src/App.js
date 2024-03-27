
import './App.css';
import StateWithoutHooks from './hooks-in-react/StateWithoutHooks';
import UseStateWithHooks from './hooks-in-react/UseStateWithHooks';
function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
    {/* <StateWithoutHooks/> */}
    <UseStateWithHooks/>
    </div>
  );
}

export default App;
