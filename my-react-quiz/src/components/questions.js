// questions.js
const questions = [
  {
    id: "q1",
    text: "What do we use to track form values in React?",
    type: "radio",
    options: [
      { value: "state", label: "State (controlled components)" },
      { value: "cookies", label: "Cookies" },
      { value: "localstorage", label: "LocalStorage" }
    ],
    correct: "state"
  },
  {
    id: "q2",
    text: "What should validation always provide?",
    type: "select",
    options: [
      { value: "", label: "Choose one" },
      { value: "feedback", label: "Good user feedback" },
      { value: "security", label: "Better security" },
      { value: "both", label: "Both of the above" }
    ],
    correct: "feedback"
  },
  {
    id: "q3",
    text: "What do React events do by default?",
    type: "radio",
    options: [
      { value: "bubbling", label: "They bubble upward" },
      { value: "capture", label: "They capture downward" },
      { value: "stop", label: "They stop automatically" }
    ],
    correct: "bubbling"
  },
  {
    id: "q4",
    text: "Which hook lets you store component state?",
    type: "radio",
    options: [
      { value: "useState", label: "useState" },
      { value: "useEffect", label: "useEffect" },
      { value: "useMemo", label: "useMemo" }
    ],
    correct: "useState"
  },
  {
    id: "q5",
    text: "Which event handler updates form values?",
    type: "radio",
    options: [
      { value: "handleChange", label: "handleChange" },
      { value: "handleClick", label: "handleClick" },
      { value: "handleSubmit", label: "handleSubmit" }
    ],
    correct: "handleChange"
  },

  // ⭐ NEW QUESTIONS BELOW ⭐

  {
    id: "q6",
    text: "Which hook is used for side effects?",
    type: "radio",
    options: [
      { value: "useEffect", label: "useEffect" },
      { value: "useState", label: "useState" },
      { value: "useRef", label: "useRef" }
    ],
    correct: "useEffect"
  },
  {
    id: "q7",
    text: "What does JSX stand for?",
    type: "radio",
    options: [
      { value: "javascriptXML", label: "JavaScript XML" },
      { value: "jsonX", label: "JSON Extended" },
      { value: "javaSyntax", label: "Java Syntax Extension" }
    ],
    correct: "javascriptXML"
  },
  {
    id: "q8",
    text: "Which hook stores values across renders without causing re-renders?",
    type: "radio",
    options: [
      { value: "useRef", label: "useRef" },
      { value: "useState", label: "useState" },
      { value: "useEffect", label: "useEffect" }
    ],
    correct: "useRef"
  },
  {
    id: "q9",
    text: "What is the correct way to pass props?",
    type: "radio",
    options: [
      { value: "parentToChild", label: "From parent to child" },
      { value: "childToParent", label: "From child to parent" },
      { value: "anyDirection", label: "Any direction" }
    ],
    correct: "parentToChild"
  },
  {
    id: "q10",
    text: "What is the purpose of keys in lists?",
    type: "radio",
    options: [
      { value: "identifyElements", label: "To uniquely identify list elements" },
      { value: "styleElements", label: "To style list items" },
      { value: "sortElements", label: "To sort elements automatically" }
    ],
    correct: "identifyElements"
  },
  {
    id: "q11",
    text: "Which hook is best for memoizing expensive calculations?",
    type: "radio",
    options: [
      { value: "useMemo", label: "useMemo" },
      { value: "useEffect", label: "useEffect" },
      { value: "useCallback", label: "useCallback" }
    ],
    correct: "useMemo"
  },
  {
    id: "q12",
    text: "Which hook returns a memoized callback function?",
    type: "radio",
    options: [
      { value: "useCallback", label: "useCallback" },
      { value: "useMemo", label: "useMemo" },
      { value: "useState", label: "useState" }
    ],
    correct: "useCallback"
  },
  {
    id: "q13",
    text: "React components must return:",
    type: "radio",
    options: [
      { value: "jsx", label: "A single JSX element" },
      { value: "string", label: "A string" },
      { value: "array", label: "An array of elements only" }
    ],
    correct: "jsx"
  },
  {
    id: "q14",
    text: "What is the virtual DOM?",
    type: "radio",
    options: [
      { value: "lightweightCopy", label: "A lightweight copy of the real DOM" },
      { value: "browserDom", label: "The actual browser DOM" },
      { value: "jsonDom", label: "A JSON representation of HTML" }
    ],
    correct: "lightweightCopy"
  },
  {
    id: "q15",
    text: "Which method updates state based on previous state?",
    type: "radio",
    options: [
      { value: "functionalUpdate", label: "Functional state update" },
      { value: "directAssignment", label: "Direct assignment" },
      { value: "setDom", label: "setDOM()" }
    ],
    correct: "functionalUpdate"
  },
  {
    id: "q16",
    text: "What is lifting state up?",
    type: "radio",
    options: [
      { value: "moveStateUp", label: "Moving shared state to a common parent" },
      { value: "moveStateDown", label: "Passing state down multiple children" },
      { value: "globalState", label: "Using global state everywhere" }
    ],
    correct: "moveStateUp"
  },
  {
    id: "q17",
    text: "Which hook is used for managing global state in React?",
    type: "radio",
    options: [
      { value: "useContext", label: "useContext" },
      { value: "useState", label: "useState" },
      { value: "useEffect", label: "useEffect" }
    ],
    correct: "useContext"
  },
  {
    id: "q18",
    text: "What does React.StrictMode do?",
    type: "radio",
    options: [
      { value: "highlightIssues", label: "Highlights potential problems in an app" },
      { value: "optimizeSpeed", label: "Optimizes performance automatically" },
      { value: "disableWarnings", label: "Disables warnings" }
    ],
    correct: "highlightIssues"
  },
  {
    id: "q19",
    text: "Which hook triggers re-renders when updated?",
    type: "radio",
    options: [
      { value: "useState", label: "useState" },
      { value: "useRef", label: "useRef" },
      { value: "useMemo", label: "useMemo" }
    ],
    correct: "useState"
  },
  {
    id: "q20",
    text: "What is the correct way to conditionally render content?",
    type: "radio",
    options: [
      { value: "ternary", label: "Using a ternary operator" },
      { value: "loop", label: "Using a for loop" },
      { value: "cssOnly", label: "Using CSS only" }
    ],
    correct: "ternary"
  }
];

export default questions;