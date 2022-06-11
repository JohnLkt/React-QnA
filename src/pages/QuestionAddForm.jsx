import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const QuestionAddForm = () => {
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const Navigate = useNavigate()

    const postQuestion = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:4000/questions', {
            title: title, 
            detail: detail,
        })
        Navigate("/")
        } 
        catch (e) {
            alert(e)
        }  
    }
    return (
        <form className="question-form" onSubmit={(e) => postQuestion(e)}>
            <h1 className="question-form__title">Add Question</h1>
            <input onChange={(e) => setTitle(e.target.value)} type="text" className="question-form__input" />
            <input onChange={(e) => setDetail(e.target.value)} type="text" className="question-form__input" />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default QuestionAddForm