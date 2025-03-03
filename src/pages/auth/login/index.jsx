import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/auth";

export default function Login() {
  
  const [inputData, setInput] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  // handele email, pasword dan submit
  const handleInput = (e) => {
    const { name, value } = e.target 
    setInput({...inputData, [name]: value})
   }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // koneksi ke service auth
    const res = await login(inputData)
    
    console.log(res)

    // cek role & redirect
    if (res.user.role === "admin" || res.user.role === "staff"){
      localStorage.setItem('accessToken', res.token)
      localStorage.setItem('userInfo', JSON.stringify(res.user))
      return navigate('/admin')
    } else {
      localStorage.setItem('accessToken', res.token)
      localStorage.setItem('userInfo', JSON.stringify(res.user))
      return navigate('/')
    }
  } 

  const accessToken = localStorage.getItem('accessToken')

  // useEffect 

  useEffect(() => {
    if (accessToken) {
      return navigate('/')
    }
  }, [accessToken, navigate])

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                  </h1>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input value={inputData.email} onChange={handleInput} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input value={inputData.password} onChange={handleInput} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800" required="" />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                              </div>
                          </div>
                          <Link to="#" className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500">Forgot password?</Link>
                      </div>
                      <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Sign in</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? <Link to="#" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Sign up</Link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}
