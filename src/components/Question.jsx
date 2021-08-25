import React from "react"
import { IoAdd } from "react-icons/io5"
import Choice from "./Choice"

const Question = ({ itemNo }) => {
    return (
        <div className="my-4">
            <fieldset className="border border-gray-400 w-3/4 mx-auto rounded-lg p-3">
                <legend className="text-secondary-100 text-left px-3">Q {itemNo}</legend>
                <div className="text-center flex">
                    <label htmlFor="question1" className="flex items-center leading-normal bg-grey-lighter rounded-l-lg border border-r-0 border-gray-300 px-3 whitespace-no-wrap text-secondary-100 ">{itemNo}</label>
                    <input type="text" placeholder="Enter the question..." name="question1" id="question1" className="text-base px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:border-green-400 w-11/12" />
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
                <Choice />

                <p className="text-right">Answer:
                    <span className="bg-tertiary text-gray-50 px-2 py-1 rounded-md ml-3 shadow text-center">Joshua</span>
                </p>
            </fieldset>
        </div>
    )
}

export default Question
