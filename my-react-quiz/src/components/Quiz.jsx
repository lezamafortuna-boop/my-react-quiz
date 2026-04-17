import { useState, useEffect } from "react";
import "./Quiz.css";
import styles from "./Quiz.module.css";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  LinearProgress
} from "@mui/material";
import questions from "./questions";

function Quiz() {
  const [name, setName] = useState("");

  // Shuffle questions state
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);

  // Answers must be based on shuffledQuestions
  const [answers, setAnswers] = useState(
    Object.fromEntries(shuffledQuestions.map((q) => [q.id, ""]))
  );

  const [showResults, setShowResults] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  // Load saved name
  useEffect(() => {
    const savedName = localStorage.getItem("quizName") || "";
    setName(savedName);
  }, []);

  // Save name automatically
  useEffect(() => {
    if (name.trim() !== "") {
      localStorage.setItem("quizName", name);
    }
  }, [name]);

  // Shuffle questions
  const shuffleQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);

    // Reset answers to match new order
    setAnswers(Object.fromEntries(shuffled.map((q) => [q.id, ""])));

    setShowResults(false);
    setShowCorrect(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers(Object.fromEntries(shuffledQuestions.map((q) => [q.id, ""])));
    setShowResults(false);
    setShowCorrect(false);
  };

  // Compute score + message + progress
  const getResult = () => {
    const score = shuffledQuestions.reduce((acc, q) => {
      return acc + (answers[q.id] === q.correct ? 1 : 0);
    }, 0);

    let message = "";
    if (score === shuffledQuestions.length) message = `${name}, you're a React Wizard`;
    else if (score >= shuffledQuestions.length * 0.7)
      message = `${name}, you're a React Apprentice`;
    else if (score >= shuffledQuestions.length * 0.4)
      message = `${name}, you're a React Explorer`;
    else message = `${name}, you're just getting started — keep going`;

    const progress = Math.round(
      (Object.values(answers).filter((a) => a !== "").length /
        shuffledQuestions.length) *
        100
    );

    return { score, message, progress };
  };

  const result = getResult();

  return (
    <div className="quiz-container">
      <Card sx={{ maxWidth: 700, margin: "20px auto", padding: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            BuzzFeed‑Style React Quiz
          </Typography>

          {/* QUIZ FORM */}
          {!showResults && (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                value={name}
                onChange={handleNameChange}
                fullWidth
                required
                sx={{ marginBottom: 3 }}
              />

              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Welcome {name || "friend"}! Let's test your React knowledge.
              </Typography>

              <Button
                variant="outlined"
                sx={{ marginBottom: 2 }}
                onClick={shuffleQuestions}
              >
                Shuffle Questions
              </Button>

              {shuffledQuestions.map((q, index) => (
                <div key={q.id} className={styles.question}>
                  <h3>{index + 1}. {q.text}</h3>

                  {q.type === "radio" &&
                    q.options.map((opt) => (
                      <label
                        key={opt.value}
                        className={
                          showCorrect && opt.value === q.correct
                            ? styles.correctAnswer
                            : ""
                        }
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={opt.value}
                          checked={answers[q.id] === opt.value}
                          onChange={handleAnswerChange}
                          disabled={showCorrect}
                        />
                        {opt.label}
                      </label>
                    ))}

                  {q.type === "select" && (
                    <select
                      name={q.id}
                      value={answers[q.id]}
                      onChange={handleAnswerChange}
                      disabled={showCorrect}
                    >
                      {q.options.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className={
                            showCorrect && opt.value === q.correct
                              ? styles.correctAnswer
                              : ""
                          }
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}

              <Button type="submit" variant="contained" sx={{ marginTop: 4 }}>
                Submit Quiz
              </Button>
            </form>
          )}

          {/* RESULTS SCREEN */}
          {showResults && (
            <div>
              <Typography variant="h5" sx={{ marginTop: 3 }}>
                Your Results
              </Typography>

              <LinearProgress
                variant="determinate"
                value={result.progress}
                sx={{ marginBottom: 3 }}
              />
              <p>{result.progress}% completed</p>

              <p>
                <strong>Score:</strong> {result.score} / {shuffledQuestions.length}
              </p>
              <p>{result.message}</p>

              <div className={styles.buttonRow}>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 2, paddingX: 2, margin: 2 }}
                  onClick={shuffleQuestions}
                >
                  Shuffle Questions
                </Button>

                <Button
                  variant="outlined"
                  onClick={resetQuiz}
                  sx={{ borderRadius: 2, paddingX: 2, margin: 2 }}
                >
                  Retake Quiz
                </Button>

                <Button
                  variant="contained"
                  color="success"
                  sx={{ borderRadius: 2, paddingX: 3, fontWeight: "bold", margin: 2 }}
                  onClick={() => setShowCorrect(true)}
                >
                  Show Correct Answers
                </Button>
              </div>
            </div>
          )}

          {/* CORRECT ANSWERS REVIEW */}
          {showCorrect && (
            <div className={styles.reviewContainer}>
              <h3>Correct Answers</h3>

              {shuffledQuestions.map((q, index) => (
                <div key={q.id} className={styles.question}>
                  <h4>{index + 1}. {q.text}</h4>

                  {q.options.map((opt) => (
                    <p
                      key={opt.value}
                      className={
                        opt.value === q.correct ? styles.correctAnswer : ""
                      }
                    >
                      {opt.label}
                    </p>
                  ))}

                 {/* ⭐ Back to Top Button */}
                 <Button
                  variant="outlined"
                  sx={{ marginTop: 3 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                 >
                 Back to Top
                 </Button>

                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Quiz;