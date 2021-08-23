import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AllQuizzes, BestQuizzes, HotQuizzes, NewQuizzes, } from '../categories'
import Categories from '../components/Categories'
import UserAvatar from '../components/UserAvatar'

const Quizzes = () => {
    return (
        <div className="bg-green-100 font-body text-center grid grid-cols-9 gap-6 pt-3">

            <div className="col-span-2 bg-green-300 rounded-lg ml-3">

            </div>

            <div className="mx-auto col-span-5">
                <Router>
                    <Categories />
                    <Switch>
                        <Route path="/quizzes" exact component={AllQuizzes} />
                        <Route path="/quizzes/hot" exact component={HotQuizzes} />
                        <Route path="/quizzes/new" exact component={NewQuizzes} />
                        <Route path="/quizzes/best" exact component={BestQuizzes} />
                    </Switch>
                </Router>
            </div>
            <div className="col-span-2 mr-3">
                <div className="bg-green-300 rounded-lg h-20 flex items-center justify-around px-3 shadow">
                    <UserAvatar />
                    <input type="text" className="input w-8/12 border bg-gray-100" disabled placeholder="Create a quiz..." />
                </div>
            </div>
        </div>
    )
}

export default Quizzes
