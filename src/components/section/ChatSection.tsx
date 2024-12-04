import { useState } from "react";
import MessageIcon from "@/assets/icons/MessageIcon";

const ChatSection = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="w-10 h-10 rounded-full flex justify-center items-center"
      >
        <MessageIcon color="#000" />
      </button>

      {openChat && (
        <div
          className={`absolute top-0 right-12 w-[300px] h-[450px] rounded-r-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            openChat ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <div>
            <h3>Amanullha Zoha</h3>
          </div>

          <div></div>

          <div className="flex gap-2">
            <input type="text" placeholder="Type your message..." />

            <button type="button">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
