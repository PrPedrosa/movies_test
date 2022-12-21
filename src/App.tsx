import {Routes, Route} from "react-router-dom"
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Question1/>}/>
        <Route path="/q2/:id" element={<Question2/>}/>
        <Route path="/q3/:id" element={<Question3/>}/>
      </Routes>
    </div>
  );
}

export default App;
