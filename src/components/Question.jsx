import React from "react"
import { IoAdd } from "react-icons/io5"
import Choice from "./Choice"

const Question = ({ itemNo }) => {
    return (
        <div className="my-6">
            <fieldset className=" text-primary border border-bg-gray-600 bg-gray-100 w-3/4 mx-auto rounded-lg p-3">
                <div className="text-center flex mt-3">
                    <label htmlFor="question1" className="bg-green-500 text-gray-50 flex items-center leading-normal rounded-l-lg border border-r-0 border-green-500 px-3 whitespace-no-wrap ">Q{itemNo}</label>
                    <input type="text" placeholder="Enter your question here" name=" question1" id="question1" className="text-base px-4 py-2 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:border-green-400 w-11/12" />
                </div>
                <div className="text-right my-3 mr-2">
                    <button type="button" className="text-right text-sm font-medium hover:text-green-600 hover:bg-gray-50 rounded-md">
                        <IoAdd className="inline-flex text-lg mr-1" />
                        <span >
                            Add Choice
                        </span>
                    </button>
                </div>
                <Choice />
                <Choice />
                <Choice />


                <div className="text-right mt-3">
                    <span className="text-secondary-100">Answer: </span>
                    <span className="bg-tertiary text-gray-50 px-2 py-1 rounded-md ml-3 shadow text-center">Joshua</span>
                </div>
            </fieldset>
        </div>
    )
}

export default Question
