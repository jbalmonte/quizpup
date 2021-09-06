// @ts-nocheck
import React from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../services/api'


export default function Trash() {

    const { currentUser, setCurrentUser, setQuizzes } = useAuth()

    const handleDelete = id => {
        setCurrentUser({ ...currentUser, trash: currentUser.trash.filter(({ quiz }) => quiz.id !== id) })
    }

    const handleRecover = q => {
        api().create(q, setQuizzes)
        setCurrentUser({
            ...currentUser,
            trash: currentUser.trash.filter(({ quiz }) => quiz.id !== q.id),
            quizzes: [...currentUser.quizzes, q]
        })
    }

    return (

        <>
            {
                currentUser?.trash?.length ?
                    <table className="rounded-t-lg ml-3 w-full bg-green-500  text-gray-800 mx-auto">
                        <thead>

                            <tr className=" border-b-2 uppercase border-green-400 text-gray-50 ">
                                <th className="py-1 px-2">Title</th>
                                <th className="py-1 px-2">Description</th>
                                <th className="py-1 px-2">Difficulty</th>
                                <th className="py-1 px-2">Rating</th>
                                <th className="py-1 px-2">Date Created</th>
                                <th className="py-1 px-2">Date Deleted</th>
                                <th className="py-1 px-2">Recover</th>
                                <th className="py-1 px-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                currentUser.trash.map(({ quiz }) => {
                                    return (
                                        <tr className="bg-gray-100 border-b border-gray-200" key={quiz.id}>
                                            <td className="p-4">
                                                {quiz.title}
                                            </td>
                                            <td className="text-left p-3">
                                                {quiz.description.replace(/^./g, m => m.toUpperCase())}
                                            </td>
                                            <td className="p-3">{quiz.difficulty}</td>
                                            <td className="p-2">{quiz.overallRating.average}</td>
                                            <td className="p-2">{quiz.dateCreated}</td>
                                            <td className="p-2">{quiz.dateDeleted}</td>
                                            <td className="h-full text-center p-2">
                                                <button onClick={() => handleRecover(quiz)} className="border inline-flex my-auto font-semibold rounded-md  py-1 px-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-50">
                                                    Recover
                                                </button>
                                            </td>
                                            <td className="h-full text-center py-2 pr-4 pl-2">
                                                <button onClick={() => handleDelete(+quiz.id)} className="border inline-flex font-semibold rounded-md  py-1 px-2 border-red-500 hover:bg-red-500 hover:text-gray-50">
                                                    Delete
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
                        <h1 className="text-3xl mt-10">No Items to Display</h1>
                    </div>
            }
        </>
    )
}