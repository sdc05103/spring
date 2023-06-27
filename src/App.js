import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tamplate from "./components/main/MainTamplate";
import LoginPage from "./components/auth/LoginPage";
import JoinPage from "./components/auth/JoinPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tamplate />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
}

export default App;
