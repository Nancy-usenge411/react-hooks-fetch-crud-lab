import React from "react";

function QuestionList({question, onDelete, onUpdate}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {question.map((question) => (
          <QuestionItem
          key={question.id}
          question={question}
          onDelete={onDelete}
          onUpdate={onUpdate}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
