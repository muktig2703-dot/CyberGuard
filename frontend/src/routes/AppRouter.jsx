import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}