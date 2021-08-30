// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import ReactLoading from 'react-loading'
import Alert from '../components/Alert'

const Register = () => {

    const email = useRef()
    const fullName = useRef()
    const password = useRef()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { register } = useAuth()



    const handleSubmit = async e => {
        e.preventDefault()

        try {
            setLoading(true)
            await register(email.current.value, fullName.current.value, password.current.value)
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }

    useEffect(() => () => setLoading(false), [])

    return (
        <div className="bg-no-repeat bg-cover bg-center relative font-body">

            <div className=" h-semiScreen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">

                        <h1 className="mb-3 font-bold text-5xl font-header text-primary">Register now!</h1>
                        <p className="pr-3 text-secondary-200">There are lot of quizzes that you don't want to miss out! Come and join us because you could be the next Quizpup Superstar</p>
                    </div>
                </div>

                <div className="flex justify-center self-center  z-10">
                    <div className="px-12 py-10 bg-white mx-auto rounded-2xl w-100  shadow">
                        <div className="mb-3">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
                            <p className="text-gray-500">Please sign up to your account.</p>
                        </div>

                        <form className="space-y-3" onSubmit={handleSubmit}>


                            {
                                error ?
                                    <Alert type='ERROR' message={error} setError={setError} /> :
                                    <Alert type='INFO' message="Please fill out all the fields" />

                            }
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                <input ref={email} className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" required placeholder="mail@gmail.com" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Full Name</label>
                                <input ref={fullName} className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Juan Dela Cruz" />
                            </div>
                            <div className="space-y-1">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input ref={password} className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" required placeholder="Enter your password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input required id="terms_and_conditions" name="terms_and_conditions" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                    <label htmlFor="terms_and_conditions" className="ml-2 block text-sm text-gray-800">
                                        I agree to <span className="underline"> Terms and Conditions</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button disabled={loading} type="submit" className="w-full h-12 bg-green-400  hover:bg-green-500 text-gray-100  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">

                                    <div className="w-3/4 mx-auto flex justify-center items-center h-full text-center ">

                                        {
                                            loading ?
                                                <ReactLoading type="spinningBubbles" height='50%' width='15%' color={"white"} className="mb-2" />
                                                :
                                                <span className="mx-auto">
                                                    Sign up
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

export default Register
