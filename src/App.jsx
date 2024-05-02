import load from "./assets/load.svg";
import logo from "./assets/robot-logo.svg";
import chatBotlogo from "./assets/chat-bot.png";
import javalogo from "./assets/java-logo.png";
import OTPlogo from "./assets/OTP-logo.jpg";
import send from "./assets/send-button.png";
import Card from "./components/Card";
import ChatBox from "./components/ChatBox";
import React, { useState } from "react";
import axios from "axios";
import BackDrop from "./components/BackDrop";

const App = () => {
  const [isJavaQues, setIsJavaQues] = useState(false);
  const [isSent, setIsSent] = useState(true);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allMessages, setAllMessages] = useState([]);
  let isVerified;

  const handleVerification = async (value) => {
    setIsJavaQues(false);
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
    const apiKey = "AIzaSyCTAz26VBoS6wk0jg4VcrpXkbpWtiTkxmo";

    const requestBody = {
      contents: [
        ...allMessages,
        {
          role: "user",
          parts: [
            {
              text: message,
            },
          ],
        },
      ],
    };

    setIsSent(false);
    let response = await axios.post(`${url}?key=${apiKey}`, requestBody);
    isVerified = value;
    if (isVerified) {
      let responseMessage = response.data.candidates[0].content.parts[0].text;
      let newAllMessages = [
        ...allMessages,
        {
          role: "user",
          parts: [
            {
              text: message,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: responseMessage,
            },
          ],
        },
      ];
      setAllMessages(newAllMessages);
    } else {
      let newAllMessages = [
        ...allMessages,
        {
          role: "user",
          parts: [
            {
              text: message,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "To receive an answer to a Java question, you must use an OTP to validate.",
            },
          ],
        },
      ];
      setAllMessages(newAllMessages);
    }
    setIsSent(true);
    setIsJavaQues(false);
    setMessage("");
  };

  const sendMessage = async () => {
    const keywords = [
      "thanks",
      "bye",
      "thank you",
      "tq",
      "thank u",
      "programming",
      "code",
      "syntax",
      "algorithm",
      "function",
      "program",
      "python",
      "javascript",
      "typescript",
      "php",
      "ruby",
      "c",
      "c++",
      "c#",
      "swift",
      "go",
      "rust",
      "dart",
      "kotlin",
      "lua",
      "perl",
      "scala",
      "groovy",
      "haskell",
      "r",
      "sql",
      "assembly",
      "bash",
      "shell",
      "html",
      "css",
      "node.js",
      "react",
      "angular",
      "vue.js",
      "express",
      "webpack",
      "babel",
      "typescript",
      "jquery",
      "ajax",
      "json",
      "xml",
      "yaml",
      "rest",
      "graphql",
      "api",
      "oauth",
      "django",
      "flask",
      "numpy",
      "pandas",
      "matplotlib",
      "scikit-learn",
      "tensorflow",
      "keras",
      "pytorch",
      "laravel",
      "wordpress",
      "symfony",
      "codeigniter",
      "mysql",
      "mysqli",
      "pdo",
      "rails",
      "sinatra",
      "rspec",
      "gem",
      "rvm",
      "bundler",
      "std",
      "stl",
      "cplusplus",
      "cppreference",
      "boost",
      "cmake",
      "qt",
      "mfc",
      "dotnet",
      "asp.net",
      "unity",
      "linq",
      "entity framework",
      "wpf",
      "winforms",
      "xamarin",
      "ios",
      "macos",
      "swiftui",
      "coredata",
      "alamofire",
      "combine",
      "carthage",
      "cocoapods",
      "gorilla",
      "golang",
      "grpc",
      "beego",
      "gin",
      "go-kit",
      "cargo",
      "crates.io",
      "tokio",
      "actix",
      "serde",
      "rust-lang",
      "flutter",
      "dartlang",
      "pub",
      "dartfmt",
      "flutterfire",
      "firebase",
      "kotlinlang",
      "coroutines",
      "anko",
      "ktx",
      "jetbrains",
      "lua.org",
      "love2d",
      "corona sdk",
      "luafilesystem",
      "lpeg",
      "luarocks",
      "perl.org",
      "cpan",
      "moose",
      "dbi",
      "cgi",
      "mod_perl",
      "akka",
      "play framework",
      "scala-lang",
      "sbt",
      "spark",
      "lift",
      "grails",
      "spock",
      "gradle",
      "groovylang",
      "spring boot",
      "ratpack",
      "haskell.org",
      "cabal",
      "ghc",
      "hackage",
      "stack",
      "yesod",
      "r-project",
      "r-bloggers",
      "ggplot2",
      "shiny",
      "dplyr",
      "tidyr",
      "mysql",
      "postgresql",
      "sqlite",
      "mssql",
      "oracle",
      "nosql",
      "x86",
      "arm",
      "mips",
      "nasm",
      "masm",
      "gas",
      "bash",
      "zsh",
      "fish",
      "shellscript",
      "sh",
      "html5",
      "css3",
      "sass",
      "less",
      "bootstrap",
      "tailwindcss",
    ];

    const javaKeywords = [
      "java programming",
      "java code",
      "java syntax",
      "java algorithm",
      "java function",
      "java program",
      "java",
      "jdk",
      "jvm",
      "jre",
      "javac",
      "java virtual machine",
      "java runtime environment",
      "oop",
      "object-oriented programming",
      "class",
      "object",
      "inheritance",
      "polymorphism",
      "encapsulation",
      "abstraction",
      "interface",
      "abstract class",
      "package",
      "import",
      "static",
      "final",
      "public",
      "private",
      "protected",
      "extends",
      "implements",
      "super",
      "constructor",
      "method",
      "variable",
      "datatype",
      "primitive",
      "string",
      "array",
      "collection",
      "list",
      "arraylist",
      "linkedlist",
      "map",
      "hashmap",
      "set",
      "hashset",
      "tree",
      "treenode",
      "queue",
      "stack",
      "iterator",
      "stream",
      "lambda",
      "exception",
      "try",
      "catch",
      "finally",
      "throw",
      "throws",
      "assert",
      "enum",
      "synchronized",
      "volatile",
      "thread",
      "runnable",
      "threadpool",
      "concurrency",
      "synchronization",
      "multithreading",
      "serialization",
      "deserialization",
      "io",
      "inputstream",
      "outputstream",
      "file",
      "scanner",
      "printwriter",
      "console",
      "date",
      "calendar",
      "simpledateformat",
      "locale",
      "regex",
      "pattern",
      "matcher",
      "java.lang",
      "java.util",
      "java.io",
      "java.net",
      "java.awt",
      "java.swing",
      "jdbc",
      "jsp",
      "servlet",
      "spring",
      "spring boot",
      "hibernate",
      "jpa",
      "maven",
      "gradle",
      "log4j",
    ];

    setIsSubmitted(true);
    try {
      const url =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
      const apiKey = "AIzaSyCTAz26VBoS6wk0jg4VcrpXkbpWtiTkxmo";

      const requestBody = {
        contents: [
          ...allMessages,
          {
            role: "user",
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
      };

      setIsSent(false);
      let response = await axios.post(`${url}?key=${apiKey}`, requestBody);
      // console.log(response);
      if (
        javaKeywords.some((keyword) => message.toLowerCase().includes(keyword))
      ) {
        setIsJavaQues(true);
      }
      else if (
        keywords.some((keyword) => message.toLowerCase().includes(keyword)) &&
        response.data &&
        response.data.candidates &&
        response.data.candidates.length > 0
      ) {
        setIsSent(true);
        let responseMessage = response.data.candidates[0].content.parts[0].text;
        let newAllMessages = [
          ...allMessages,
          {
            role: "user",
            parts: [
              {
                text: message,
              },
            ],
          },
          {
            role: "model",
            parts: [
              {
                text: responseMessage,
              },
            ],
          },
        ];
        setAllMessages(newAllMessages);
        // console.log(allMessages);
        setMessage("");
      } else {
        setIsSent(true);
        let newAllMessages = [
          ...allMessages,
          {
            role: "user",
            parts: [
              {
                text: message,
              },
            ],
          },
          {
            role: "model",
            parts: [
              {
                text: "Hey there! Feel free to ask any programming-related question! From coding challenges to debugging tips, I'm here to assist with your software development inquiries.",
              },
            ],
          },
        ];
        setAllMessages(newAllMessages);
        setMessage("");
      }
    } catch (error) {
      let newAllMessages = [
        ...allMessages,
        {
          role: "user",
          parts: [
            {
              text: message,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: error.message,
            },
          ],
        },
      ];
      setAllMessages(newAllMessages);
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="h-screen flex flex-col items-center">
          <header className="flex flex-col items-center mt-5 mb-10 mx-3">
            <img src={logo} alt="Main logo" className="w-20 mb-3" />
            <h1 className="uppercase text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
              ChatBOT
            </h1>
            <p className="text-lg text-wrap text-center text-red-500">
              Introducing a programming Q&A chatbot that answers all programming
              questions.(except 'java')
            </p>
          </header>
          <main className="h-72 w-1/2 flex items-center gap-10 max-md:w-3/4 max-md:gap-5 max-md:h-2/5 max-[450px]:text-sm max-[450px]:w-full max-[450px]:mx-10 max-[450px]:gap-3">
            <Card
              img={chatBotlogo}
              content="A programming Q&A chatbot with advanced features! Users can ask any programming question"
            />
            <Card
              img={javalogo}
              content="Java questions are excluded from the chatbot's responses. Instead, it will display 'I will not answer Java questions.'"
            />
            <Card
              img={OTPlogo}
              content="If you specifically request an answer for a Java question, you'll need to trigger an OTP for verification"
            />
          </main>
        </div>
      ) : (
        <>
          <ChatBox messages={allMessages} />
          {isJavaQues && <BackDrop handleVerification={handleVerification} />}
        </>
      )}
      <div className="w-2/3 absolute bottom-10 flex translate-x-1/4 max-[450px]:w-11/12 max-[450px]:mx-5 max-[450px]:translate-x-0">
        <input
          type="text"
          value={message}
          className="h-20 max-[450px]:h-16 w-full pl-5 pr-20 text-wrap text-lg placeholder-black placeholder-opacity-60 bg-gray-300 outline-none rounded-3xl focus:bg-white"
          placeholder="Ask your questions here..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className={`absolute right-2 top-2 py-2 px-2 ${
            isSent ? "bg-blue-500 disabled:bg-stone-500" : "bg-transparent animate-spin"
          } rounded-r-3xl cursor-pointer disabled:cursor-not-allowed`}
          disabled={!message || !isSent}
          onClick={sendMessage}
        >
          <img src={isSent ? send : load} alt="Button" className="w-12 h-12 max-[450px]:h-8 max-[450px]:w-8" />
        </button>
      </div>
    </>
  );
};

export default App;
