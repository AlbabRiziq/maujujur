import { useEffect } from "react";
import Dashboard from "./Route/Dashboard/Dashboard";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      window.location.href = "/login";
    }
  });

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
