import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth"
import { TaskRouter } from "../task"


export const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path="auth/*" element={ <AuthRouter /> } />
            <Route path="/*" element={ <TaskRouter /> } />
        </Routes>
    </>
  )
}
