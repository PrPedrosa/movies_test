import {Routes, Route} from "react-router-dom"
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <div className="App">
      <h1>LOGO HERE</h1>
      <Routes>
        <Route path="/" element={<Question1/>}/>
        <Route path="/q2/:id" element={<Question2/>}/>
        <Route path="/q3/:id" element={<Question3/>}/>
        <Route path="/watch/:id" element={<FinalPage/>}/>
      </Routes>
      <footer>
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
      </footer>
    </div>
  );
}

export default App;
