import React, { useEffect, useState } from 'react';
import axios from "axios"
import QuestionCard from '../components/QuestionCard';
import "../styles/main.scss"
import SearchBar from '../components/common/SearchBar';

const QuestionListPage = () => {
    const [questions, setQuestions] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    
  useEffect(() => {
    axios.get("http://localhost:4000/questions").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  const refreshAPI = () => {
    axios.get("http://localhost:4000/questions").then((res) => {
    setQuestions(res.data);
  });
  }
  const renderQuestionList = () => {
    let questionList = questions;
    if (searchQuery) {
      questionList = questionList.filter(({title}) => 
      title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return questionList.map(({title, detail, id}) => {
      return <QuestionCard title={title} detail={detail} id={id} key={id} />
    })
  }
  
  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='list'>
        {renderQuestionList()}
      </div>
    </>
    );
  };


export default QuestionListPage;
