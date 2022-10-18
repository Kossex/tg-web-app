import './App.css';
import {useTelegram} from "./hooks/useTelegram";


function App() {
 const {onToggleButton,Tg} = useTelegram()
  return (
    <div className="App">
      <button onClick={onToggleButton}></button>
    </div>
  );
}

export default App;
