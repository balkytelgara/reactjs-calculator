import { useEffect, useState } from "react";
import Button from "./Button";
import "./App.css";

function App() {
  const [res, setRes] = useState("");

  useEffect(() => {
    if (res.length > 27) {
      setRes("");
      alert("Reached limit!");
    }
  }, [res]);

  return (
    <div className="App">
      <div className="Display">{res}</div>
      <div className="Buttons">
        <Button value="1" res={res} setRes={setRes} />
        <Button value="2" res={res} setRes={setRes} />
        <Button value="3" res={res} setRes={setRes} />
        <Button value="4" res={res} setRes={setRes} />
        <Button value="5" res={res} setRes={setRes} />
        <Button value="6" res={res} setRes={setRes} />
        <Button value="7" res={res} setRes={setRes} />
        <Button value="8" res={res} setRes={setRes} />
        <Button value="9" res={res} setRes={setRes} />
        <Button value="0" res={res} setRes={setRes} />
        <Button value="C" res={res} setRes={setRes} />
        <Button value="=" res={res} setRes={setRes} />
        <Button value="+" res={res} setRes={setRes} />
        <Button value="-" res={res} setRes={setRes} />
        <Button value="*" res={res} setRes={setRes} />
        <Button value="/" res={res} setRes={setRes} />
      </div>
    </div>
  );
}

export default App;
