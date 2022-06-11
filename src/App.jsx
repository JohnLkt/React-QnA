// import React, { useEffect, useState } from 'react';
// import axios from "axios"
// import QuestionCard from './components/QuestionCard';
import "./styles/main.scss"
import QuestionListPage from "./pages/QuestionListPage"
import Layout from "./components/common/Layout";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import QuestionEditForm from "./pages/QuestionEditForm";
import QuestionAddForm from "./pages/QuestionAddForm";


const App = () => (

  // const [dummy, setDummy] = useState(false);

  // useEffect(() => {
  //   console.log('Use effect running');
  //   console.log(dummy);
  // }, []);

  // useEffect(() => {
  //   console.log('dummy changed');
  //   console.log(dummy);
  // }, [dummy]); (dependencies)

  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:4000/questions").then((res) => {
  //     setQuestions(res.data);
  //   });
  // }, []);



  // return (
  // <div>
  //   <h1>react app</h1>
  //   {/* {questions} */}
  //   {/* <button onClick={() => setDummy(!dummy)}>setDummy</button> */}
  //   {/* <QuestionCard title={"judul Pertanyaan"} details={"Detail Pertanyaan"}/> */}
  //   {questions.map(({title, detail, id}) => {
  //     return <QuestionCard title={title} detail={detail} key={id}/>
  //   })}
  // </div>

  // );
  <Layout>
    <Routes>
      <Route path="/" element={<QuestionListPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/question/:id/edit" element={<QuestionEditForm/>} />
      <Route path="/add" element={<QuestionAddForm />} />
    </Routes>
  </Layout>
  );

export default App;

// Used libraries
// -SASS
// -axios