import { Map } from "./Map";
import "./App.css";

function App() {
  return (
    <>
      <div className="header-title">テスト</div>
      <div className="header-description">この地図はLeaflet + 地理院地図を利用して表現しています。</div>
      <Map />
    </>
  );
}

export default App;