import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const QuestionCard = ({title, detail, id}) => {

    const Navigate = useNavigate()
    // Delete question function
    const deleteQuestion = async (e) => {
        e.preventDefault()

        try {
            await axios.delete(`http://localhost:4000/questions/${id}`, {
        })
        Navigate("/")
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className="card">
            <h5 className="card__title">{title}</h5>
            <p className="card__detail">{detail}</p>
            <div className="card__action">
                <Link className="btn btn-primary" to={`/question/${id}/edit`}>Edit</Link>
                <button className="btn btn-danger" onClick={(e) => deleteQuestion(e)}>Delete</button>
            </div>
        </div>
    )
}

export default QuestionCard;