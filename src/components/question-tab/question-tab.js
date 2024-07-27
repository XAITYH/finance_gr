'use client'
import React, { useEffect, useState } from "react";
import styles from "./question-tab.module.css";
import { Question } from "../question/question";
import { ProgressBar } from "../progress-bar/progress-bar";
import { FooterNav } from "../footer-nav/footer-nav";
import fetchData from '../../api/data';

export default function QuestionTab () {
  const [questions, setQuestions] = useState([]);  
  const [answers, setAnswers] = useState([]);
  useEffect(() => {  
    const loadData = async () => {  
      try {  
        const { questions, answers } = await fetchData();  
        console.log(questions, answers); // Проверка данных  
        setQuestions(questions);  
        setAnswers(answers);  
      } catch (error) {  
        console.error("Error fetching data:", error); // Логирование ошибок  
      }  
    }; 

    loadData();
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const filteredAnswers = answers.filter(
    (answer) => answer.question_id === currentQuestion.id
  );

  if (questions.length === 0 || answers.length === 0) {  
    return <div>Loading...</div>; 
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  console.log(currentQuestion);

  return (
    <div className={styles.questionTab}>
      <header className={styles.header}>
        <Question currentQuestion={currentQuestion} currentQuestionIndex={currentQuestionIndex}/>
      </header>
      <main className={styles.main}>
        <ProgressBar currentQuestionIndex={currentQuestionIndex}/>
      </main>
      <div className={styles.answers}>
        {filteredAnswers.map((answer, index) => (
          <div className={styles.answer} key={index}>
            <ul>
              <li>{answer.content}</li>
            </ul>
          </div>
        ))}
      </div>
      <footer className={styles.footer}>
        <FooterNav onNextQuestion={handleNextQuestion}/>
      </footer>
    </div>
  );
};
