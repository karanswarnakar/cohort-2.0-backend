import { RouterProvider } from "react-router"
import { router } from "./app.route.jsx"

import { useAuth } from "../features/auth/hooks/useAuth.jsx"
import { useEffect } from "react"


const App = () => {
  const auth = useAuth()

  useEffect(()=>{
     console.log("APP useEffect RUNNING");
   auth.handleGetMe()
  },[])

  return (  
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
