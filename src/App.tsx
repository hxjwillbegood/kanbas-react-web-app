import React from 'react';
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";
import logo from './logo.svg';
import Labs from './Labs/Lab3';

function App() {
  return (
    <HashRouter>
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
