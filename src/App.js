import './App.css';
const Tg = window.Telegram.WebApp;
function App() {

const OnClose = () => {
    Tg.close();
    }
  return (
    <div className="App">
    Its working
   <button onClick={OnClose}>Close</button>
    </div>
  );
}

export default App;
