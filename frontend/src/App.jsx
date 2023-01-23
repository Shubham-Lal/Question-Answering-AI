import React, { useEffect } from "react";
import Header from "./assets/header.png";
import Avatar from "./assets/hacker.png";
import ChatBot from "./assets/chatbot.png";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import Typewriter from 'typewriter-effect';

const USER = "user";
const AI = "ai";

function App() {
  const inputRef = useRef();
  const [text, setText] = useState("");
  const [qna, setQna] = useState([
    {
      from: AI,
      value: "Hii! How are you feeling today?"
    }
  ]);
  const [loading, setLoading] = useState(false);

  // DISPLAYING QUESTION & RESULTS
  const renderContent = (qna) => {
    const value = qna.value;

    if (Array.isArray(value)) {
      const typewriter = new Typewriter("", {
        loop: true,
        delay: 75,
      });
      return value.map((v, i) => (
        <span key={i}>
          <Typewriter
            options={{
              strings: [v.toString()],
              autoStart: true,
              delay: 5,
              deleteSpeed: 3600000,

            }}
          />
        </span>
      ))
    }
    return <span>{value}</span>
  };

  const updateQNA = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };

  // ASKING QUESTIONS
  const handleSend = (e) => {
    e.preventDefault();
    const question = text;
    setText("");
    if (question !== "") {
      updateQNA(USER, text)
      setLoading(true);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/chat`, {
          question,
        })
        .then((response) => {
          updateQNA(AI, response.data.answer);
        })
        .finally(() => {
          setLoading(false);
        })
    }
    else {
      alert("Enter your question first!");
    }
  }

  const scrollRef = useRef();
  const scrollingBottom = () => {
    const e = scrollRef;
    e.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };
  useEffect(() => {
    scrollingBottom();
  });


  return (
    <>
      <header className="header">
        <a href="/">
          <img src={Header} className="header-img" alt="" />
        </a>
      </header>
      <main className="container">
        <div className="chats scrollbar">
          {
            qna.map((qna, index) => {
              if (qna.from === USER) {
                return (
                  <div className="send chat" key={index}>
                    <img
                      src={Avatar}
                      alt="user"
                      className="avtar"
                    />
                    <p>
                      {
                        renderContent(qna)
                      }
                    </p>
                  </div>
                )
              }
              return (
                <div className="recieve chat" key={index}>
                  <img
                    src={ChatBot}
                    alt=""
                    className="avtar"
                  />
                  <div>
                    {
                      renderContent(qna)
                    }
                  </div>
                  {/* <p>
                    {
                      renderContent(qna)
                    }
                  </p> */}
                </div>
              )
            })
          }
          {loading && (
            <div className="recieve chat">
              <img
                src={ChatBot}
                alt=""
                className="avtar"
              />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Typing...").start();
                }}
              />
            </div>
          )}
          <div ref={scrollRef}></div>
        </div>

        <form className="chat-input" onSubmit={handleSend}>
          <input
            type="text"
            className="form-control col"
            placeholder={loading ? "Asking..." : "Ask something"}
            value={text}
            autoFocus={false}
            onChange={(e) => setText(e.target.value)}
          />
          <button disabled={loading} type="submit" className="btn btn-success">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </main>
    </>
  )

};

export default App
