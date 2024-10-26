// Chatbot.js
import { useState } from "react";

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
        width: "90vw",
        height: "80dvh",
        border: "1px solid #d3d3d3",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "15px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    messageList: {
        flexGrow: 1,
        overflowY: "auto",
        paddingRight: "10px",
        marginBottom: "10px",
        scrollbarWidth: "thin",
        scrollbarColor: "#c0c0c0 #f9f9f9",
    },
    userMessage: {
        alignSelf: "flex-end",
        maxWidth: "70%",
        textAlign: "right",
        padding: "10px 15px",
        background: "#d1ffd1",
        borderRadius: "15px 15px 0 15px",
        marginBottom: "8px",
        color: "#333",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    botMessage: {
        alignSelf: "flex-start",
        maxWidth: "70%",
        textAlign: "left",
        padding: "10px 15px",
        background: "#e1e7ff",
        borderRadius: "15px 15px 15px 0",
        marginBottom: "8px",
        color: "#333",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid #d3d3d3",
        paddingTop: "10px",
        color: "black",
    },
    input: {
        flexGrow: 1,
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #d3d3d3",
        outline: "none",
        fontSize: "14px",
        marginRight: "10px",
        backgroundColor: "#fff",
        color: "black",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#4caf50",
        border: "none",
        borderRadius: "5px",
        color: "#fff",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        transition: "background-color 0.2s ease",
    },
    buttonHover: {
        backgroundColor: "#45a049",
    },
};

export default Chatbot;
