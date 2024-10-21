// Chatbot.js
import React, { useState } from "react";

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you today?" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { sender: "user", text: input };
            setMessages([...messages, userMessage]);
            setInput("");

            // Simple bot response logic
            setTimeout(() => {
                const botReply = {
                    sender: "bot",
                    text: "You said: " + input,
                };
                setMessages((prevMessages) => [...prevMessages, botReply]);
            }, 1000);
        }
    };

    return (
        <div style={styles.chatContainer}>
            <div style={styles.messageList}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={
                            msg.sender === "user"
                                ? styles.userMessage
                                : styles.botMessage
                        }
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div style={styles.inputContainer}>
                <input
                    style={styles.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend} style={styles.button}>
                    Send
                </button>
            </div>
        </div>
    );
};

const styles = {
    chatContainer: {
        width: "300px",
        height: "400px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
    },
    messageList: {
        flexGrow: 1,
        overflowY: "auto",
    },
    userMessage: {
        textAlign: "right",
        padding: "5px",
        background: "#e0ffe0",
        borderRadius: "5px",
        marginBottom: "5px",
    },
    botMessage: {
        textAlign: "left",
        padding: "5px",
        background: "#e0e0ff",
        borderRadius: "5px",
        marginBottom: "5px",
    },
    inputContainer: {
        display: "flex",
    },
    input: {
        flexGrow: 1,
        padding: "5px",
    },
    button: {
        marginLeft: "5px",
        padding: "5px",
    },
};

export default Chatbot;
