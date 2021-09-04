import React, { useEffect } from 'react'
import UserAvatar from '../components/UserAvatar'
import Users from '../db/Users'

function Leaderboards() {

    useEffect(() => window.scrollTo(0, 0), [])

    const top3 = {
        1: "text-white bg-yellow-400 rounded-full",
        2: "text-gray-50 bg-gray-400 rounded-full",
        3: "text-gray-50 bg-yellow-800 rounded-full"
    }


    return (
        <div className="grid grid-cols-2 gap-6 ">

            <div className="col-span-1 py-5 mx-auto w-full">

                <div className=" text-gray-50 rounded-md bg-gradient-to-r from-tertiary to-secondary-200">
                    <h1 className="p-2 text-center mx-auto font-header font-medium text-3xl mb-5 uppercase">Top Players of the Week</h1>
                </div>
                <div className="flex items-center justify-center">
                    <table className="border-collapse border border-primary w-3/4 text-secondary-200">
                        <thead className="font-header">
                            <tr>
                                <th className="border border-primary">Rank</th>
                                <th className="col-span-5 border border-primary">Player</th>
                                <th className="border border-primary p-4" >QPoints</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Users
                                    .sort((a, b) => b.QPointsWeek - a.QPointsWeek)
                                    .map((user, i) => (
                                        <tr key={i + 1}>
                                            <td className="border border-primary p-3 text-center">
                                                <div className={`${i < 3 && top3[i + 1]}`}>
                                                    {i + 1}
                                                </div>
                                            </td>
                                            <td className="p-1 ml-5 border-primary border">
                                                <div className="ml-3 flex items-center justify-start">
                                                    <UserAvatar size={8} fSize="text-xs" user={user} />
                                                    <span className="ml-3 inline-block">
                                                        {user.fullName}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="border border-primary p-1 text-center">{user.QPointsWeek}</td>
                                        </tr>
                                    ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="col-span-1 py-5 mx-auto w-full">

                <div className=" text-gray-50 rounded-md bg-gradient-to-r from-secondary-200 to-yellow-400">
                    <h1 className="p-2 text-center mx-auto font-header font-medium text-3xl mb-5 uppercase">Top Players of the Season</h1>
                </div>
                <div className="flex items-center justify-center">
                    <table className="border-collapse border border-primary w-3/4 text-secondary-200">
                        <thead className="font-header">
                            <tr>
                                <th className="border border-primary">Rank</th>
                                <th className="col-span-5 border border-primary">Player</th>
                                <th className="border border-primary p-4" >QPoints</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Users
                                    .sort((a, b) => b.QPoints - a.QPoints)
                                    .map((user, i) => (
                                        <tr key={i + 1}>
                                            <td className="border border-primary p-3 text-center">
                                                <div className={`${i < 3 && top3[i + 1]}`}>
                                                    {i + 1}
                                                </div>
                                            </td>
                                            <td className="p-1 ml-5 border-primary border">
                                                <div className="ml-3 flex items-center justify-start">
                                                    <UserAvatar size={8} fSize="text-xs" user={user} />
                                                    <span className="ml-3 inline-block">
                                                        {user.fullName}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="border border-primary p-1 text-center">{user.QPoints}</td>
                                        </tr>
                                    ))


                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Leaderboards
