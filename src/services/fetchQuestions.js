// @ts-nocheck
import axios from "axios";
import * as htmlEntities from 'html-entities'

const CATEGORIES = {
    "General Knowledge": 9,
    "Entertainment: Books": 10,
    "Entertainment: Film": 11,
    "Entertainment: Music": 12,
    "Entertainment: Musicals & Theatres": 13,
    "Entertainment: Televison": 14,
    "Entertainment: Video Games": 15,
    "Entertainment: Board Games": 16,
    "Science & Nature": 17,
    "Science: Computers": 18,
    "Science: Mathematics": 19,
    "Mythology": 20,
    "Sports": 21,
    "Geography": 22,
    "History": 23,
    "Politics": 24,
    "Art": 25,
    "Celebrities": 26,
    "Animals": 27,
    "Vehicles": 28,
    "Entertainment: Comics": 29,
    "Science: Gadgets": 30,
    "Entertainment: Japanese Anime & Manga": 31,
    "Entertainment: Cartoon & Animations": 32
}

function transformData(questions) {
    return questions.map(v => (
        {
            question: htmlEntities.decode(v.question),
            choices: [v.correct_answer, ...v.incorrect_answers].sort(() => Math.random() - Math.random()).map(htmlEntities.decode),
            answer: htmlEntities.decode(v.correct_answer)
        }))
}

export default async function fetchQuestions(title, difficulty) {
    const url = `https://opentdb.com/api.php?amount=5&category=${CATEGORIES[title]}&type=multiple&difficulty=${difficulty.toLowerCase()}`
    try {
        const result = await axios.get(url)
        const data = await result.data
        return transformData(data.results)
    } catch (err) {
        console.log(err)
    }
}