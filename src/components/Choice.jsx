
const Choice = () => {
    return (

        <div className="text-center flex">
            <span className="flex items-center leading-normal rounded-l-md border border-r-0 border-gray-400 px-3 whitespace-no-wrap text-secondary-100 ">
                <input type="radio" name="question1A" id="question1A" className="w-4 h-4" />
            </span>
            <input type="text" name="question1" id="question1" placeholder="Choice" className="text-base px-4 py-2 border border-gray-400 rounded-r-md focus:outline-none focus:border-green-400 w-11/12" />
        </div>

    )
}

export default Choice
