import React from 'react'
import { IoAdd, IoArrowBackSharp } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import Question from '../components/Question'




const CreateQuiz = () => {

    const history = useHistory()

    return (
        <div className=" p-3">
            <div className="bg-gray-50 w-1/2 border rounded-2xl mx-auto mb-5 py-3 px-5 relative">


                <button onClick={() => history.push("/quizzes")} className="absolute text-4xl text-secondary-100 top-6 rounded-full border-2 transform hover:scale-105 hover:text-primary border-primary">
                    <IoArrowBackSharp />
                </button>

                <h1 className="text-4xl my-4 pb-2 font-semibold text-primary mx-auto text-center w-1/2">Create Quiz</h1>

                <div className="py-3 mx-auto">
                    <form action="" className="text-center" method="post" encType="multipart/form-data">
                        <div className="my-4">
                            <label htmlFor="title" className="font-medium text-secondary-200 tracking-wide uppercase mr-20">Title: </label>
                            <input type="text" name="title" id="title" placeholder="Title of the Quiz" className="text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400 w-6/12" />
                        </div>

                        <div className="my-4 ">
                            <label htmlFor="coverPhoto" className="font-medium text-secondary-200 tracking-wide uppercase mr-3">Cover Photo: </label>
                            <input type="file" name="coverPhoto" id="coverPhoto" className="text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400 w-6/12" />
                        </div>

                        <div className="my-4 ">
                            <label htmlFor="description" className="font-medium text-secondary-200 tracking-wide uppercase mr-5">Description: </label>
                            <textarea name="description" id="description" placeholder="Input the description here..." className="text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400 w-1/2 h-28" />
                        </div>

                        <div className="my-4 flex items-stretch justify-center">
                            <label htmlFor="difficulty" className="font-medium text-secondary-200 tracking-wide uppercase mr-5">Difficulty: </label>
                            <div className="flex ml-16 items-center">
                                <input type="radio" name="difficulty" id="easy" value="Easy" className=" h-5 w-5 text-green-500 " />
                                <label htmlFor="easy" className="mr-5 ml-2">Easy</label>

                                <input type="radio" name="difficulty" id="medium" value="Medium" className="h-5 w-5 text-green-500" />
                                <label htmlFor="easy" className="mr-5 ml-2">Medium</label>

                                <input type="radio" name="difficulty" id="hard" value="Hard" className="h-5 w-5 text-green-500 " />
                                <label htmlFor="easy" className="mr-5 ml-2">Hard</label>
                            </div>
                        </div>

                        <div className="my-2 pt-4 flex justify-around  border-t ">
                            <span className="font-medium text-secondary-200 tracking-wide uppercase mr-4">Questions: </span>

                            <button type="button" className="ml-12 text-sm font-medium hover:text-green-600 hover:bg-gray-50 rounded-md transform hover:scale-105">
                                <IoAdd className="inline-flex text-lg mr-1" />
                                <span >
                                    Add Question
                                </span>
                            </button>
                        </div>

                        {[...Array(10)].map((_, i) => <Question key={i} itemNo={i + 1} />)}

                        <button type="submit" className="button font-semibold text-primary my-4 shadow-sm">Publish</button>


                    </form>
                </div>
            </div>
        </div >
    )
}

export default CreateQuiz
