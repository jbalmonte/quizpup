// @ts-nocheck
import React from 'react'
import Card from '../Card'
import { useAuth } from '../../context/AuthContext'

export default function MyWorks() {
    const { currentUser, Quizzes } = useAuth()
    return (
        <>
            {
                currentUser?.quizzes?.length ?

                    <div className="grid grid-cols-2 gap-4">
                        {
                            Quizzes
                                .filter(q => currentUser.quizzes.map(q => q.id).includes(q.id))
                                .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
                                .map(q => <Card quiz={q} key={q.id} hasDeleteComponent={true} />)
                        }
                    </div> :

                    <div className="h-full w-full text-center py-4 text-secondary-200">
                        <img src="/images/no_data.svg" alt="No Data" className="h-96 mx-auto" />
                        <h1 className="text-3xl mt-10">No works to display</h1>
                        <h1 className="text-3xl mt-2">Go <strong> CREATE </strong> one!</h1>
                    </div>

            }
        </>
    )
}
