import QuizInformation from "../components/QuizInformation"



export default function QuizResultSummary(quiz, questionsLength) {

    const difficultyPoints = {
        'Easy': 1,
        'Medium': 3,
        'Hard': 5
    }

    return (
        <div className="grid grid-cols-3 px-14 py-4 gap-5 text-primary w-full place-content-center my-auto h-semiScreen">

            <div className="col-span-2 border-purple-600 text-secondary-200 bg-gray-50 rounded-md border pt-8 px-8 pb-6 font-body" style={{ width: "50.5rem" }}>
            </div>
            <QuizInformation />
        </div>
    )
}
