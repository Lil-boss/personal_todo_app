import Home from "./pages/Home/Home";
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Complete from "./pages/completePage/Complete";
import Task from "./pages/Task/Task";
import Login from "./pages/auth/Login/Login";
import RequireAuth from "./pages/auth/RequireAuth/RequireAuth";
function App() {
  return (
    <div>
      <Toaster />
      <Home />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/complete" element={
          <RequireAuth>
            <Complete />
          </RequireAuth>} />
        <Route path="/task" element={
          <RequireAuth>
            <Task />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
