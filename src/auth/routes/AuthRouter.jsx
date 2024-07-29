import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage, WellcomePage } from "../"


export const AuthRouter = () => {
    
  return (
    <Routes>
      <Route path="login" element={ <LoginPage /> } />
      <Route path="register" element={ <RegisterPage /> } />
      <Route path="wellcome" element={ <WellcomePage /> } />

      <Route path="/*" element={ <Navigate to="/auth/login" /> } /> 
    </Routes>
  )
}
