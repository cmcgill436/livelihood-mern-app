import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import Dashboard from "../Dashboard/Dashboard";
import NavBar from "../../components/NavBar/NavBar";
import NewNote from "../NewNote/NewNote";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route
              path="/"
              element={<Dashboard user={user} setUser={setUser} />}
            />
            <Route
              path="/new"
              element={<NewNote user={user} setUser={setUser} />}
            />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
