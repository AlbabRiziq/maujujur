import { useEffect } from "react";
import Dashboard from "./Route/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
