import Home from "./pages/Home/Home";
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Complete from "./pages/completePage/Complete";
import Task from "./pages/Task/Task";
function App() {
  return (
    <div>
      <Toaster />
      <Home />
      <Routes>
        <Route path="/complete" element={<Complete />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
