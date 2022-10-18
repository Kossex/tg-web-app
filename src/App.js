import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./Components/Header/Header";


function App() {
 const {onToggleButton} = useTelegram()
  return (
    <div className="App">
        <Header/>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
