import {
  QuizContainer,
  MultipleChoiseWrapper,
  MainContainer,
} from "./styles";
import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Button } from "@material-ui/core";
import AppContext from "../AppContext";
import Header from "../components/Header";

export const Quiz = () => {
  const router = useRouter();
  const context = useContext(AppContext);
  const questions=context.fetchedQuestions
  const [currentIndex, setCurrentIndex] = useState(0);
  const [multipleChoise, setMultipleChoise] = useState<string[]>([]);
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState("");
  const [wrongAnswerSelected, setWrongAnswerSelected] = useState("");
  const [points, setPoints] = useState(0);

  
  
  console.log(context.fetchedQuestions)
  const numberQuestions = (questions.length)
  console.log(numberQuestions)
 


  const shuffle = (choise: string[]) => {
    return choise.sort(() => Math.random() - 0.5);
  };

  const setChoise = useCallback(() => {
    if (!questions[currentIndex]?.correctAnswer) {
      return;
    }
    const shuffledAnswers = shuffle([
      questions[currentIndex]?.correctAnswer,
      ...questions[currentIndex]?.incorrectAnswers,
    ]);
    setMultipleChoise(shuffledAnswers);
  }, [currentIndex, questions]);

  const goToResults = (points: number) => () => {
    router.push({
      pathname: "Results",
      query: { points },
    });
  };

  const chooseCorrectAnswer = (questionOption: string) => {
    setCorrectAnswerSelected(questionOption);
    setPoints(points + 1);
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, 3000);
    setTimeout(() => {
      setCorrectAnswerSelected("");
    }, 2000);
  };

  const chooseWrongAnswer = (questionOption: string) => {
    setWrongAnswerSelected(questionOption);
    setCorrectAnswerSelected(questions[currentIndex].correctAnswer);
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, 3000);
    setTimeout(() => {
      setWrongAnswerSelected("");
    }, 2000);
  };

  const isCorrect = (questionOption: string) => {
    const isIndexInQuestionsRange = currentIndex < questions.length - 1;
    if (isIndexInQuestionsRange) {
      if (questionOption == questions[currentIndex].correctAnswer) {
        chooseCorrectAnswer(questionOption);
        return;
      }
      chooseWrongAnswer(questionOption);
      return;
    }

    let newPoints = points;

    if (questionOption == questions[currentIndex].correctAnswer) {
      newPoints++;
      setCorrectAnswerSelected(questionOption);

      setPoints(newPoints);
    }

    if (questionOption != questions[currentIndex].correctAnswer) {
      setWrongAnswerSelected(questionOption);
      setCorrectAnswerSelected(questions[currentIndex].correctAnswer);
    }

    

    setTimeout(goToResults(newPoints), 3000);
  };

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    if (questions) {
      setChoise();
    }
  }, [questions, setChoise]);

  console.log("multiple choice", multipleChoise);
  console.log("points", points);

  return (
    <MainContainer>
       <Header title="Try Your Best!" />
      <QuizContainer>
        {questions.length > currentIndex && (
          <div>{questions[currentIndex].question}</div>
        )}
        <MultipleChoiseWrapper>
          {multipleChoise.map((el) => (
            <Button
              variant="outlined"
              sx={{
                backgroundColor:
                  el == correctAnswerSelected
                    ? "green"
                    : el == wrongAnswerSelected
                    ? "red"
                    : "",
                color: "black",
                margin: "15px",
                display: "flex",
                width: 300,
                borderRadius: 12,
              }}
              onClick={() => isCorrect(el)}
              key={el}
            >
              {el}{" "}
            </Button>
          ))}
        </MultipleChoiseWrapper>

        <div>
          {" "}
          Points {points} / {numberQuestions}{" "}
        </div>
      </QuizContainer>
    </MainContainer>
  );
};

export default Quiz;
