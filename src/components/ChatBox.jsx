import React from "react";
import user from "../assets/profile-user.png";
import bot from "../assets/bot.svg";
const ChatBox = (props) => {
  return (
    <div className="absolute flex flex-col gap-6 max-[450px]:gap-3 h-3/4 max-[450px]:h-4/5 w-2/3 max-[450px]:w-full p-5 max-[450px]:pl-3 pr-10 max-[450px]:pr-5 bg-slate-200 top-10 max-[450px]:top-0 left-1/2 max-[450px]:left-0 -translate-x-1/2 max-[450px]:translate-x-0 rounded-3xl max-[450px]:rounded-t-none overflow-auto scrollbar-hide">
      {props.messages.map((msg, index) => (
        <div key={index} className="flex gap-4 max-[450px]:gap-2">
          <img
            src={msg.role === "user" ? user : bot}
            alt="user icon"
            className="w-6 h-6"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-amber-800">
              {msg.role === "user" ? "You" : "ChatBot"}
            </h3>
            <div
              className={`px-5 py-2 break-words leading-relaxed ${
                msg.role === "user"
                  ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600"
                  : "text-black bg-stone-200 border border-black"
              } rounded-lg`}
            >
              <pre className="whitespace-pre-wrap">{msg.parts[0].text}</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
