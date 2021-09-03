// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Alert from '../components/Alert'
import ReactLoading from 'react-loading'
import { useAuth } from '../context/AuthContext'


function Login() {

    const { login } = useAuth()
    const email = useRef()
    const password = useRef()


    const { state } = useLocation()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(state?.message ?? '')

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            await login(email.current.value, password.current.value)
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }

    //When the login redirected to quizzes page, unmount the loading component
    useEffect(() => () => setLoading(false), [])

    return (
        <div className="bg-no-repeat bg-cover bg-center relative font-body" >

            <div className=" h-semiScreen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                        <h1 className="mb-3 font-bold text-5xl font-header text-primary">Hello Welcome Back!</h1>
                        <p className="pr-3 text-secondary-200">There are lot of quizzes that you don't want to miss out! Come and join us again because you could be the next Quizpup Superstar</p>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100  shadow">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <form className="space-y-4" onSubmit={handleSubmit}>

                            {
                                success ? <Alert type='SUCCESS' message={success} setSuccess={setSuccess} /> :
                                    <Alert
                                        type={error ? 'ERROR' : 'INFO'}
                                        message={error || 'Please fill out all the fields'}
                                        setError={error && setError} />
                            }

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                <input ref={email} autoComplete="username" className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" required placeholder="mail@gmail.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input ref={password} autoComplete="current-password" className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" required placeholder="Enter your password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="$" className="text-green-400 hover:text-green-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                    className="w-full h-12 bg-green-400  hover:bg-green-500 text-gray-100  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">

                                    <div className="w-3/4 mx-auto flex justify-center items-center h-full text-center ">
                                        {
                                            loading ?
                                                <ReactLoading type="spinningBubbles" height='50%' width='15%' color={"white"} className="mb-2" />
                                                :
                                                <span className="mx-auto">
                                                    Sign in
                                                </span>
                                        }
                                    </div>
                                </button>
                            </div>
                        </form>
                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2021-2022
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
