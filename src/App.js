// imports
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
// pages
import NewOrderPage from "./Pages/Dashboard/Dashboard";
import AuthPage from "./Pages/AuthPage/AuthPage";
import OrderHistoryPage from "./Pages/OrderHistoryPage/OrderHistoryPage";
// components
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(getUser());
  // console.log('current user', user)

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
