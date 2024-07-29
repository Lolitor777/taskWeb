import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage, HistorialPage, ProfilePage } from "../"


export const TaskRouter = () => {
  return (
    <Routes>
      <Route path="dashboard" element={ <DashboardPage /> } />
      <Route path="historial" element={ <HistorialPage /> } />
      <Route path="profile" element={ <ProfilePage /> } />

      <Route path="/*" element={ <Navigate to="/dashboard" /> } />
    </Routes>
  )
}
