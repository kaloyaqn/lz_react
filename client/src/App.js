import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Add from "./Products/Add";
import Edit from "./Products/Edit";
import Products from "./Products/Products";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/edit" element={<Edit/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
