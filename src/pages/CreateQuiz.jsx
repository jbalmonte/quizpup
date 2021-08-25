import React from 'react'

const AddQuiz = () => {
    return (
        <div className="bg-green-100 h-screen p-3">
            <div className="bg-gray-50 w-1/2 border rounded-2xl h-full mx-auto mb-5 py-3 px-5">
                <h1 className="text-4xl my-4 pb-2 font-semibold text-primary mx-auto text-center w-1/2">Create a Quiz</h1>

                <div className="py-5 mx-auto">

                    <form action="" className="text-center" method="post" encType="multipart/form-data">
                        <div className="my-3 ">
                            <label htmlFor="title" className="font-medium text-tertiary tracking-wide uppercase mr-6">Title: </label>
                            <input type="text" name="title" id="title" className="text-base px-4 py-2 border ml-12 border-green-200 rounded-lg focus:outline-none focus:border-green-400 w-6/12" />
                        </div>

                        <div className="my-3 ">
                            <label htmlFor="coverPhoto" className="font-medium text-tertiary tracking-wide uppercase mr-3">Cover Photo: </label>
                            <input type="file" name="coverPhoto" id="coverPhoto" className="text-base px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:border-green-400 w-6/12" />
                        </div>

                        <div className="my-3 ">
                            <label htmlFor="description" className="font-medium text-tertiary tracking-wide uppercase mr-5">Description: </label>
                            <textarea name="description" id="description" className="text-base px-4 py-2 border  border-green-200 rounded-lg focus:outline-none focus:border-green-400 w-1/2 h-28" />
                        </div>

                        <div className="my-3 flex items-stretch justify-center">
                            <label htmlFor="difficulty" className="font-medium text-tertiary tracking-wide uppercase">Difficulty: </label>
                            <div className="flex ml-12 items-center">
                                <input type="radio" name="difficulty" id="easy" value="Easy" className=" h-6 w-8 text-green-500 transform hover:scale-110 transition-transform ease-in-out duration-300" />
                                <label htmlFor="easy" className="mr-5 ml-2">Easy</label>

                                <input type="radio" name="difficulty" id="medium" value="Medium" className="h-6 w-8 text-green-500 transform hover:scale-110 transition-transform ease-in-out duration-300" />
                                <label htmlFor="easy" className="mr-5 ml-2">Medium</label>

                                <input type="radio" name="difficulty" id="hard" value="Hard" className="h-6 w-8 text-green-500 transform hover:scale-110 transition-transform ease-in-out duration-300" />
                                <label htmlFor="easy" className="mr-5 ml-2">Hard</label>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddQuiz
