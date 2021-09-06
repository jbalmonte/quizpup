// @ts-nocheck
import React from 'react'
import { useAuth } from '../../context/AuthContext'

export default function History() {
    const { currentUser } = useAuth()
    return (

        <>
            {
                currentUser?.quizHistory?.length ?

                    <table className="rounded-t-lg ml-3 bg-green-500  text-gray-800 mx-auto">
                        <thead>

                            <tr className=" border-b-2 uppercase border-gray-300 text-gray-50 ">
                                <th className="p-4">Title</th>
                                <th className="p-4">Author</th>
                                <th className="p-4">Description</th>
                                <th className="p-4">Score</th>
                                <th className="p-4">QPoints</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Time</th>
                                <th className="p-4">Summary</th>

                            </tr>
                        </thead>
                        <tbody>

                            {

                                currentUser.quizHistory.map(q => {
                                    return (
                                        <tr className="bg-gray-100 border-b border-gray-200" key={q.id}>
                                            <td className="p-4">
                                                {q.title}
                                            </td>
                                            <td className="p-4">
                                                {q.author}
                                            </td>
                                            <td className="text-left p-4">
                                                {q.description.replace(/^./g, m => m.toUpperCase())}
                                            </td>
                                            <td className="p-4">{q.score}</td>
                                            <td className="p-4">{q.QPoints}</td>
                                            <td className="p-4">{q.date}</td>
                                            <td className="p-4">{q.time}</td>

                                            <td className=" p-4">
                                                <button className="border font-semibold rounded-md py-1 px-2 border-green-500 hover:bg-green-500 hover:text-gray-50">
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <div className="h-full w-full text-center py-4 text-secondary-200">
                        <img src="/images/no_data.svg" alt="No Data" className="h-96 mx-auto" />
                        <h1 className="text-3xl mt-10">No history to display</h1>
                        <h1 className="text-3xl mt-2">Go <strong> SOLVE </strong> one!</h1>
                    </div>

            }
        </>
    )
}
