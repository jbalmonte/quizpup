import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AllQuizzes, BestQuizzes, HotQuizzes, NewQuizzes, } from '../categories'
import Categories from '../components/Categories'
import UserAvatar from '../components/UserAvatar'

const Quizzes = () => {
    return (
        <div className="bg-green-100 font-body text-center content-center">
            <div className="w-3/6 h-full mx-auto pt-5">

                <div className="bg-green-300 rounded-lg h-20 flex items-center justify-center px-2  shadow">
                    <UserAvatar />
                    <input type="text" className="input w-10/12 ml-3 border bg-gray-100" disabled placeholder="Create a quiz" />
                </div>

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
        </div>
    )
}

export default Quizzes
