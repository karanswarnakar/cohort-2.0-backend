import { Link } from 'react-router'
import InputField from '../components/InputField'
import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router'
import Button from '../../components/Button'
import { useAuth } from "../hooks/useAuth";
import { useSelector } from 'react-redux'
const Register = () => {
   const { handleRegister } = useAuth()
   const navigate = useNavigate()

   const user = useSelector(state => state.auth.user)
   const lodding = useSelector(state => state.auth.lodding)

   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const submitHandler = async (e) => {
      e.previentDefault()

      await handleRegister({ username, email, password })

      navigate("/")
   }


   if (lodding) {
      return (
         <main className="h-[100vh] text-gray-600 text-3xl font-bold flex justify-center items-center">
            Lodding...
         </main>
      )
   }

   if (!lodding && user) {
      return <Navigate to="/" />
   }


   return (
      <main className="bg-gray-50 px-4 md:px-8 min-h-screen flex flex-col items-center justify-center dark:bg-neutral-900">
         <div className="max-w-md w-full">
            <div
               className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-6 dark:bg-neutral-800 dark:border-neutral-700">
               <h1 className="text-slate-900 text-center text-2xl font-bold dark:text-slate-50">Create an account</h1>

               <form className="space-y-6 mt-10" onSubmit={submitHandler}>
                  <div>
                     <InputField
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => {
                           setUsername(e.target.value)
                        }}
                     />

                  </div>
                  <div>
                     <InputField
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@readymadeui.com"
                        value={email}
                        onChange={(e) => {
                           setEmail(e.target.value)
                        }}
                     />
                  </div>
                  <div>

                     <InputField
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => {
                           setPassword(e.target.value)
                        }}
                     />
                  </div>

                  <Button
                     type="submit"
                     name=" Create an account"
                  />
               </form>

               <div className="mt-6 text-slate-900 text-sm text-center dark:text-slate-50">Already have an account? <Link to="/login"
                  className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                  Login here</Link>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Register
