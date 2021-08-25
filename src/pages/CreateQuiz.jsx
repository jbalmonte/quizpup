import React from 'react'
import { IoAdd } from 'react-icons/io5'
import Question from '../components/Question'




const AddQuiz = () => {

    return (
        <div className="bg-green-100 p-3">
            <div className="bg-gray-50 w-1/2 border rounded-2xl mx-auto mb-5 py-3 px-5">
                <h1 className="text-4xl my-4 pb-2 font-semibold text-primary mx-auto text-center w-1/2">Create a Quiz</h1>

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
                            <label htmlFor="difficulty" className="font-medium text-secondary-200 tracking-wide uppercase">Difficulty: </label>
                            <div className="flex ml-12 items-center">
                                <input type="radio" name="difficulty" id="easy" value="Easy" className=" h-6 w-8 text-green-500 transform hover:scale-110 transition-transform ease-in-out duration-300" />
                                <label htmlFor="easy" className="mr-5 ml-2">Easy</label>

                                <input type="radio" name="difficulty" id="medium" value="Medium" className="h-6 w-8 text-green-500 transform hover:scale-110 transition-transform ease-in-out duration-300" />
                                <label htmlFor="easy" className="mr-5 ml-2">Medium</label>

                                <input type="radio" name="difficulty" id="hard" value="Hard" className="h-6 w-8 text-green-500 transform hover:scale-110 transition-transform ease-in-out duration-300" />
                                <label htmlFor="easy" className="mr-5 ml-2">Hard</label>
                            </div>
                        </div>

                        <div className="my-3 py-4 flex justify-around  border-t ">
                            <span className="font-medium text-secondary-200 tracking-wide uppercase mr-5">Questions: </span>

                            <button type="button" className="ml-12 text-sm font-medium hover:text-green-600 hover:bg-gray-50 rounded-md transform hover:scale-105">
                                <IoAdd className="inline-flex text-lg mr-1" />
                                <span >
                                    Add Question
                                </span>
                            </button>
                        </div>

                        {[...Array(10)].map((_, i) => <Question key={i} itemNo={i + 1} />)}

                        <button type="submit" className="button font-semibold text-secondary-200">Submit</button>


                    </form>
                </div>
            </div>
        </div >
    )
}

export default AddQuiz