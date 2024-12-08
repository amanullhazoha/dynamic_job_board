"use client";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:4000");

const Message = ({
  user,
  message,
  senderType,
}: {
  user: any;
  message: any;
  senderType: string;
}) => {
  return (
    <div
      className={`flex ${
        senderType === "owner" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`p-2 rounded-lg max-w-xs  ${
          senderType === "owner"
            ? "bg-green-200 text-right"
            : "bg-gray-200 text-left"
        }`}
      >
        <p className="text-sm font-semibold">
          {senderType === "owner" ? user?.fullName : "Requiter"}
        </p>

        <p className="text-sm">{message?.content}</p>

        <span className="text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

const ChatSection = ({
  jobId,
  requiterId,
}: {
  jobId: string;
  requiterId: string;
}) => {
  const [user, setUser] = useState<any | null>(null);

  const accessToken: string | undefined = Cookies.get("access_token");

  const [messages, setMessages] = useState<any>([]);
  const [userMessage, setUserMessage] = useState("");
  const [lastSenderToRecruiter, setLastSenderToRecruiter] = useState<
    string | null
  >(null);

  const handleSendMessage = () => {
    const message = {
      jobId: jobId,
      userId: user?.id,
      content: userMessage,
      requiterId: requiterId,
      timestamp: new Date().toISOString(),
    };

    socket.emit("sendMessage", { jobId, message });

    setMessages((prev: any) => [...prev, message]);

    setLastSenderToRecruiter(user?.id);

    setUserMessage("");
  };

  useEffect(() => {
    if (accessToken) {
      const dataDecode = accessToken && jwtDecode(accessToken);

      if (dataDecode) {
        setUser(dataDecode);
      }
    } else {
      setUser(null);
    }
  }, [accessToken]);

  useEffect(() => {
    socket.emit("joinRoom", Number(jobId)); //room joined

    console.log("socket connected");

    socket.on("chatHistory", (history: any) => {
      setMessages(history);

      console.log(history, "histroy");
    });

    socket.on("receiveMessage", (message: any) => {
      console.log(message, "received");

      setMessages((prev: any) => [message, ...prev]);
    });

    return () => {
      console.log("socket disconnected");

      socket.disconnect();
    };
  }, [user, jobId, lastSenderToRecruiter]);

  console.log(messages, user);

  return (
    <div className="border rounded-lg shadow-lg p-2 max-w-md mx-auto bg-white fixed right-10 bottom-10 z-10">
      <h3 className="text-xl font-bold mb-4">Chat with Recruiter</h3>

      <div className="space-y-3 overflow-y-scroll max-h-72 p-2 border rounded-md bg-gray-50">
        {messages?.map((message: any) => (
          <Message
            senderType={user?.id === message?.userId ? "owner" : "requiter"}
            message={message}
            user={user}
          />
        ))}
      </div>

      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          value={userMessage}
          placeholder="Type a message..."
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 p-2 border rounded-md focus:outline-none"
        />

        <button
          type="button"
          onClick={handleSendMessage}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
