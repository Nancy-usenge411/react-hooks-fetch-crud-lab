import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) =>{
      setQuestions(data);
      setIsloading(false);
    });
  })

  const handleAddQuestion = (newQuestion) => {
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
    .then((response) => response.json())
    .then((savedQuestion) => {
      setQuestions([...QuestionForm, savedQuestion])
    })
  }

  const handleDeleteQueston =(id) => {
    faetch(`http://localhost:4000/questions/${id}`),{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({correctIndex: updatedCorrectIndex })
    }
    .then((response)=> response.json())
    .then((updatedQuestions) => {
      const updatedQuestion = question.map((q) =>
        q.id === id ? updatedQuestion: q
    )
    setQuestion(updatedQuestions)
    })
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
