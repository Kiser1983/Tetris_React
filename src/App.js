import "./App.css";

import Game from "../src/components/Game";

export default function App() {
  return (
    <div className="App">
      <p>Tetris</p>
      <Game rows={20} columns={10} />
    </div>
  );
}
