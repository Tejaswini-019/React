import React from 'react';
import { Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Dashboard from './Dashboard';
function Navigation() {
  return (
    <>
        <main className="main">
            <Routes>
             <Route path="/" element={<Menu/>} exact/>
              <Route path="dashboard" element={<Dashboard />} exact/>
            </Routes>
        </main>
    </>
  );
}

export default Navigation;