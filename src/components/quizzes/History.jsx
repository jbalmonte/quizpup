// @ts-nocheck
import React from 'react'
import { useAuth } from '../../context/AuthContext'

export default function History() {
    const { currentUser } = useAuth()
    console.log(currentUser.quizHistory)
    return (
        <table className="rounded-t-lg ml-3 bg-green-300 text-gray-800 mx-auto">
            <tr className=" border-b-2 uppercase border-green-400">
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">QPoints</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Summary</th>

            </tr>
            {
                currentUser?.quizHistory.length &&
                currentUser.quizHistory.map(q => {
                    return (
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <td className="px-4 py-3">
                                {q.title}
                            </td>
                            <td className="px-4 py-3">
                                {q.author}
                            </td>
                            <td className="text-left px-4 py-3">
                                {q.description.replace(/^./g, m => m.toUpperCase())}
                            </td>
                            <td className="px-4 py-3">{q.score}</td>
                            <td className="px-4 py-3">{q.QPoints}</td>
                            <td className="px-4 py-3">{q.date}</td>
                            <td className="px-4 py-3">{q.time}</td>

                            <td className=" px-4 py-3">
                                <button className="border font-semibold rounded-md py-1 px-2 border-green-500 hover:bg-green-500 hover:text-gray-50">
                                    View
                                </button>
                            </td>
                        </tr>
                    )
                })


            }

        </table>

    )
}
