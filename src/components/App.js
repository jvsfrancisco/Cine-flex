import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Home";
// import Sessions from "./Sections";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;