
const Choice = () => {
    return (

        <div className="text-center flex mb-3">
            <span className="flex items-center leading-normal bg-grey-lighter rounded-l-lg border border-r-0 border-gray-300 px-3 whitespace-no-wrap text-secondary-100 ">
                <input type="radio" name="question1A" id="question1A" className="w-4 h-4" />
            </span>
            <input type="text" placeholder="Input a choice" name="question1" id="question1" className="text-base px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:border-green-400 w-11/12" />
        </div>

    )
}

export default Choice